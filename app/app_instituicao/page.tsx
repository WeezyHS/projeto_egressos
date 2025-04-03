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

    useEffect(() => {
        const dadosPerfil = localStorage.getItem("perfilInstituicao");
        if (dadosPerfil){
            setPerfil(JSON.parse(dadosPerfil));
        }
    }, []);

    useEffect(() => {
        exibirAlunos();
    }, [perfil, pessoas, matriculas, cursos, pagina, filtroCurso, filtroEntrada, filtroSaida, ordenacao]);

    // function gerarCodigoAleatorio(){
    //     const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    //     let codigo = "";
    //     for (let i = 0; i < 8; i++){
    //         codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    //     }
    //     return codigo;
    // }
    // function enviarEmail(email: string, codigo: string){
    //     console.log(`E-mail enviado para ${email} com o código: ${codigo}`)
    // }
    //PRINCIPAL
    const processarCSV = (file: File, tipo: "cursos" | "alunos") => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            if (!e.target?.result) return;
    
            Papa.parse(e.target.result as string, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    console.log("Dados CSV processados:", result.data);
                    setAlunos((result.data as AlunosCSVRow[]).map(row => ({
                        curso: String(row.curso || ""),
                        nome: String(row.nome || ""),
                        cpf: String(row.cpf || ""),
                        email: String(row.email || ""),
                        entrada: String(row.entrada || ""),
                        saida: String(row.saida || "Em andamento")
                    })));
                },
            });
        };
    
        reader.readAsText(file);
    };

    const exibirAlunos = () => {
        const alunosFiltrados = alunos
            .filter(aluno => filtroCurso ? aluno.curso === filtroCurso : true)
            .filter(aluno => filtroEntrada ? aluno.entrada.includes(filtroEntrada) : true)
            .filter(aluno => filtroSaida ? aluno.saida?.includes(filtroSaida) : true)
            .sort((a, b) => a[ordenacao].localeCompare(b[ordenacao]));

    const alunosPorPagina = 10;
    const totalPaginasCalculado = Math.ceil(alunosFiltrados.length / alunosPorPagina);
    setTotalPaginas(totalPaginasCalculado);

    const alunosPagina = alunosFiltrados.slice((pagina - 1) * alunosPorPagina, pagina * alunosPorPagina);
    
    setAlunosFiltrados(alunosPagina);
    };

    const handleAnterior = () => {
        setPagina(prevPagina => Math.max(prevPagina - 1, 1));
    }
    const handleProximo = () => {
        setPagina(prevPagina => Math.min(prevPagina + 1, totalPaginas));
    }

    if (!perfil){
        return <p>Carregando perfil...</p>;
    }
    console.log("Alunos Filtrados:", alunosFiltrados);
    return(
        <div className={styles.container}>
            <h1 className={styles.tituloPrincipal}>Perfil da Instituição</h1>
            {perfil.fotoPerfil && (
                <img src={perfil.fotoPerfil} alt="Foto de Perfil" className={styles.fotoPerfil}/>
            )}
            <ul>
                {cursos.map((curso, index) => (
                    <li key={index}>{curso}</li>
                ))}
            </ul>
            <div className={styles.filtros}>
                <label className={styles.filtroCurso} htmlFor="filtroCurso">Curso:</label>
                <select className={styles.select} value={filtroCurso} onChange={(e) => setFiltroCurso(e.target.value)} id="filtroCurso">
                    <option value="">Todos</option>
                    {cursos.map((curso, index) => (
                        <option key={index} value={curso["Nome do Curso"]}>
                            {curso["Nome do Curso"]}
                        </option>
                    ))}
                </select>
                <label className={styles.AnoSemestre} htmlFor="filtroEntrada">Ano/Semestre de Entrada:</label>
                <input className={styles.input} type="text" placeholder="Ano/Semestre Entrada" id="filtroEntrada" value={filtroEntrada} onChange={(e) => setFiltroEntrada(e.target.value)}/>

                <label className={styles.AnoSemestre} htmlFor="filtroSaida">Ano/Semestre de Saída:</label>
                <input className={styles.input} type="text" placeholder="Ano/Semestre Saída" id="filtroSaida" value={filtroSaida} onChange={(e) => setFiltroSaida(e.target.value)}/>
                
                <select onChange={(e) => setOrdenacao(e.target.value)}>
                    <option value="nome">Nome</option>
                    <option value="entrada">Ano/Semestre Entrada</option>
                    <option value="saida">Ano/Semestre Saída</option>
                </select>
            </div>
            <div className={styles.ordenacao}>
                <label className={styles.label} htmlFor="ordenacao">Arquivo de Alunos:</label>
                <input type="file" accept=".csv" onChange={(e) => e.target.files && processarCSV(e.target.files[0], "cursos")} />
                <label className={styles.label}>Arquivo de Cursos</label>
                <input type="file" accept=".csv" onChange={(e) => e.target.files && processarCSV(e.target.files[0], "alunos")} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Curso</th>
                        <th>Ano/Semestre Entrada</th>
                        <th>Ano/Semestre Saída</th>
                    </tr>
                </thead>
                <tbody>
                    {alunosFiltrados.map((aluno, index) => {
                        console.log(`Aluno ${index}:`, aluno);
                        return(
                            <tr key={index}>
                                <td>{String(aluno.nome || "")}</td>
                                <td>{String(aluno.cpf || "")}</td>
                                <td>{String(aluno.email || "")}</td>
                                <td>{String(aluno.curso || "")}</td>
                                <td>{String(aluno.entrada || "")}</td>
                                <td>{String(aluno.saida || "")}</td>
                                {/* <td>{String(aluno.saida || "Em andamento")}</td> */}
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