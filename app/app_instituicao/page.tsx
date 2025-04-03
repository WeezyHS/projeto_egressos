'use client';

import styles from "./app_instituicao.module.css";
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Papa from 'papaparse';

interface AlunosCSVRow{
    curso: string;
    nome: string;
    cpf: string;
    email: string;
    entrada: string;
    saida?: string;
}

export default function App_Instituicao(){

    const [perfil, setPerfil] = useState<any>(null);
    const [cursos, setCursos] = useState<string[]>([]);
    const [pagina, setPagina] = useState(1);
    const [alunosFiltrados, setAlunosFiltrados] = useState<any[]>([]);
    const [totalPaginas, setTotalPaginas] = useState(1);

    const [pessoas, setPessoas] = useState<{ id: number; nome: string; cpf: string; email: string }[]>([]);
    const [matriculas, setMatriculas] = useState<{ cursoId: number; pessoaId: number; entrada: string; saida: string | null }[]>([]);

    const [filtroCurso, setFiltroCurso] = useState("");
    const [filtroEntrada, setFiltroEntrada] = useState("");
    const [filtroSaida, setFiltroSaida] = useState("");
    const [ordenacao, setOrdenacao] = useState("nome");


    useEffect(() => {
        const dadosPerfil = localStorage.getItem("perfilInstituicao");
        if (dadosPerfil){
            setPerfil(JSON.parse(dadosPerfil));
        }
    }, []);

    useEffect(() => {
        console.log("Perfil:", perfil);
        console.log("Cursos carregados:", cursos);
        console.log("Alunos carregados:", pessoas);
        console.log("Matrículas carregadas:", matriculas);
        console.log("Página Atual:", pagina);
        console.log("Filtros:", { filtroCurso, filtroEntrada, filtroSaida });
        console.log("Ordenação:", ordenacao);
        exibirAlunos();
    }, [perfil, pessoas, matriculas, cursos, pagina, filtroCurso, filtroEntrada, filtroSaida, ordenacao]);

    useEffect(() => {
        exibirAlunos();
    }, [pessoas, matriculas, cursos])

    function gerarCodigoAleatorio(){
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let codigo = "";
        for (let i = 0; i < 8; i++){
            codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return codigo;
    }
    function enviarEmail(email: string, codigo: string){
        console.log(`E-mail enviado para ${email} com o código: ${codigo}`)
    }

    const exibirAlunos = () => {

        let alunosFiltrados = pessoas.filter(aluno => {
            const matricula = matriculas.find((m) => m.pessoaId === aluno.id);
            if (!matricula) return false;

            const curso = cursos[matricula.cursoId - 1];

            if (filtroCurso && filtroCurso !== curso) return false;
            if (filtroEntrada && filtroEntrada !== matricula.entrada) return false;
            if (filtroSaida && filtroSaida && filtroSaida !== matricula.saida) return false;

            return true;
        });
        alunosFiltrados.sort((a, b) => {
            if (ordenacao === "nome") return a.nome.localeCompare(b.nome);
            if (ordenacao === "cpf") return a.cpf.localeCompare(b.cpf);
            if (ordenacao === "email") return a.email.localeCompare(b.email);
            if (ordenacao === "curso") {
                const matriculaA = matriculas.find(m => m.pessoaId === a.id);
                const matriculaB = matriculas.find(m => m.pessoaId === b.id);

                if (matriculaA && matriculaB){
                    const cursoA = cursos[matriculaA.cursoId - 1];
                    const cursoB = cursos[matriculaB.cursoId - 1];
                    return cursoA.localeCompare(cursoB);
                }
        }
        return 0;
    });

    setAlunosFiltrados(alunosFiltrados);

    const alunosPorPagina = 10;
    const totalPaginasCalculado = Math.ceil(alunosFiltrados.length / alunosPorPagina);

    setTotalPaginas(totalPaginasCalculado);

    const alunosPagina = alunosFiltrados.slice((pagina - 1) * alunosPorPagina, pagina * alunosPorPagina);

        const paginaAtualSpan = document.getElementById("paginaAtual");
        const totalPaginasSpan = document.getElementById("totalPaginas");
        if (paginaAtualSpan && totalPaginasSpan) {
            paginaAtualSpan.textContent = pagina.toString();
            totalPaginasSpan.textContent = totalPaginasCalculado.toString();
        }
        const anteriorButton = document.getElementById("anterior") as HTMLButtonElement;
        const proximoButton = document.getElementById("proximo") as HTMLButtonElement;
        if (anteriorButton && proximoButton) {
            anteriorButton.disabled = pagina === 1;
            proximoButton.disabled = pagina === totalPaginasCalculado;
        }
    };

    const handleAnterior = () => {
        setPagina(prevPagina => Math.max(prevPagina - 1, 1));
    }
    const handleProximo = () => {
        setPagina(prevPagina => Math.min(prevPagina + 1, totalPaginas));
    }

    const handleImportarCSV = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0){
            const file = event.target.files[0];
            Papa.parse(file, {
                complete: (result) => {
                    const novosCursos = result.data.map((row: any) => row[0]).filter((nome: string) => nome.trim() !== "");
                    setCursos(prevCursos => {
                        const cursosUnicos = Array.from(new Set([...prevCursos, ...novosCursos]));
                        return cursosUnicos;
                    });
                },
                skipEmptyLines: true,
                error: (error) => {
                    console.log("Erro ao processar CSV de cursos:", error);
                }
            });
        }
    };

    const handleImportarCSVAlunos = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0){
            const file = event.target.files[0];
            Papa.parse(file, {
                header: true,
                complete: (result) => {
                    (result.data as AlunosCSVRow[]).forEach((row) => {
                        const { curso, nome, cpf, email, entrada, saida } = row;

                        let pessoaId: number;

                        setPessoas(prevPessoas => {
                            const pessoaExistente = prevPessoas.find(p => p.cpf === cpf);
                            pessoaId = pessoaExistente ? pessoaExistente.id : prevPessoas.length + 1;

                        if (!pessoaExistente){
                            const novaPessoa = { id: pessoaId, nome, cpf, email };
                            const codigo = gerarCodigoAleatorio();
                            enviarEmail(email, codigo);
                            return [...prevPessoas, novaPessoa];
                        }
                        return prevPessoas;
                        });

                        setMatriculas(prevMatriculas => {
                            const cursoIndex = cursos.findIndex(c => c === curso);
                            const cursoId = cursoIndex !== -1 ? cursoIndex + 1 : 0;

                            if (cursoId !== 0) {
                                return [...prevMatriculas, { cursoId, pessoaId, entrada, saida: saida || null }];
                            } else {
                                console.log(`Curso "${curso}" não encontrado!`);
                                return prevMatriculas;
                            }
                        });
                    });
                    console.log("Pessoas:", pessoas);
                    console.log("Matrículas:", matriculas);
                },
                skipEmptyLines: true,
                error: (error) => {
                    console.log("Erro ao processar CSV de alunos:", error);
                }
            });
        }
    };

    if (!perfil){
        return <p>Carregando perfil...</p>;
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.tituloPrincipal}>Perfil da Instituição</h1>

            {perfil.fotoPerfil && (
                <img src={perfil.fotoPerfil} alt="Foto de Perfil" className={styles.fotoPerfil}/>
            )}

            <h2 className={styles.textoCursos}>Gerenciar Cursos</h2>
            <input type="file" accept=".csv" onChange={handleImportarCSV}/>

            <ul>
                {cursos.map((curso, index) => (
                    <li key={index}>{curso}</li>
                ))}
            </ul>
            <h2 className={styles.textoAlunos}>Gerenciar Alunos</h2>
            <input type="file" accept=".csv" onChange={handleImportarCSVAlunos}/> {/*Carregar arquivo CSV de Alunos*/}

            <div className={styles.filtros}>
                <label className={styles.filtroCurso} htmlFor="filtroCurso">Curso:</label>
                <select className={styles.select} value={filtroCurso} onChange={(e) => setFiltroCurso(e.target.value)} id="filtroCurso">
                    <option value="">Todos</option>
                    {cursos.map((curso) => (
                        <option key={curso} value={curso}>
                            {curso}
                        </option>
                    ))}
                </select>
                <label className={styles.AnoSemestre} htmlFor="filtroEntrada">Ano/Semestre de Entrada:</label>
                <input className={styles.input} type="text" id="filtroEntrada" value={filtroEntrada} onChange={(e) => setFiltroEntrada(e.target.value)}/>

                <label className={styles.AnoSemestre} htmlFor="filtroSaida">Ano/Semestre de Saída:</label>
                <input className={styles.input} type="text" id="filtroSaida" value={filtroSaida} onChange={(e) => setFiltroSaida(e.target.value)}/>
            </div>

            <div className={styles.ordenacao}>
                <label className={styles.label} htmlFor="ordenacao">Ordenar por:</label>
                <select className={styles.select} id="ordenacao" value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
                    <option value="nome">Nome</option>
                    <option value="cpf">CPF</option>
                    <option value="email">E-mail</option>
                    <option value="curso">Curso</option>
                </select>
            </div>

            <table className={styles.tabelaAlunos} id="tabelaAlunos">
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>Nome</th>
                            <th className={styles.th}>CPF</th>
                            <th className={styles.th}>E-mail</th>
                            <th className={styles.th}>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunosFiltrados.map((aluno) => {
                            const matricula = matriculas.find(m => m.pessoaId === aluno.id);
                            const cursoNome = matricula && cursos[matricula.cursoId - 1] ? cursos[matricula.cursoId - 1] : "Curso não encontrado!";
                            return(
                                <tr key={aluno.id}>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.cpf}</td>
                                    <td>{aluno.email}</td>
                                    <td>{cursoNome}</td>
                                </tr>
                            );
                        })}
                    </tbody>
            </table>

            <div className={styles.paginacao}>
                <button className={styles.button} id="anterior" onClick={handleAnterior} disabled={pagina === 1}>Anterior</button>
                <span>{pagina} / {totalPaginas}</span>
                <button className={styles.button} id="proximo" onClick={handleProximo} disabled={pagina === totalPaginas}>Próximo</button>
            </div>
        </div>
    );
}