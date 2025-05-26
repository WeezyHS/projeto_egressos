'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

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

const converterDataParaAnoSemestreOuAno = (dataString: string | null): string | null => { // Função auxiliar para converter "DD/MM/AAAA" para "AAAA/S" ou "AAAA"
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

const ordenarAnoSemestre = (a: string, b: string) => { // Função auxiliar para ordenar strings "AAAA/S" ou "AAAA"
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
  const [filtroAnoEntrada, setFiltroAnoEntrada] = useState('');
  const [filtroAnoSaida, setFiltroAnoSaida] = useState('');
  const router = useRouter();

  const [nomeEgressoLogado, setNomeEgressoLogado] = useState<string>('Carregando...');
  const [fotoPerfilUrlEgressoLogado, setFotoPerfilUrlEgressoLogado] = useState<string | null>(null);

  const buscarDadosEgressoLogado = async () => {
    const cpf = localStorage.getItem('userCpf');
    const senha = localStorage.getItem('userSenha'); // Lembre-se do aviso de segurança

    if (!cpf || !senha) {
      setNomeEgressoLogado('Usuário Desconhecido');
      setFotoPerfilUrlEgressoLogado(null);
      return;
    }

    try {
      const response = await fetch('/api/egresso/perfil_egresso', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cpf, senha }),
      });

      if (response.ok) {
        const responseText = await response.text();

        if (!responseText) {
          alert('O servidor de perfil respondeu com sucesso, mas não retornou dados. Verifique o console.');
          setNomeEgressoLogado('Dados não recebidos');
          setFotoPerfilUrlEgressoLogado(null);
          return;
        }

        try {
          const data = JSON.parse(responseText);
          setNomeEgressoLogado(data.nome || 'Nome não disponível');
          setFotoPerfilUrlEgressoLogado(data.fotoPerfil || null);
        } catch (parseError) {
          alert('Erro ao processar os dados do perfil. Resposta não é JSON válido.');
          setNomeEgressoLogado('Erro nos dados');
          setFotoPerfilUrlEgressoLogado(null);
        }
      } else {
        const errorText = await response.text();
        try {
          const erroData = JSON.parse(errorText);
        } catch (e) {
        }
        setNomeEgressoLogado('Falha ao carregar perfil');
        setFotoPerfilUrlEgressoLogado(null);
      }
    } catch (error) {
      setNomeEgressoLogado('Erro de conexão');
      setFotoPerfilUrlEgressoLogado(null);
    }
  };

  const buscarEgressosLista = async () => {
    const egressoLogadoId = localStorage.getItem('egressoId');
    if (egressoLogadoId && !isNaN(Number(egressoLogadoId))) {
      try {
        const response = await fetch('/api/egresso/lista_egressos', {
          headers: { 'X-Egresso-ID': egressoLogadoId },
        });
        if (response.ok) {
          const data = await response.json(); // Assumindo que esta API retorna JSON corretamente
          setPessoas(data.pessoas || []);
          localStorage.setItem('pessoas', JSON.stringify(data.pessoas || []));
        } else {
        }
      } catch (error) {
      }
    }
  };

  useEffect(() => {
    const pessoasSalvas = localStorage.getItem('pessoas');
    if (pessoasSalvas) {
      try {
        setPessoas(JSON.parse(pessoasSalvas));
      } catch (e) {
        localStorage.removeItem('pessoas');
      }
    }
    buscarEgressosLista(); 
    buscarDadosEgressoLogado(); 
  }, []);

  const handleConsultarEgresso = () => router.push('/consultar_egresso');
  const handleBotaoConsultarPessoas = () => buscarEgressosLista();

  const nomesDeCursosUnicos = useMemo(() => {
    const todosOsCursos = new Set<string>();
    pessoas.forEach(p => p.cursos.forEach(c => todosOsCursos.add(c.nomeCurso)));
    return Array.from(todosOsCursos).sort();
  }, [pessoas]);

  const anosEntradaUnicos = useMemo(() => {
    const anos = new Set<string>();
    pessoas.forEach(p => p.cursos.forEach(c => {
      const anoSemestre = converterDataParaAnoSemestreOuAno(c.anoEntrada);
      if (anoSemestre) anos.add(anoSemestre);
    }));
    return Array.from(anos).sort(ordenarAnoSemestre);
  }, [pessoas]);

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

    const filtroAnoValidoEntrada = (cursoAnoEntrada: string) => {
      if (!filtroAnoEntrada) return true; 
      const [anoFiltro, semestreFiltro] = filtroAnoEntrada.split('/'); 
      const [diaCurso, mesCurso, anoCurso] = cursoAnoEntrada.split('/').map(Number); 

      if (!anoFiltro || isNaN(diaCurso) || isNaN(mesCurso) || isNaN(anoCurso)) return false;
      if (anoCurso.toString() !== anoFiltro) return false;

      if (semestreFiltro) { 
        if (semestreFiltro === '1' && mesCurso > 6) return false;
        if (semestreFiltro === '2' && mesCurso <= 6) return false;
      }
      return true;
    };

    const filtroAnoValidoSaida = (cursoAnoSaida: string | null) => {
      if (!filtroAnoSaida) return true;
      if (!cursoAnoSaida) return false; 

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
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full max-w-xs bg-white border-r border-gray-200 p-6 flex flex-col items-center shadow-md">
        <div className="w-32 h-32 relative mb-4">
          <Image src={fotoPerfilUrlEgressoLogado || "/images/foto_padrao.png"} alt="Foto de perfil" fill sizes="128px" priority className="rounded-full object-cover border-2 border-gray-300"/>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 text-center">{nomeEgressoLogado}</h2>
        <Button onClick={() => router.push('/editarperfil_egresso')}>Editar Informações</Button>
      </div>

      <div className="flex-1 p-6 sm:p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Consulta de Alunos/Egressos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8 p-6 bg-white rounded-xl shadow-md">
          <div className="space-y-4">
            <div>
              <label htmlFor="filtroNome" className="block text-sm font-medium text-gray-700 mb-1">Nome:</label>
              <input id="filtroNome" type="text" placeholder="Pesquisar por nome" value={filtroNome} onChange={(e) => setFiltroNome(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"/>
            </div>
            <div>
              <label htmlFor="filtroPrimeiraLetra" className="block text-sm font-medium text-gray-700 mb-1">Primeira letra do nome:</label>
              <input id="filtroPrimeiraLetra" type="text" placeholder="Ex: A" value={filtroPrimeiraLetra} onChange={(e) => setFiltroPrimeiraLetra(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"/>
            </div>
            <div>
              <label htmlFor="filtroCurso" className="block text-sm font-medium text-gray-700 mb-1">Curso:</label>
              <select id="filtroCurso" value={filtroCurso} onChange={(e) => setFiltroCurso(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white">
                <option value="">Todos</option>
                {nomesDeCursosUnicos.map((nomeCurso) => (<option key={nomeCurso} value={nomeCurso.toLowerCase()}>{nomeCurso}</option>))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="filtroAnoEntrada" className="block text-sm font-medium text-gray-700 mb-1">Ano/Semestre de Entrada:</label>
              <select id="filtroAnoEntrada" value={filtroAnoEntrada} onChange={(e) => setFiltroAnoEntrada(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white">
                <option value="">Todos</option>
                {anosEntradaUnicos.map((anoSem) => (<option key={anoSem} value={anoSem}>{anoSem}</option>))}
              </select>
            </div>
            <div>
              <label htmlFor="filtroAnoSaida" className="block text-sm font-medium text-gray-700 mb-1">Ano/Semestre de Saída:</label>
              <select id="filtroAnoSaida" value={filtroAnoSaida} onChange={(e) => setFiltroAnoSaida(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white">
                <option value="">Todos</option>
                {anosSaidaUnicos.map((anoSem) => (<option key={anoSem} value={anoSem}>{anoSem}</option>))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 text-base font-semibold shadow-md transition-colors" onClick={handleBotaoConsultarPessoas}>Consultar Pessoas</Button>
          <Button className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg px-6 py-3 text-base font-semibold shadow-md transition-colors" onClick={handleConsultarEgresso}>Consultar Egressos</Button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Alunos e Egressos</h2>
          {pessoasFiltradas.length > 0 ? (
            <ul className="space-y-6">
              {pessoasFiltradas.map((pessoa) => (
                <li key={pessoa.id} className="border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0">
                  <p className="text-lg font-semibold text-gray-800">{pessoa.nome}</p>
                  <p className="text-sm text-gray-600">E-mail: {pessoa.email}</p>
                  <p className="text-sm text-gray-600">CPF: {pessoa.cpf}</p>
                  <div className="mt-2">
                    <p className="font-medium text-sm text-gray-700">Curso(s):</p>
                    <ul className="ml-4 list-disc text-sm text-gray-600 space-y-1">
                      {pessoa.cursos.map((curso, index) => (
                        <li key={index}>
                          {curso.nomeCurso} — {curso.anoEntrada} até{" "}
                          {curso.anoSaida || <strong className="text-green-600">ATUALMENTE</strong>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 py-8">Nenhuma pessoa encontrada com os filtros aplicados.</p>
          )}
        </div>
      </div>
    </div>
  );
}