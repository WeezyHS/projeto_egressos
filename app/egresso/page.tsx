'use client';

//app/egresso/page.tsx
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Image from 'next/image';
import { Eye } from "lucide-react";

interface Pessoa { // Interface Pessoa, ajustada para como a API /api/pessoa/listar-todos vai retornar
  id: number;
  nome: string;
  cpf: string;
  email: string;
  cursos: {
    nomeCurso: string;
    anoEntrada: string;
    anoSaida: string | null; // Esperado no formato "AAAA/S", "AAAA" ou null da API
  }[];
}

const ordenarAnoSemestre = (a: string, b: string): number => {
  const eValorValido = (val: string) => val && val !== 'Não informado' && val !== null;
  const aValido = eValorValido(a);
  const bValido = eValorValido(b);

  if (aValido && !bValido) return -1;
  if (!aValido && bValido) return 1;
  if (!aValido && !bValido) return 0;
  
  const [anoA, semAStr] = a.split('/');
  const [anoB, semBStr] = b.split('/');
  const numAnoA = parseInt(anoA, 10);
  const numAnoB = parseInt(anoB, 10);
  const numSemA = semAStr ? parseInt(semAStr, 10) : 0;
  const numSemB = semBStr ? parseInt(semBStr, 10) : 0;

  if (numAnoA !== numAnoB) return numAnoA - numAnoB;
  return numSemA - numSemB;
};

