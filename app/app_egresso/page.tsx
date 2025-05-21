'use client';

import styles from './app_egresso.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

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
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroPrimeiraLetra, setFiltroPrimeiraLetra] = useState('');
  const [filtroCurso, setFiltroCurso] = useState('');
  const [filtroAnoEntrada, setFiltroAnoEntrada] = useState('');
  const [filtroAnoSaida, setFiltroAnoSaida] = useState('');

  const router = useRouter(); // INSTANCIANDO O ROUTER

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
          setPessoas(data.pessoas || []);

          // Salvando no localStorage
          localStorage.setItem('pessoas', JSON.stringify(data.pessoas || []));
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

  const handleConsultarEgresso = () => {
    router.push('/consultar_egresso');
  }
  const BotaoConsultEgressos = () => {
    buscarEgressos();
  };

  const pessoasFiltradas = pessoas.filter((pessoa) => {
    const nome = pessoa.nome.toLowerCase();
    const cursos = pessoa.cursos.map(c => c.nomeCurso.toLowerCase());

    const filtroAnoValidoEntrada = (cursoAnoEntrada: string) => {
      if (!filtroAnoEntrada) return true;
      const [anoFiltro, semestreFiltro] = filtroAnoEntrada.split('/');
      const [dia, mes, ano] = cursoAnoEntrada.split('/').map(Number);

      if (!anoFiltro || isNaN(dia) || isNaN(mes) || isNaN(ano)) return false;
      if (ano.toString() !== anoFiltro) return false;

      if (semestreFiltro) {
        if (semestreFiltro === '1' && mes > 6) return false;
        if (semestreFiltro === '2' && mes <= 6) return false;
      }
      return true;
    };

    const filtroAnoValidoSaida = (cursoAnoSaida: string | null) => {
      if (!filtroAnoSaida) return true;
      if (!cursoAnoSaida) return false;

      const [anoFiltro, semestreFiltro] = filtroAnoSaida.split('/');
      const [dia, mes, ano] = cursoAnoSaida.split('/').map(Number);

      if (!anoFiltro || isNaN(dia) || isNaN(mes) || isNaN(ano)) return false;
      if (ano.toString() !== anoFiltro) return false;

      if (semestreFiltro) {
        if (semestreFiltro === '1' && mes > 6) return false;
        if (semestreFiltro === '2' && mes <= 6) return false;
      }

      return true;
    };

    return (
      (!filtroNome || nome.includes(filtroNome.toLowerCase())) &&
      (!filtroPrimeiraLetra || nome.startsWith(filtroPrimeiraLetra.toLowerCase())) &&
      (!filtroCurso || cursos.some(c => c.includes(filtroCurso.toLowerCase()))) &&
      (pessoa.cursos.some(curso => filtroAnoValidoEntrada(curso.anoEntrada))) &&
      (pessoa.cursos.some(curso => filtroAnoValidoSaida(curso.anoSaida)))
    );
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Consulta de Alunos/Egressos</h1>

      <div className={styles.divisao}>
        <div className={styles.coluna}>
          <label className={styles.labFiltroNome}>Nome:</label>
          <input className={styles.filtroNome} type="text" placeholder="Pesquisar por nome" value={filtroNome} onChange={(e) => setFiltroNome(e.target.value)} />

          <label className={styles.labFiltroPrimeiraLetra}>Primeira letra do nome:</label>
          <input className={styles.filtroPrimeiraLetra} type="text" placeholder="Ex: A" value={filtroPrimeiraLetra} onChange={(e) => setFiltroPrimeiraLetra(e.target.value)} />

          <label className={styles.labFiltroCurso}>Curso:</label>
          <input className={styles.filtroCurso} type="text" placeholder="Filtrar por curso" value={filtroCurso} onChange={(e) => setFiltroCurso(e.target.value)} />

          <label className={styles.labFiltroAnoEntrada}>Ano/Semestre de Entrada:</label>
          <input className={styles.filtroAnoEntrada} type="text" placeholder="Ex: 2024 ou 2024/1" value={filtroAnoEntrada} onChange={(e) => setFiltroAnoEntrada(e.target.value)} />
        </div>

        <div className={styles.coluna}>
          <label className={styles.labFiltroAnoSaida}>Ano/Semestre de Saída:</label>
          <input className={styles.filtroAnoSaida} type="text" placeholder="Ex: 2027 ou 2027/2" value={filtroAnoSaida} onChange={(e) => setFiltroAnoSaida(e.target.value)} />
        </div>
      </div>

      <button className={styles.consultEgressos} onClick={BotaoConsultEgressos}>Consultar Egressos</button>
      <Button variant="default" className="rounded-xl px-6 py-3 text-base font-semibold shadow-md" onClick={handleConsultarEgresso}>Consultar Egressos [teste]</Button>

      <div className={styles.divisao}>
        <div className={styles.coluna}>
          <h2 className={styles.subtitulo}>Planilha de Alunos e Cursos</h2>
          <ul className={styles.lista}>
            {pessoasFiltradas.map((pessoa) => (
              <li key={pessoa.id} className={styles.item}>
                <strong>Nome: {pessoa.nome}</strong><br />
                <strong>E-mail:</strong> {pessoa.email}<br />
                <strong>CPF:</strong> {pessoa.cpf}<br />
                <strong>Curso:</strong>
                <ul>
                  {pessoa.cursos.map((curso, index) => (
                    <li key={index}>
                      {curso.nomeCurso} — {curso.anoEntrada} até {curso.anoSaida || <strong>ATUALMENTE</strong>}
                    </li>
                  ))}
                </ul><br/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}