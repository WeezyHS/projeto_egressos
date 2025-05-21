'use client';

import styles from "./app_instituicao.module.css";
import emailjs from '@emailjs/browser';
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Papa, { ParseResult, ParseError } from 'papaparse';

import { Curso as PrismaCurso, Matricula as PrismaMatricula } from '@/app/generated/prisma';

interface AlunosCSVRow{ //Modelo (tipo) para garantir que os dados lidos do arquivo CSV tenham a estrutura correta ao serem processados.
    curso: string;
    nome: string;
    cpf: string;
    email: string;
    entrada: string;
    saida?: string | null;
}
interface Matricula{
    cursoId: number;
    pessoaId: number;
    entrada: string;
    saida: string | null;
    matricula: string;
}

export default function App_Instituicao(){

    const [perfil, setPerfil] = useState<any>(null); //Armazenam e controlam diversas informações. Gerencia dados carregados, filtrados e exibidos no sistema de gerenciamento de alunos e cursos
    const [pagina, setPagina] = useState(1);
    const [alunosFiltrados, setAlunosFiltrados] = useState<any[]>([]);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [pessoas, setPessoas] = useState<{ id: number; nome: string; cpf: string; email: string }[]>([]);
    const [matriculas, setMatriculas] = useState<{ cursoId: number; pessoaId: number; entrada: string; saida: string | null }[]>([]);
    const [filtroCurso, setFiltroCurso] = useState("");
    const [filtroEntrada, setFiltroEntrada] = useState("");
    const [filtroSaida, setFiltroSaida] = useState("");
    const [ordenacao, setOrdenacao] = useState("nome");
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
                buscarAlunosDoBanco(); //Recarregar os dados do banco
                exibirAlunos(); //Recarregar a lista exibida
            } else {
                alert(data.error || 'Erro ao salvar os dados do CSV no banco de dados.');
            }
        } catch (error) {
            alert('Erro de conexão com o servidor ao tentar salvar os dados.');
        }
    };

    useEffect(() => { //Carrega os dados do perfil da Instituição armazenados no localStorage
        const dadosPerfil = localStorage.getItem("perfilInstituicao");
        if (dadosPerfil){
            setPerfil(JSON.parse(dadosPerfil));
        } else {
            // Se não houver no localStorage, tente buscar do backend
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
            } else {}
        } catch (error) {}
    };

    useEffect(() => { //Chama a função exibirAlunos() sempre que alguma das dependências listadas muda.
        exibirAlunos();
    }, [perfil, pessoas, matriculas, cursos, pagina, filtroCurso, filtroEntrada, filtroSaida, ordenacao]);

    useEffect(() => {
        buscarAlunosDoBanco(); //Carrega os dados iniciais
    }, []);

    function gerarCodigoAleatorio(){ //Gera um código quando uma pessoa é cadastrada
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let codigo = "";
        for (let i = 0; i < 8; i++){
            codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return codigo;
    }
    async function enviarEmail(email: string, codigo: string): Promise<boolean>{ //Envia o código gerado por e-mail
        const templateParams = {
            to_email: email,
            codigo: codigo,
        };

        try {
            const response = await emailjs.send(
                "service_rqwpj7q",
                "template_12nvjhg",
                templateParams,
            "Ygc6WQijXU3rWrMEV"
        );
        return true;
    } catch (error){
        return false;
    }
    };
    const processarCSV = async (file: File, tipo: "cursos" | "alunos"): Promise<void> => {
        return new Promise<void>((resolve, reject) => {
        const reader = new FileReader();
        const emailsEnviados = new Set<string>();

    reader.onload = async (e: ProgressEvent<FileReader>) => { //Handlers para eventos do FileReader
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

    const processarDadosCSV = async ( //Função separada para processamento lógico
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
                    } else{
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

    const processarAlunos = async ( //Lógica específica para alunos
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

        for (const aluno of dadosFiltrados) { //Processamento assíncrono serializado
            const cursoNome = aluno.curso.trim();
            const cpf = aluno.cpf.trim();

            if (!cursoMap.has(cursoNome)) { //Processar cursos
                cursoMap.set(cursoNome, cursoIdCounter++);
                novosCursos.push({ id: cursoMap.get(cursoNome)!, nome: cursoNome });
            }

            if (!pessoaMap.has(cpf) && !emailsEnviados.has(aluno.email)) { //Processar pessoas (com controle de e-mails únicos)
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
            } else{
                continue;
            }
            const cursoId = cursoMap.get(cursoNome)!; //Matrículas
            const pessoaId = pessoaMap.get(cpf)!;
            const saidaTratada = aluno.saida === "Em andamento" ? null : aluno.saida || null;
            novasMatriculas.push({
                cursoId,
                pessoaId,
                entrada: aluno.entrada,
                saida: saidaTratada,
                matricula: `<span class="math-inline">\{cursoId\}\-</span>{pessoaId}-<span class="math-inline">\{aluno\.entrada\}\-</span>{aluno.saida || "Em andamento"}`,
            });
        }
    }
        setAlunos(dadosFiltrados); //Atualização de estado (batch)
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
                setAlunos(data); //Atualiza o estado 'alunos' com os dados do banco
            } else {}
        } catch (error) {}
    };

    const exibirAlunos = () => {
        const alunosFiltrados = alunos
            .filter(aluno =>
                filtroCurso
                    ? aluno.matriculas.some((mat: PrismaMatricula & { curso: PrismaCurso }) =>
                        mat.curso.nome === filtroCurso
                    )
                    : true
            )
            .filter(aluno =>
                filtroEntrada
                    ? aluno.matriculas.some((mat: PrismaMatricula) => {
                        const entrada = mat.anoSemestreEntrada?.toLowerCase() || '';
                        return entrada.includes(filtroEntrada.toLowerCase());
                    })
                    : true
            )
            .filter(aluno =>
                filtroSaida
                    ? aluno.matriculas.some((mat: PrismaMatricula) => {
                        const saida = mat.anoSemestreSaida?.toLowerCase() || '';
                        return saida.includes(filtroSaida.toLowerCase());
                    })
                    : true
            )
            .sort((a, b) => {
                if (ordenacao === 'nome') {
                    return a.nome.localeCompare(b.nome);
                }

                const getValorEntrada = (aluno: typeof a) => {
                    const entradasValidas = aluno.matriculas
                        .map((m: PrismaMatricula) => m.anoSemestreEntrada)
                        .filter((s: string | null | undefined): s is string => !!s)
                        .map((data: string) => {
                            const [ano, semestre] = data.split('/');
                            return parseInt(ano) * 10 + parseInt(semestre);
                        });
                
                    return entradasValidas.length > 0 ? Math.min(...entradasValidas) : Number.MAX_SAFE_INTEGER;
                };

                if (ordenacao === 'anoSemestreEntrada') {
                    return getValorEntrada(a) - getValorEntrada(b);
                }

                const getValorSaida = (aluno: typeof a) => {
                    const saidasValidas = aluno.matriculas
                        .map((m: PrismaMatricula) => m.anoSemestreSaida)
                        .filter((s: string | null | undefined): s is string => !!s && !s.toLowerCase().includes('andamento'))
                        .map((data: string) => {
                            const [ano, semestre] = data.split('/');
                            return parseInt(ano) * 10 + parseInt(semestre);
                        });
                
                    return saidasValidas.length > 0 ? Math.min(...saidasValidas) : Number.MAX_SAFE_INTEGER;
                };

                if (ordenacao === 'anoSemestreSaida') {
                    return getValorSaida(a) - getValorSaida(b);
                }

                return 0;
            });

        const alunosPorPagina = 10;
        const totalPaginasCalculado = Math.ceil(alunosFiltrados.length / alunosPorPagina);
        setTotalPaginas(totalPaginasCalculado);

        const alunosPagina = alunosFiltrados.slice((pagina - 1) * alunosPorPagina, pagina * alunosPorPagina);
        setAlunosFiltrados(alunosPagina);
    };


    const handleAnterior = () => { //Controla a navegação entre páginas na tabela de alunos.
        setPagina(prevPagina => Math.max(prevPagina - 1, 1));
    }
    const handleProximo = () => { //Controla a navegação entre páginas na tabela de alunos.
        setPagina(prevPagina => Math.min(prevPagina + 1, totalPaginas));
    }

    if (!perfil){ //Verifica se o perfil da instituição foi carregado. Caso não, houve um erro.
        return <p>Carregando perfil...</p>;
    }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow p-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold">Perfil da Instituição</h1>
      </header>
  
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Coluna da esquerda - Perfil */}
        <aside className="col-span-1 bg-white rounded-2xl shadow p-4 flex flex-col items-center">
          {perfil?.fotoPerfil && (
            <img
              src={perfil.fotoPerfil}
              alt="Foto da Instituição"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary mb-4"
            />
          )}
  
          <ul className="w-full text-sm text-gray-700 space-y-1">
            {cursos.map((curso, index) => (
              <li key={index} className="px-2 py-1 rounded hover:bg-gray-100">{curso.nome}</li>
            ))}
          </ul>
        </aside>
  
        {/* Coluna central - Filtros + Tabela */}
        <main className="col-span-3 space-y-6">
          {/* Filtros */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="filtroCurso" className="block text-sm font-medium">Curso:</label>
                <select
                  id="filtroCurso"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  value={filtroCurso}
                  onChange={(e) => setFiltroCurso(e.target.value)}
                >
                  <option value="">Todos</option>
                  {cursos.map((curso, index) => (
                    <option key={index} value={curso.nome}>{curso.nome}</option>
                  ))}
                </select>
              </div>
  
              <div>
                <label htmlFor="filtroEntrada" className="block text-sm font-medium">Ano/Semestre de Entrada:</label>
                <input
                  type="text"
                  id="filtroEntrada"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  value={filtroEntrada}
                  onChange={(e) => setFiltroEntrada(e.target.value)}
                />
              </div>
  
              <div>
                <label htmlFor="filtroSaida" className="block text-sm font-medium">Ano/Semestre de Saída:</label>
                <input
                  type="text"
                  id="filtroSaida"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  value={filtroSaida}
                  onChange={(e) => setFiltroSaida(e.target.value)}
                />
              </div>
            </div>
  
            <div className="mt-4">
              <label className="block text-sm font-medium">Ordenar por:</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
              >
                <option value="nome">Nome</option>
                <option value="anoSemestreEntrada">Ano/Semestre Entrada</option>
                <option value="anoSemestreSaida">Ano/Semestre Saída</option>
              </select>
            </div>
          </div>

          {/* Uploads */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inputAlunos" className="block text-sm font-medium">Arquivo de Alunos:</label>
                <input
                  id="inputAlunos"
                  type="file"
                  accept=".csv"
                  onChange={(e) => e.target.files && processarCSV(e.target.files[0], "alunos")}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('inputAlunos')?.click()}
                  className="mt-2 inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                >
                  Selecionar Arquivo
                </button>
              </div>
  
              <div>
                <label htmlFor="inputCursos" className="block text-sm font-medium">Arquivo de Cursos:</label>
                <input
                  id="inputCursos"
                  type="file"
                  accept=".csv"
                  onChange={(e) => e.target.files && processarCSV(e.target.files[0], "cursos")}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('inputCursos')?.click()}
                  className="mt-2 inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                >
                  Selecionar Arquivo
                </button>
              </div>
            </div>
          </div>
          {/* Tabela */}
          <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="text-left text-sm font-medium text-gray-600 py-2">Nome</th>
                  <th className="text-left text-sm font-medium text-gray-600 py-2">CPF</th>
                  <th className="text-left text-sm font-medium text-gray-600 py-2">Email</th>
                  <th className="text-left text-sm font-medium text-gray-600 py-2">Curso</th>
                  <th className="text-left text-sm font-medium text-gray-600 py-2">Ano/Sem. Entrada</th>
                  <th className="text-left text-sm font-medium text-gray-600 py-2">Ano/Sem. Saída</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {alunosFiltrados.map((aluno, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 whitespace-nowrap">{aluno.nome || ""}</td>
                    <td className="py-2 whitespace-nowrap">{aluno.cpf || ""}</td>
                    <td className="py-2 whitespace-nowrap">{aluno.email || ""}</td>
                    <td className="py-2 whitespace-nowrap">{aluno.matriculas[0]?.curso?.nome || "N/A"}</td>
                    <td className="py-2 whitespace-nowrap">{aluno.matriculas[0]?.anoSemestreEntrada || "N/A"}</td>
                    <td className="py-2 whitespace-nowrap">{aluno.matriculas[0]?.anoSemestreSaida || "Em andamento"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paginação */}
          <div className="flex justify-between items-center bg-white rounded-2xl shadow p-4">
            <button
              onClick={handleAnterior}
              disabled={pagina === 1}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="text-sm">{pagina} / {totalPaginas}</span>
            <button
              onClick={handleProximo}
              disabled={pagina === totalPaginas}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Próximo
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}