export default function App_Egresso() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]); // Estado para a lista de Pessoas
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroPrimeiraLetra, setFiltroPrimeiraLetra] = useState('');
  const [filtroCurso, setFiltroCurso] = useState('');
  const [filtroAnoEntrada, setFiltroAnoEntrada] = useState('');
  const [filtroAnoSaida, setFiltroAnoSaida] = useState('');
  const router = useRouter();

  const [nomeEgressoLogado, setNomeEgressoLogado] = useState<string>('Carregando...');
  const [fotoPerfilUrlEgressoLogado, setFotoPerfilUrlEgressoLogado] = useState<string | null>(null);
  const [cpfEgressoLogado, setCpfEgressoLogado] = useState<string | null>(null);
  const [cidadeLogado, setCidadeLogado] = useState<string | null>(null);
  const [estadoLogado, setEstadoLogado] = useState<string | null>(null);
  const [paisLogado, setPaisLogado] = useState<string | null>(null);

  const buscarDadosEgressoLogado = async () => {
    const cpf = localStorage.getItem('userCpf');
    const senha = localStorage.getItem('userSenha');
    if (!cpf || !senha) {
      console.warn('App_Egresso: Credenciais para perfil (sidebar) não encontradas.');
      setNomeEgressoLogado('Usuário');
      setFotoPerfilUrlEgressoLogado(null);
      setCpfEgressoLogado(null);
      return;
    }
    setCpfEgressoLogado(cpf);
    try {
      const response = await fetch('/api/egresso/perfil_egresso', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cpf, senha }),
      });
      console.log('App_Egresso - buscarDadosEgressoLogado (Sidebar) - Status API Perfil:', response.status, response.statusText);
      if (response.ok) {
        const data = await response.json().catch(() => null);
        if (data) {
          setNomeEgressoLogado(data.nome || 'Nome não disponível');
          setFotoPerfilUrlEgressoLogado(data.fotoPerfil || null);
          setCpfEgressoLogado(data.cpf || 'CPF inválido');
          setCidadeLogado(data.cidade || 'Localização desconhecida');
          setEstadoLogado(data.estado);
          setPaisLogado(data.pais);
        } else {
          console.error("App_Egresso - buscarDadosEgressoLogado (Sidebar): Resposta OK, mas JSON inválido/vazio.");
          setNomeEgressoLogado('Falha (dados perfil)');
        }
      } else {
        const errorText = await response.text();
        setNomeEgressoLogado('Falha (API perfil)');
      }
    } catch (error) {
      console.error('App_Egresso - buscarDadosEgressoLogado (Sidebar) - Erro de conexão API Perfil.', error);
      setNomeEgressoLogado('Falha (conexão perfil)');
    }
  };

  const buscarTodasAsPessoas = async () => { // Função para buscar a lista de TODAS as pessoas
    console.log('App_Egresso - buscarTodasAsPessoas: Iniciando busca da API /api/egresso/lista_geral...');
    try {
      const response = await fetch('/api/egresso/lista_geral'); // Chamando a NOVA API

      console.log('App_Egresso - buscarTodasAsPessoas - Status da resposta:', response.status, response.statusText);

      if (response.ok) {
        const responseText = await response.text();
        if (!responseText) {
          console.error('App_Egresso - buscarTodasAsPessoas: API retornou um corpo VAZIO.');
          setPessoas([]); return;
        }
        try {
          const data = JSON.parse(responseText);
          const pessoasDaApi = data.pessoas || []; // API retorna { pessoas: [...] }
          console.log('App_Egresso - buscarTodasAsPessoas: "data.pessoas" recebido:', pessoasDaApi.length, "pessoas");
          setPessoas(pessoasDaApi);
        } catch (parseError) {
          console.error('App_Egresso - buscarTodasAsPessoas: Falha ao parsear JSON:', parseError, "Resposta bruta:", responseText);
          setPessoas([]);
        }
      } else {
        const errorText = await response.text();
        console.error('App_Egresso - buscarTodasAsPessoas - Erro da API (texto bruto):', errorText);
        setPessoas([]);
      }
    } catch (error) {
      console.error('App_Egresso - buscarTodasAsPessoas: Erro de conexão:', error);
      setPessoas([]);
    }
  };

  useEffect(() => {
    buscarDadosEgressoLogado(); // Para a sidebar
    buscarTodasAsPessoas();    // Para a tabela principal
  }, []);

  //const handleConsultarEgresso = () => router.push('/consultar_egresso'); 
  const handleBotaoAtualizarLista = () => buscarTodasAsPessoas();

  const nomesDeCursosUnicos = useMemo(() => { // useMemo para dropdowns, adaptado para a interface Pessoa e os campos de curso
    const cursos = new Set<string>();
    pessoas.forEach(p => p.cursos.forEach(c => {
      if(c.nomeCurso && c.nomeCurso !== 'Não informado') cursos.add(c.nomeCurso);
    }));
    return Array.from(cursos).sort();
  }, [pessoas]);

  const anosEntradaUnicos = useMemo(() => {
    const anos = new Set<string>();
    pessoas.forEach(p => p.cursos.forEach(c => {
      if (c.anoEntrada && c.anoEntrada !== 'Não informado') anos.add(c.anoEntrada);
    }));
    return Array.from(anos).sort(ordenarAnoSemestre);
  }, [pessoas]);

  const anosSaidaUnicos = useMemo(() => {
    const anos = new Set<string>();
    pessoas.forEach(p => p.cursos.forEach(c => {
      if (c.anoSaida && c.anoSaida !== 'Não informado' && c.anoSaida !== null) {
        anos.add(c.anoSaida);
      }
    }));
    return Array.from(anos).sort(ordenarAnoSemestre);
  }, [pessoas]);

  const pessoasFiltradas = pessoas.filter((pessoa) => { // Lógica de filtragem para Pessoa
    const nomeLower = pessoa.nome ? pessoa.nome.toLowerCase() : '';
    const filtroNomeLower = filtroNome.toLowerCase();
    const filtroPrimeiraLetraLower = filtroPrimeiraLetra.toLowerCase();
    const filtroCursoLower = filtroCurso.toLowerCase();

    const nomeMatch = !filtroNome || nomeLower.includes(filtroNomeLower);
    const primeiraLetraMatch = !filtroPrimeiraLetra || nomeLower.startsWith(filtroPrimeiraLetraLower);
    // Filtro de curso agora verifica se algum dos cursos da pessoa corresponde
    const cursoMatch = !filtroCursoLower || pessoa.cursos.some(c => c.nomeCurso && c.nomeCurso.toLowerCase() === filtroCursoLower);
    // Filtro de ano/semestre, comparando diretamente
    const anoEntradaMatch = !filtroAnoEntrada || pessoa.cursos.some(c => c.anoEntrada && c.anoEntrada === filtroAnoEntrada);
    const anoSaidaMatch = !filtroAnoSaida || pessoa.cursos.some(c => 
        (c.anoSaida && c.anoSaida === filtroAnoSaida) || 
        (!c.anoSaida && (filtroAnoSaida === "ATUALMENTE" || filtroAnoSaida === "")) // Considera "ATUALMENTE" se filtroSaida for vazio ou "ATUALMENTE"
    );
    return nomeMatch && primeiraLetraMatch && cursoMatch && anoEntradaMatch && anoSaidaMatch;
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Conteúdo principal */}
      <div className="flex-1 p-6 sm:p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Consulta de Pessoas (Alunos/Egressos)</h1>
        {/* Filtros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8 p-6 bg-white rounded-xl shadow-md">
          <div className="space-y-4">
            <div>
              <label htmlFor="filtroNome" className="block text-sm font-medium text-gray-700 mb-1">Nome:</label>
              <Input id="filtroNome" type="text" placeholder="Pesquisar por nome" value={filtroNome} onChange={(e) => setFiltroNome(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"/>
            </div>
            <div>
              <label htmlFor="filtroPrimeiraLetra" className="block text-sm font-medium text-gray-700 mb-1">Primeira letra:</label>
              <Input id="filtroPrimeiraLetra" type="text" placeholder="Ex: A" value={filtroPrimeiraLetra} onChange={(e) => setFiltroPrimeiraLetra(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"/>
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
              <label htmlFor="filtroAnoEntrada" className="block text-sm font-medium text-gray-700 mb-1">Ano/Sem. Entrada:</label>
              <select id="filtroAnoEntrada" value={filtroAnoEntrada} onChange={(e) => setFiltroAnoEntrada(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white">
                <option value="">Todos</option>
                {anosEntradaUnicos.map((anoSem) => (<option key={anoSem} value={anoSem}>{anoSem}</option>))}
              </select>
            </div>
            <div>
              <label htmlFor="filtroAnoSaida" className="block text-sm font-medium text-gray-700 mb-1">Ano/Sem. Saída:</label>
              <select id="filtroAnoSaida" value={filtroAnoSaida} onChange={(e) => setFiltroAnoSaida(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white">
                <option value="">Todos</option>
                {/* Você pode adicionar uma opção "Cursando/Não informado" se a API retornar um valor específico para isso */}
                {anosSaidaUnicos.map((anoSem) => (<option key={anoSem} value={anoSem}>{anoSem}</option>))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mb-10">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 text-base font-semibold shadow-md transition-colors" onClick={handleBotaoAtualizarLista}>
            Atualizar Lista
          </Button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Pessoas</h2>
        {pessoasFiltradas.length > 0 ? (
          <ul className="space-y-6">
            {pessoasFiltradas.map((pessoa) => {
              const isLogado = cpfEgressoLogado && pessoa.cpf === cpfEgressoLogado;

              return (
                <li
                  key={pessoa.id}
                  className={`relative border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0 p-4 rounded-md transition-all duration-200 ease-in-out ${isLogado ? 'bg-blue-100 border-l-4 border-blue-600 shadow-lg' : 'hover:bg-gray-50'}`}
                >
                  <div className="absolute top-4 right-4">
                    <Link href={`/perfil_egresso/${pessoa.cpf}`} passHref>
                      <Eye className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                    </Link>
                  </div>
                  <p className="text-lg font-semibold text-gray-800 flex items-center gap-2 flex-wrap">
                    {pessoa.nome}
                    {isLogado && (
                      <span className="text-sm text-blue-700 font-semibold">(Este é você)</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-600">E-mail: {pessoa.email}</p>
                  <div className="mt-2">
                    <p className="font-medium text-sm text-gray-700">Curso(s) Registrado(s):</p>
                    {pessoa.cursos && pessoa.cursos.length > 0 ? (
                      <ul className="ml-4 list-disc text-sm text-gray-600 space-y-1">
                        {pessoa.cursos.map((curso, index) => (
                          <li key={index}>
                          {curso.nomeCurso} (Entrada: {curso.anoEntrada} - Saída:{" "}
                          {curso.anoSaida ? (
                            <>
                              {curso.anoSaida} - <strong className="text-blue-600">Egresso</strong>
                            </>
                          ) : (
                            <strong className="text-green-600">Cursando/Não Finalizado</strong>
                          )})
                        </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="ml-4 text-sm text-gray-500 italic">Nenhum curso registrado para esta pessoa.</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-center text-gray-500 py-8">Nenhuma pessoa encontrada com os filtros aplicados ou a lista está vazia.</p>
        )}
      </div>
    </div>
  </div>
);
}