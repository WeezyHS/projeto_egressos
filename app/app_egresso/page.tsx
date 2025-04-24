'use client';

import styles from './app_egresso.module.css';
import { useState, useEffect } from 'react';

interface Egresso {
  id: number;
  cpf: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  pais: string;
  cargoAtual: string;
  empresaAtual: string;
  fotoPerfil?: string;
  linkedin?: string;
  instagram?: string;
}

interface Pessoa {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  cursos: {
    nomeCurso: string;
    anoEntrada: string;
    anoSaida: string | null;
  }[];
}

export default function App_Egresso() {
  const [egressos, setEgressos] = useState<Egresso[]>([]);
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  const [filtroNome, setFiltroNome] = useState('');
  const [filtroCargo, setFiltroCargo] = useState('');
  const [filtroPrimeiraLetra, setFiltroPrimeiraLetra] = useState('');
  const [filtroCurso, setFiltroCurso] = useState('');
  const [filtroPais, setFiltroPais] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('');
  const [filtroCidade, setFiltroCidade] = useState('');

  const buscarEgressos = async () => {
    const egressoLogadoId = localStorage.getItem('egressoId');

    if (egressoLogadoId && !isNaN(Number(egressoLogadoId))) {
      try {
        const response = await fetch('/api/egresso/lista_egressos', {
          headers: {
            'X-Egresso-ID': egressoLogadoId,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setEgressos(data.egressos || []);
          setPessoas(data.pessoas || []);
        } else {
          console.error('Erro ao buscar egressos:', response.status);
        }
      } catch (error) {
        console.error('Erro de conexão ao buscar egressos:', error);
      }
    } else {
      console.error('ID do egresso não encontrado localmente.');
    }
  };

  const BotaoConsultEgressos = () => {
    buscarEgressos();
  };

  const pessoasFiltradas = pessoas.filter((pessoa) => {
    const nome = pessoa.nome.toLowerCase();
    const cursos = pessoa.cursos.map(c => c.nomeCurso.toLowerCase());

    return (
      (!filtroNome || nome.includes(filtroNome.toLowerCase())) &&
      (!filtroPrimeiraLetra || nome.startsWith(filtroPrimeiraLetra.toLowerCase())) &&
      (!filtroCurso || cursos.some(c => c.includes(filtroCurso.toLowerCase())))
    );
  });

  const egressosFiltrados = egressos.filter((egresso) => {
    return (
      (!filtroCargo || egresso.cargoAtual?.toLowerCase().includes(filtroCargo.toLowerCase())) &&
      (!filtroPais || egresso.pais?.toLowerCase().includes(filtroPais.toLowerCase())) &&
      (!filtroEstado || egresso.estado?.toLowerCase().includes(filtroEstado.toLowerCase())) &&
      (!filtroCidade || egresso.cidade?.toLowerCase().includes(filtroCidade.toLowerCase()))
    );
  });

  useEffect(() => {
    console.log('Egressos atualizados:', egressos);
    console.log('Pessoas atualizadas:', pessoas);
  }, [egressos, pessoas]);

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Consulta de Egressos</h1>

      <div className={styles.filtros}>
        <label className={styles.labFiltroNome}>Nome:</label>
        <input className={styles.filtroNome} type="text" placeholder="Pesquisar por nome" value={filtroNome} onChange={(e) => setFiltroNome(e.target.value)}/>

        <label className={styles.labFiltroPrimeiraLetra}>Primeira letra do nome:</label>
        <input className={styles.filtroPrimeiraLetra} type="text" placeholder="Ex: A" value={filtroPrimeiraLetra} onChange={(e) => setFiltroPrimeiraLetra(e.target.value)}/>

        <label className={styles.labFiltroCurso}>Curso:</label>
        <input className={styles.filtroCurso} type="text" placeholder="Filtrar por curso" value={filtroCurso} onChange={(e) => setFiltroCurso(e.target.value)}/>

        <label className={styles.labFiltroCargo}>Cargo Atual:</label>
        <input className={styles.filtroCargo} type="text" placeholder="Filtrar por cargo" value={filtroCargo} onChange={(e) => setFiltroCargo(e.target.value)}/>

        <label className={styles.labFiltroPais}>País:</label>
        <input className={styles.filtroPais} type="text" placeholder="Filtrar por país" value={filtroPais} onChange={(e) => setFiltroPais(e.target.value)}/>

        <label className={styles.labFiltroEstado}>Estado:</label>
        <input className={styles.filtroEstado} type="text" placeholder="Filtrar por estado" value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}/>

        <label className={styles.labFiltroCidade}>Cidade:</label>
        <input className={styles.filtroCidade} type="text" placeholder="Filtrar por cidade" value={filtroCidade} onChange={(e) => setFiltroCidade(e.target.value)}/>
      </div>

      <button className={styles.consultEgressos} onClick={BotaoConsultEgressos}>Consultar Egressos</button>

      <h2 className={styles.subtitulo}>Planilha de Alunos</h2>
      <ul className={styles.lista}>
        {pessoasFiltradas.map((pessoa) => (
          <li key={pessoa.id} className={styles.item}>
            <strong>Nome: {pessoa.nome}</strong><br/>
            <strong>E-mail:</strong>{pessoa.email}<br/>
            <strong>CPF:</strong> {pessoa.cpf}<br/>
            <strong>Curso:</strong><ul>{pessoa.cursos.map((curso, index) => (<li key={index}>{curso.nomeCurso} — {curso.anoEntrada} até {curso.anoSaida || 'Atualmente'}</li>))}</ul><br/>
          </li>
        ))}
      </ul>

      <h2 className={styles.subtitulo}>Egressos</h2>
      <ul className={styles.lista}>
        {egressosFiltrados.map((egresso) => (
          <li key={egresso.id} className={styles.item}>
            <strong>CPF:</strong> {egresso.cpf}<br />
            <strong>Email:</strong> {egresso.email}<br />
            <strong>Cargo:</strong> {egresso.cargoAtual || 'Não informado'}<br />
            <strong>Empresa:</strong> {egresso.empresaAtual || 'Não informado'}<br />
            <strong>Local:</strong> {`${egresso.cidade}, ${egresso.estado}, ${egresso.pais}`}<br/>
            {egresso.linkedin && <div><strong>LinkedIn:</strong> {egresso.linkedin}</div>}
            {egresso.instagram && <div><strong>Instagram:</strong> {egresso.instagram}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
