'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

interface Pessoa {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  cursos: {
    nomeCurso: string;
    anoEntrada: string; // Esperado no formato "DD/MM/AAAA"
    anoSaida: string | null; // Esperado no formato "DD/MM/AAAA" ou null
  }[];
}

// Função auxiliar para converter "DD/MM/AAAA" para "AAAA/S" ou "AAAA"
const converterDataParaAnoSemestreOuAno = (dataString: string | null): string | null => {
  if (!dataString) return null;
  const partes = dataString.split('/');
  if (partes.length === 3) {
    const mes = parseInt(partes[1], 10);
    const ano = parseInt(partes[2], 10);
    if (!isNaN(mes) && !isNaN(ano)) {
      const semestre = mes <= 6 ? '1' : '2';
      return `${ano}/${semestre}`;
    }
  }
  // Se já for apenas "AAAA" ou "AAAA/S", retorna como está
  if (/^\d{4}(\/(1|2))?$/.test(dataString)) {
    return dataString;
  }
  return null; // Formato não reconhecido
};

// Função auxiliar para ordenar strings "AAAA/S" ou "AAAA"
const ordenarAnoSemestre = (a: string, b: string) => {
  const [anoA, semAStr] = a.split('/');
  const [anoB, semBStr] = b.split('/');
  const numAnoA = parseInt(anoA, 10);
  const numAnoB = parseInt(anoB, 10);
  const numSemA = semAStr ? parseInt(semAStr, 10) : 0; // Considera ano sem semestre como semestre 0
  const numSemB = semBStr ? parseInt(semBStr, 10) : 0;

  if (numAnoA !== numAnoB) {
    return numAnoA - numAnoB;
  }
  return numSemA - numSemB;
};


