'use client';

import { useState } from 'react';
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
    <div className="p-6 sm:p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Consulta de Alunos/Egressos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome:</label>
            <input type="text" placeholder="Pesquisar por nome" value={filtroNome} onChange={(e) => setFiltroNome(e.target.value)} className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Primeira letra do nome:</label>
            <input type="text" placeholder="Ex: A" value={filtroPrimeiraLetra} onChange={(e) => setFiltroPrimeiraLetra(e.target.value)} className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Curso:</label>
            <input type="text" placeholder="Filtrar por curso" value={filtroCurso} onChange={(e) => setFiltroCurso(e.target.value)} className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ano/Semestre de Entrada:</label>
            <input type="text" placeholder="Ex: 2024 ou 2024/1" value={filtroAnoEntrada} onChange={(e) => setFiltroAnoEntrada(e.target.value)} className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Ano/Semestre de Saída:</label>
            <input type="text" placeholder="Ex: 2027 ou 2027/2" value={filtroAnoSaida} onChange={(e) => setFiltroAnoSaida(e.target.value)} className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-10">
        <Button className="rounded-xl px-6 py-3 text-base font-semibold shadow-md" onClick={BotaoConsultEgressos}>Consultar Pessoas</Button>
        <Button className="rounded-xl px-6 py-3 text-base font-semibold shadow-md" onClick={handleConsultarEgresso}>Consultar Egressos</Button>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Planilha de Alunos e Cursos</h2>
        <ul className="space-y-6">
          {pessoasFiltradas.map((pessoa) => (
            <li key={pessoa.id} className="border-b pb-4">
              <p className="text-lg font-semibold text-gray-800">{pessoa.nome}</p>
              <p className="text-sm text-gray-600">E-mail: {pessoa.email}</p>
              <p className="text-sm text-gray-600">CPF: {pessoa.cpf}</p>
              <div className="mt-2">
                <p className="font-medium text-sm text-gray-700">Curso(s):</p>
                <ul className="ml-4 list-disc text-sm text-gray-600">
                  {pessoa.cursos.map((curso, index) => (<li key={index}>{curso.nomeCurso} — {curso.anoEntrada} até {curso.anoSaida || <strong>ATUALMENTE</strong>}</li>))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}