'use client';

//app/instituicao/gerenciar_cursos
import emailjs from '@emailjs/browser';
import React, { useEffect, useState } from 'react';
import Papa, { ParseResult } from 'papaparse';

interface AlunosCSVRow {
    curso: string;
    nome: string;
    cpf: string;
    email: string;
    entrada: string;
    saida?: string | null;
}
interface Matricula {
    cursoId: number;
    pessoaId: number;
    entrada: string;
    saida: string | null;
    matricula: string;
}

export default function App_Instituicao() {
    const [perfil, setPerfil] = useState<any>(null);
    const [pessoas, setPessoas] = useState<{ id: number; nome: string; cpf: string; email: string }[]>([]);
    const [matriculas, setMatriculas] = useState<{ cursoId: number; pessoaId: number; entrada: string; saida: string | null }[]>([]);
    const [cursos, setCursos] = useState<any[]>([]);
    const [alunos, setAlunos] = useState<any[]>([]);

    const salvarDadosNoBanco = async (cursosParaSalvar: { id: number; nome: string }[], pessoasParaSalvar: { id: number; nome: string; cpf: string; email: string }[], matriculasParaSalvar: Matricula[]) => {
        try {
            const response = await fetch('/api/instituicao/importar_csv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cursos: cursosParaSalvar, pessoas: pessoasParaSalvar, matriculas: matriculasParaSalvar }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message || 'Dados do CSV salvos no banco de dados com sucesso!');
                setCursos([]);
                setPessoas([]);
                setMatriculas([]);
                setAlunos([]);
                buscarAlunosDoBanco();
            } else {
                alert(data.error || 'Erro ao salvar os dados do CSV no banco de dados.');
            }
        } catch (error) {
            alert('Erro de conexão com o servidor ao tentar salvar os dados.');
        }
    };

    useEffect(() => {
        const dadosPerfil = localStorage.getItem("perfilInstituicao");
        if (dadosPerfil) {
            setPerfil(JSON.parse(dadosPerfil));
        } else {
            buscarPerfilInstituicao();
        }
    }, []);

    const buscarPerfilInstituicao = async () => {
        try {
            const response = await fetch(`/api/instituicao/perfil_instituicao`);
            if (response.ok) {
                const data = await response.json();
                setPerfil(data);
                localStorage.setItem("perfilInstituicao", JSON.stringify(data));
            }
        } catch (error) {}
    };

    useEffect(() => {
        buscarAlunosDoBanco();
    }, []);

    function gerarCodigoAleatorio() {
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let codigo = "";
        for (let i = 0; i < 8; i++) {
            codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return codigo;
    }

    async function enviarEmail(email: string, codigo: string): Promise<boolean> {
        const templateParams = {
            to_email: email,
            codigo: codigo,
        };

        try {
            await emailjs.send(
                "service_rqwpj7q",
                "template_12nvjhg",
                templateParams,
                "Ygc6WQijXU3rWrMEV"
            );
            return true;
        } catch (error) {
            return false;
        }
    }

    const processarCSV = async (file: File, tipo: "cursos" | "alunos"): Promise<void> => {
        return new Promise<void>((resolve, reject) => {
            const reader = new FileReader();
            const emailsEnviados = new Set<string>();

            reader.onload = async (e: ProgressEvent<FileReader>) => {
                if (!e.target?.result) {
                    reject(new Error("Falha ao ler o arquivo"));
                    return;
                }
                try {
                    await processarDadosCSV(e.target.result as string, tipo, emailsEnviados);
                    resolve();
                } catch (error) {
                    reject(error);
                }
            };

            reader.onerror = () => {
                reject(new Error("Erro na leitura do arquivo"));
            };

            reader.readAsText(file);
        });
    };

    const processarDadosCSV = async (
        csvData: string,
        tipo: "cursos" | "alunos",
        emailsEnviados: Set<string>
    ): Promise<void> => {
        return new Promise((resolve, reject) => {
            Papa.parse<AlunosCSVRow>(csvData, {
                header: true,
                skipEmptyLines: true,
                complete: (result: ParseResult<AlunosCSVRow>) => {
                    try {
                        if (tipo === "alunos") {
                            (async () => {
                                await processarAlunos(result.data, emailsEnviados);
                                resolve();
                            })();
                        } else {
                            resolve();
                        }
                    } catch (error) {
                        reject(error);
                    }
                },
                error: (err: Error) => {
                    reject(new Error(`Erro ao parsear CSV: ${err.message}`));
                },
            });
        });
    };

    const processarAlunos = async (
        dados: AlunosCSVRow[],
        emailsEnviados: Set<string>
    ): Promise<void> => {
        const CPFDuplicado = new Map<string, AlunosCSVRow>();
        const novosCursos: { id: number; nome: string }[] = [];
        const novasPessoas: { id: number; nome: string; cpf: string; email: string }[] = [];
        const novasMatriculas: Matricula[] = [];

        dados.forEach((row) => {
            const cpf = String(row.cpf || "").trim();
            if (!CPFDuplicado.has(cpf)) {
                CPFDuplicado.set(cpf, {
                    curso: String(row.curso || ""),
                    nome: String(row.nome || ""),
                    cpf,
                    email: String(row.email || ""),
                    entrada: String(row.entrada || ""),
                    saida: !row.saida || row.saida.trim() === "" ? "Em andamento" : row.saida
                });
            }
        });

        const dadosFiltrados = Array.from(CPFDuplicado.values());
        const cursoMap = new Map<string, number>();
        const pessoaMap = new Map<string, number>();
        let cursoIdCounter = 1;
        let pessoaIdCounter = 1;

        for (const aluno of dadosFiltrados) {
            const cursoNome = aluno.curso.trim();
            const cpf = aluno.cpf.trim();

            if (!cursoMap.has(cursoNome)) {
                cursoMap.set(cursoNome, cursoIdCounter++);
                novosCursos.push({ id: cursoMap.get(cursoNome)!, nome: cursoNome });
            }

            if (!pessoaMap.has(cpf) && !emailsEnviados.has(aluno.email)) {
                const codigo = gerarCodigoAleatorio();
                const enviado = await enviarEmail(aluno.email, codigo);

                if (enviado) {
                    emailsEnviados.add(aluno.email);
                    pessoaMap.set(cpf, pessoaIdCounter++);
                    novasPessoas.push({
                        id: pessoaMap.get(cpf)!,
                        nome: aluno.nome,
                        cpf: aluno.cpf,
                        email: aluno.email,
                    });

                    const cursoId = cursoMap.get(cursoNome)!;
                    const pessoaId = pessoaMap.get(cpf)!;
                    const saidaTratada = aluno.saida === "Em andamento" ? null : aluno.saida || null;

                    novasMatriculas.push({
                        cursoId,
                        pessoaId,
                        entrada: aluno.entrada,
                        saida: saidaTratada,
                        matricula: `${cursoId}-${pessoaId}-${aluno.entrada}-${aluno.saida || "Em andamento"}`
                    });
                }
            }
        }

        setAlunos(dadosFiltrados);
        setCursos(novosCursos);
        setPessoas(novasPessoas);
        setMatriculas(novasMatriculas);

        await salvarDadosNoBanco(novosCursos, novasPessoas, novasMatriculas);
    };

    const buscarAlunosDoBanco = async () => {
        try {
            const response = await fetch('/api/instituicao/buscar_aluno');
            if (response.ok) {
                const data = await response.json();
                setAlunos(data);
            }
        } catch (error) {}
    };

    if (!perfil){ //Verifica se o perfil da instituição foi carregado. Caso não, houve um erro.
        return <p>Carregando perfil...</p>;
    }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Coluna central - Filtros + Tabela */}
        <main className="col-span-3 space-y-6">
          {/* Uploads */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inputAlunos" className="block text-sm font-medium">Arquivo de Alunos:</label>
                <input id="inputAlunos" type="file" accept=".csv" onChange={(e) => e.target.files && processarCSV(e.target.files[0], "alunos")} className="hidden"/>
                <button type="button" onClick={() => document.getElementById('inputAlunos')?.click()} className="mt-2 inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">Selecionar Arquivo</button>
              </div>
              <div>
                <label htmlFor="inputCursos" className="block text-sm font-medium">Arquivo de Cursos:</label>
                <input id="inputCursos" type="file" accept=".csv" onChange={(e) => e.target.files && processarCSV(e.target.files[0], "cursos")} className="hidden"/>
                <button type="button" onClick={() => document.getElementById('inputCursos')?.click()} className="mt-2 inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">Selecionar Arquivo</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}