export default function App_Egresso() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroPrimeiraLetra, setFiltroPrimeiraLetra] = useState('');
  const [filtroCurso, setFiltroCurso] = useState('');
  const [filtroAnoEntrada, setFiltroAnoEntrada] = useState(''); // Armazenará "AAAA/S" ou "AAAA"
  const [filtroAnoSaida, setFiltroAnoSaida] = useState(''); // Armazenará "AAAA/S" ou "AAAA"
  const router = useRouter();

  const buscarEgressos = async () => {
    const egressoLogadoId = localStorage.getItem('egressoId');
    if (egressoLogadoId && !isNaN(Number(egressoLogadoId))) {
      try {
        const response = await fetch('/api/egresso/lista_egressos', {
          headers: { 'X-Egresso-ID': egressoLogadoId },
        });
        if (response.ok) {
          const data = await response.json();
          setPessoas(data.pessoas || []);
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

  useEffect(() => {
    const pessoasSalvas = localStorage.getItem('pessoas');
    if (pessoasSalvas) {
      try {
        setPessoas(JSON.parse(pessoasSalvas));
      } catch (e) {
        console.error("Erro ao parsear pessoas do localStorage", e);
        localStorage.removeItem('pessoas');
      }
    }
    buscarEgressos();
  }, []);

  const handleConsultarEgresso = () => router.push('/consultar_egresso');
  const handleBotaoConsultarPessoas = () => buscarEgressos();

  const nomesDeCursosUnicos = useMemo(() => {
    const todosOsCursos = new Set<string>();
    pessoas.forEach(p => p.cursos.forEach(c => todosOsCursos.add(c.nomeCurso)));
    return Array.from(todosOsCursos).sort();
  }, [pessoas]);

  // Coletar anos/semestres de entrada únicos
  const anosEntradaUnicos = useMemo(() => {
    const anos = new Set<string>();
    pessoas.forEach(p => p.cursos.forEach(c => {
      const anoSemestre = converterDataParaAnoSemestreOuAno(c.anoEntrada);
      if (anoSemestre) anos.add(anoSemestre);
    }));
    return Array.from(anos).sort(ordenarAnoSemestre);
  }, [pessoas]);

  // Coletar anos/semestres de saída únicos
  const anosSaidaUnicos = useMemo(() => {
    const anos = new Set<string>();
    pessoas.forEach(p => p.cursos.forEach(c => {
      if (c.anoSaida) {
        const anoSemestre = converterDataParaAnoSemestreOuAno(c.anoSaida);
        if (anoSemestre) anos.add(anoSemestre);
      }
    }));
    return Array.from(anos).sort(ordenarAnoSemestre);
  }, [pessoas]);

  const pessoasFiltradas = pessoas.filter((pessoa) => {
    const nomeLower = pessoa.nome.toLowerCase();
    const filtroNomeLower = filtroNome.toLowerCase();
    const filtroPrimeiraLetraLower = filtroPrimeiraLetra.toLowerCase();
    const filtroCursoLower = filtroCurso.toLowerCase();

    // As funções de filtro de ano já esperam o formato "AAAA/S" ou "AAAA" do estado do filtro
    // e "DD/MM/AAAA" dos dados da pessoa, então elas devem funcionar como estão.
    const filtroAnoValidoEntrada = (cursoAnoEntrada: string) => {
      if (!filtroAnoEntrada) return true; // Se filtroAnoEntrada está vazio, não filtra
      const [anoFiltro, semestreFiltro] = filtroAnoEntrada.split('/'); // Ex: "2023" ou "2023", "1"
      const [diaCurso, mesCurso, anoCurso] = cursoAnoEntrada.split('/').map(Number); // Ex: 01, 03, 2023

      if (!anoFiltro || isNaN(diaCurso) || isNaN(mesCurso) || isNaN(anoCurso)) return false;
      if (anoCurso.toString() !== anoFiltro) return false;

      if (semestreFiltro) { // Se o filtro inclui semestre (ex: "2023/1")
        if (semestreFiltro === '1' && mesCurso > 6) return false;
        if (semestreFiltro === '2' && mesCurso <= 6) return false;
      }
      return true;
    };

    const filtroAnoValidoSaida = (cursoAnoSaida: string | null) => {
      if (!filtroAnoSaida) return true;
      if (!cursoAnoSaida) return false; // Se não há ano de saída no curso, e o filtro está ativo, não corresponde

      const [anoFiltro, semestreFiltro] = filtroAnoSaida.split('/');
      const [diaCurso, mesCurso, anoCurso] = cursoAnoSaida.split('/').map(Number);

      if (!anoFiltro || isNaN(diaCurso) || isNaN(mesCurso) || isNaN(anoCurso)) return false;
      if (anoCurso.toString() !== anoFiltro) return false;

      if (semestreFiltro) {
        if (semestreFiltro === '1' && mesCurso > 6) return false;
        if (semestreFiltro === '2' && mesCurso <= 6) return false;
      }
      return true;
    };

    return (
      (!filtroNome || nomeLower.includes(filtroNomeLower)) &&
      (!filtroPrimeiraLetra || nomeLower.startsWith(filtroPrimeiraLetraLower)) &&
      (!filtroCurso || pessoa.cursos.some(c => c.nomeCurso.toLowerCase() === filtroCursoLower)) &&
      (pessoa.cursos.some(curso => filtroAnoValidoEntrada(curso.anoEntrada))) &&
      (pessoa.cursos.some(curso => filtroAnoValidoSaida(curso.anoSaida)))
    );
  });

  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Consulta de Alunos/Egressos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          {/* Filtro Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome:</label>
            <input type="text" placeholder="Pesquisar por nome" value={filtroNome} onChange={(e) => setFiltroNome(e.target.value)} className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          {/* Filtro Primeira Letra */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Primeira letra do nome:</label>
            <input type="text" placeholder="Ex: A" value={filtroPrimeiraLetra} onChange={(e) => setFiltroPrimeiraLetra(e.target.value)} className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          {/* Filtro Curso (Dropdown) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Curso:</label>
            <select value={filtroCurso} onChange={(e) => setFiltroCurso(e.target.value)} className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Todos</option>
              {nomesDeCursosUnicos.map((nomeCurso) => (
                <option key={nomeCurso} value={nomeCurso.toLowerCase()}>{nomeCurso}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-4">
            {/* Filtro Ano/Semestre de Entrada (Dropdown) */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Ano/Semestre de Entrada:</label>
                <select value={filtroAnoEntrada} onChange={(e) => setFiltroAnoEntrada(e.target.value)} className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Todos</option>
                {anosEntradaUnicos.map((anoSem) => (
                    <option key={anoSem} value={anoSem}>{anoSem}</option>
                ))}
                </select>
            </div>
            {/* Filtro Ano/Semestre de Saída (Dropdown) */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Ano/Semestre de Saída:</label>
                <select value={filtroAnoSaida} onChange={(e) => setFiltroAnoSaida(e.target.value)} className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Todos</option>
                {anosSaidaUnicos.map((anoSem) => (
                    <option key={anoSem} value={anoSem}>{anoSem}</option>
                ))}
                </select>
            </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-10">
        <Button className="rounded-xl px-6 py-3 text-base font-semibold shadow-md" onClick={handleBotaoConsultarPessoas}>
          Consultar Pessoas
        </Button>
        <Button className="rounded-xl px-6 py-3 text-base font-semibold shadow-md" onClick={handleConsultarEgresso}>
          Consultar Egressos
        </Button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Planilha de Alunos e Cursos</h2>
        {pessoasFiltradas.length > 0 ? (
            <ul className="space-y-6">
            {pessoasFiltradas.map((pessoa) => (
                <li key={pessoa.id} className="border-b pb-4">
                <p className="text-lg font-semibold text-gray-800">{pessoa.nome}</p>
                <p className="text-sm text-gray-600">E-mail: {pessoa.email}</p>
                <p className="text-sm text-gray-600">CPF: {pessoa.cpf}</p>
                <div className="mt-2">
                    <p className="font-medium text-sm text-gray-700">Curso(s):</p>
                    <ul className="ml-4 list-disc text-sm text-gray-600">
                    {pessoa.cursos.map((curso, index) => (
                        <li key={index}>
                        {curso.nomeCurso} — {curso.anoEntrada} até {curso.anoSaida || <strong>ATUALMENTE</strong>}
                        </li>
                    ))}
                    </ul>
                </div>
                </li>
            ))}
            </ul>
        ) : (
            <p className="text-center text-gray-500">Nenhuma pessoa encontrada com os filtros aplicados.</p>
        )}
      </div>
    </div>
  );
}