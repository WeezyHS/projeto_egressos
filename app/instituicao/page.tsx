'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Curso as PrismaCurso, Matricula as PrismaMatricula } from '@/app/generated/prisma';

export default function App_Instituicao() {
    const [perfil, setPerfil] = useState<any>(null);
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
    const router = useRouter();

    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [alunoEdit, setAlunoEdit] = useState({
    nome: "",
    cpf: "",
    email: "",
    anoSemestreEntrada: "",
    anoSemestreSaida: "",
    matriculaId: 0
    });

    function iniciarEdicao(aluno: any) {
    setEditandoId(aluno.id);
    setAlunoEdit({
        nome: aluno.nome,
        cpf: aluno.cpf,
        email: aluno.email,
        anoSemestreEntrada: aluno.matriculas[0]?.anoSemestreEntrada || "",
        anoSemestreSaida: aluno.matriculas[0]?.anoSemestreSaida || "",
        matriculaId: aluno.matriculas[0]?.id || 0
    });
    }

    function cancelarEdicao() {
    setEditandoId(null);
    setAlunoEdit({
        nome: "",
        cpf: "",
        email: "",
        anoSemestreEntrada: "",
        anoSemestreSaida: "",
        matriculaId: 0
    });
    }

    async function salvarEdicao(id: number) {
    try {
        await fetch(`/api/instituicao/alunos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(alunoEdit)
        });
        setEditandoId(null);
    } catch (error) {
        console.error("Erro ao salvar aluno:", error);
    }
    }

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
        exibirAlunos();
    }, [alunos, perfil, pessoas, matriculas, cursos, pagina, filtroCurso, filtroEntrada, filtroSaida, ordenacao]);

    useEffect(() => {
        buscarAlunosDoBanco();
        //alunosFiltrados();
    }, []);

    const buscarAlunosDoBanco = async () => {
        try {
            const response = await fetch('/api/instituicao/buscar_aluno');
            if (response.ok) {
                const data = await response.json();
                setAlunos(data);
            }
        } catch (error) {}
    };

    const exibirAlunos = () => {
        const alunosFiltrados = alunos
            .filter(aluno => filtroCurso ? aluno.matriculas.some((mat: PrismaMatricula & { curso: PrismaCurso }) =>
                        mat.curso.nome === filtroCurso
                    )
                    : true
            )
            .filter(aluno => filtroEntrada ? aluno.matriculas.some((mat: PrismaMatricula) => {
                        const entrada = mat.anoSemestreEntrada?.toLowerCase() || '';
                        return entrada.includes(filtroEntrada.toLowerCase());
                    })
                    : true
            )
            .filter(aluno => filtroSaida ? aluno.matriculas.some((mat: PrismaMatricula) => {
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
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Coluna central - Filtros + Tabela */}
        <main className="col-span-3 space-y-6">
          {/* Filtros */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="filtroCurso" className="block text-sm font-medium">Curso:</label>
                <select id="filtroCurso" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50" value={filtroCurso} onChange={(e) => setFiltroCurso(e.target.value)}>
                  <option value="">Todos</option>
                  {cursos.map((curso, index) => (<option key={index} value={curso.nome}>{curso.nome}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="filtroEntrada" className="block text-sm font-medium">Ano/Semestre de Entrada:</label>
                <input type="text" id="filtroEntrada" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50" value={filtroEntrada} onChange={(e) => setFiltroEntrada(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="filtroSaida" className="block text-sm font-medium">Ano/Semestre de Saída:</label>
                <input type="text" id="filtroSaida" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50" value={filtroSaida} onChange={(e) => setFiltroSaida(e.target.value)}/>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Ordenar por:</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50" value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
                <option value="nome">Nome</option>
                <option value="anoSemestreEntrada">Ano/Semestre Entrada</option>
                <option value="anoSemestreSaida">Ano/Semestre Saída</option>
              </select>
            </div>
          </div>
          {/* Uploads */}

          {/* Tabela */}
          <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="text-left text-sm font-medium text-gray-600 py-2 px-4">Nome</th>
                  <th className="text-left text-sm font-medium text-gray-600 py-2 px-4">CPF</th>
                  <th className="text-left text-sm font-medium text-gray-600 py-2 px-4">Email</th>
                  <th className="text-left text-sm font-medium text-gray-600 py-2 px-4">Curso</th>
                  <th className="text-left text-sm font-medium text-gray-600 py-2 px-4">Ano/Sem. Entrada</th>
                  <th className="text-left text-sm font-medium text-gray-600 py-2 px-4">Ano/Sem. Saída</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {alunosFiltrados.map((aluno, index) => (
                    <tr key={aluno.id} className="hover:bg-gray-50">
                    {editandoId === aluno.id ? (
                        <>
                        <td className="py-2 px-4">
                            <input className="w-full border rounded p-1" value={alunoEdit.nome} onChange={(e) => setAlunoEdit({ ...alunoEdit, nome: e.target.value })}/>
                        </td>
                        <td className="py-2 px-4">
                            <input className="w-full border rounded p-1" value={alunoEdit.cpf} onChange={(e) => setAlunoEdit({ ...alunoEdit, cpf: e.target.value })}/>
                        </td>
                        <td className="py-2 px-4">
                            <input className="w-full border rounded p-1" value={alunoEdit.email} onChange={(e) => setAlunoEdit({ ...alunoEdit, email: e.target.value })}/>
                        </td>
                        <td className="py-2 px-4">{aluno.matriculas[0]?.curso?.nome || "N/A"}</td>

                        <td className="py-2 px-4">
                            <input className="w-full border rounded p-1" value={alunoEdit.anoSemestreEntrada} onChange={(e) => setAlunoEdit({ ...alunoEdit, anoSemestreEntrada: e.target.value })}/>
                        </td>
                        <td className="py-2 px-4">
                            <input className="w-full border rounded p-1" value={alunoEdit.anoSemestreSaida || ""} onChange={(e) => setAlunoEdit({ ...alunoEdit, anoSemestreSaida: e.target.value })}/>
                        </td>
                        <td className="py-2 px-4 space-x-2">
                            <button onClick={() => salvarEdicao(aluno.id)} className="text-green-600 hover:underline">Salvar</button>
                            <button onClick={cancelarEdicao} className="text-red-600 hover:underline">Cancelar</button>
                        </td>
                        </>
                    ) : (
                        <>
                        <td className="py-2 px-4">{aluno.nome}</td>
                        <td className="py-2 px-4">{aluno.cpf}</td>
                        <td className="py-2 px-4">{aluno.email}</td>
                        <td className="py-2 px-4">{aluno.matriculas[0]?.curso?.nome || "N/A"}</td>
                        <td className="py-2 px-4">{aluno.matriculas[0]?.anoSemestreEntrada || "N/A"}</td>
                        <td className="py-2 px-4">{aluno.matriculas[0]?.anoSemestreSaida || "Em andamento"}</td>
                        <td className="py-2 px-4">
                            <button onClick={() => iniciarEdicao(aluno)} className="text-blue-600 hover:underline">Editar</button>
                        </td>
                        </>
                    )}
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Paginação */}
          <div className="flex justify-between items-center bg-white rounded-2xl shadow p-4">
            <button onClick={handleAnterior} disabled={pagina === 1} className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50">Anterior</button>
            <span className="text-sm">{pagina} / {totalPaginas}</span>
            <button onClick={handleProximo} disabled={pagina === totalPaginas} className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50">Próximo</button>
          </div>
        </main>
      </div>
    </div>
  );
}