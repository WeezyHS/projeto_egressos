'use client';

import styles from "./app_instituicao.module.css";
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Papa from 'papaparse';

interface AlunosCSVRow{ //Modelo (tipo) para garantir que os dados lidos do arquivo CSV tenham a estrutura correta ao serem processados.
    curso: string;
    nome: string;
    cpf: string;
    email: string;
    entrada: string;
    saida?: string;
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

    useEffect(() => { //Carrega os dados do perfil da Instituição armazenados no localStorage
        const dadosPerfil = localStorage.getItem("perfilInstituicao");
        if (dadosPerfil){
            setPerfil(JSON.parse(dadosPerfil));
        }
    }, []);
    useEffect(() => { //Chama a função exibirAlunos() sempre que alguma das dependências listadas muda.
        exibirAlunos();
    }, [perfil, pessoas, matriculas, cursos, pagina, filtroCurso, filtroEntrada, filtroSaida, ordenacao]);

    function gerarCodigoAleatorio(){ //Gera um código quando uma pessoa é cadastrada
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let codigo = "";
        for (let i = 0; i < 8; i++){
            codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return codigo;
    }
    function enviarEmail(email: string, codigo: string){ //Envia o código gerado por e-mail
        console.log(`E-mail enviado para ${email} com o código: ${codigo}`)
    }

    const processarCSV = (file: File, tipo: "cursos" | "alunos") => { //Carrega e processa arquivos CSV contendo dados de alunos ou cursos.
        const reader = new FileReader();

        reader.onload = (e) => { //Leitura e processamento para ter o arquivo como texto
            if (!e.target?.result) return;

            Papa.parse(e.target.result as string, { //Converte o conteúdo CSV para um array de objetos
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    console.log("Dados CSV processados:", result.data);

                    const CPFDuplicado = new Map(); //Evita CPFs duplicados na planilha
                    if (tipo === "alunos"){
                    (result.data as AlunosCSVRow[]).forEach(row => {
                        const cpf = String(row.cpf || "");
                        if (!CPFDuplicado.has(cpf)){
                            CPFDuplicado.set(cpf, {
                                curso: String(row.curso || ""),
                                nome: String(row.nome || ""),
                                cpf,
                                email: String(row.email || ""),
                                entrada: String(row.entrada || ""),
                                saida: String(row.saida || "Em andamento")
                            });
                        }
                    });
                    const dadosFiltrados = Array.from(CPFDuplicado.values());
                    const cursoMap = new Map<string, number>();
                    const pessoaMap = new Map<string, number>();
                    let cursoIdCounter = 1;
                    let pessoaIdCounter = 1;
                    const novosCursos: { id: number; nome: string }[] = [];
                    const novasPessoas: { id: number; nome: string; cpf: string; email: string }[] = [];
                    const novasMatriculas: {
                        cursoId: number;
                        pessoaId: number;
                        entrada: string;
                        saida: string | null;
                        matricula: string;
                    }[] = [];

                    dadosFiltrados.forEach(aluno => {
                        const cursoNome = aluno.curso.trim();
                        const cpf = aluno.cpf.trim();
                        if (!cursoMap.has(cursoNome)) { // Cursos
                            cursoMap.set(cursoNome, cursoIdCounter++);
                            novosCursos.push({ id: cursoMap.get(cursoNome)!, nome: cursoNome });
                        }
                        if (!pessoaMap.has(cpf)) { // Pessoas
                            pessoaMap.set(cpf, pessoaIdCounter++);
                            const codigo = gerarCodigoAleatorio(); //Gera código aleatório
                            enviarEmail(aluno.email, codigo); //Simula envio do código por e-mail
                            novasPessoas.push({
                                id: pessoaMap.get(cpf)!,
                                nome: aluno.nome,
                                cpf: aluno.cpf,
                                email: aluno.email
                            });
                        }
                        const cursoId = cursoMap.get(cursoNome)!; // Matrícula
                        const pessoaId = pessoaMap.get(cpf)!;
                        const entrada = aluno.entrada;
                        const saida = aluno.saida === "Em andamento" ? "Em andamento" : aluno.saida;
                        const matricula = `${cursoId}-${pessoaId}-${entrada}-${saida}`;
                        novasMatriculas.push({
                            cursoId,
                            pessoaId,
                            entrada: aluno.entrada,
                            saida: aluno.saida === "Em andamento" ? null : aluno.saida,
                            matricula
                        });
                    });
                    setAlunos(dadosFiltrados);
                    console.log("Estado alunos atualizado:", dadosFiltrados);
                    setCursos(novosCursos);
                    setPessoas(novasPessoas);
                    setMatriculas(novasMatriculas);
                }
                    setAlunos(Array.from(CPFDuplicado.values()));
                },
            });
        };
        reader.readAsText(file); //Leitura do arquivo como texto. Retorna para o "onload".
    };

    const exibirAlunos = () => { //Filtra, ordena, pagina e atualiza a lista de alunos exibida no sistema.
        const alunosFiltrados = alunos
            .filter(aluno => filtroCurso ? aluno.curso === filtroCurso : true)
            .filter(aluno => filtroEntrada ? aluno.entrada.includes(filtroEntrada) : true)
            .filter(aluno => filtroSaida ? aluno.saida?.includes(filtroSaida) : true)
            .sort((a, b) => a[ordenacao].localeCompare(b[ordenacao]));

    const alunosPorPagina = 10; //Cada página exibe 10 alunos
    const totalPaginasCalculado = Math.ceil(alunosFiltrados.length / alunosPorPagina); //Divide a quantidade de alunos filtrados por 10
    setTotalPaginas(totalPaginasCalculado);

    const alunosPagina = alunosFiltrados.slice((pagina - 1) * alunosPorPagina, pagina * alunosPorPagina); //Determina os alunos que devem ser exibidos. "slice" pega apenas os alunos da página atual
    
    setAlunosFiltrados(alunosPagina); //Exibe apenas alunos da página atual
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

    return(
        <div className={styles.container}>
            <h1 className={styles.tituloPrincipal}>Perfil da Instituição</h1>
            {perfil.fotoPerfil && (<img src={perfil.fotoPerfil} alt="Foto de Perfil" className={styles.fotoPerfil}/>)}
            <ul>{cursos.map((curso, index) => (<li key={index}>{curso.nome}</li>))}</ul>
            <div className={styles.filtros}>
                <label className={styles.filtroCurso} htmlFor="filtroCurso">Curso:</label>
                <select className={styles.select} value={filtroCurso} onChange={(e) => setFiltroCurso(e.target.value)} id="filtroCurso">
                    <option value="">Todos</option>
                    {cursos.map((curso, index) => (<option key={index} value={curso.nome}>{curso.nome}</option>))}
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
                <input type="file" accept=".csv" onChange={(e) => e.target.files && processarCSV(e.target.files[0], "alunos")} />
                <label className={styles.label}>Arquivo de Cursos</label>
                <input type="file" accept=".csv" onChange={(e) => e.target.files && processarCSV(e.target.files[0], "cursos")} />
            </div>
            {/*Tabela para filtrar os dados das planilhas CSV*/}
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
                        return(
                            <tr key={index}>
                                <td>{String(aluno.nome || "")}</td>
                                <td>{String(aluno.cpf || "")}</td>
                                <td>{String(aluno.email || "")}</td>
                                <td>{String(aluno.curso || "")}</td>
                                <td>{String(aluno.entrada || "")}</td>
                                <td>{String(aluno.saida || "")}</td>
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