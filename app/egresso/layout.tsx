'use client';

//app/egresso/layout.tsx
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import Image from 'next/image';
//import { GraduationCap } from "lucide-react";

// Interface Pessoa, ajustada para como a API /api/pessoa/listar-todos vai retornar
interface Pessoa {
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

// Função auxiliar para ordenar strings "AAAA/S" ou "AAAA" (mantida)
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

export default function EgressoLayout({ children }: {children: React.ReactNode}) {
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
        //console.error('App_Egresso - buscarDadosEgressoLogado (Sidebar) - Erro API Perfil (texto bruto):', errorText);
        setNomeEgressoLogado('Falha (API perfil)');
      }
    } catch (error) {
      console.error('App_Egresso - buscarDadosEgressoLogado (Sidebar) - Erro de conexão API Perfil.', error);
      setNomeEgressoLogado('Falha (conexão perfil)');
    }
  };

  // Função para buscar a lista de TODAS as pessoas
  const buscarTodasAsPessoas = async () => {
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

  const handleConsultarEgresso = () => router.push('/consultar_egresso'); 
  const handleBotaoAtualizarLista = () => buscarTodasAsPessoas();

  // useMemo para dropdowns, adaptado para a interface Pessoa e os campos de curso
  const nomesDeCursosUnicos = useMemo(() => {
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

  // Lógica de filtragem para Pessoa
  const pessoasFiltradas = pessoas.filter((pessoa) => {
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

  const BotaoLogout = () => {
    localStorage.removeItem('cpfEgresso');
    // ou sessionStorage.removeItem('cpfEgresso');
    window.location.href = 'http://localhost:3000'; // ou qualquer página de login
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar fixa */}
      <div className="sticky top-0 h-screen w-full max-w-xs bg-white border-r border-gray-200 p-6 flex flex-col items-center shadow-md space-y-4">
        <div className="w-32 h-32 relative">
          {fotoPerfilUrlEgressoLogado ? (
            <Image
              src={fotoPerfilUrlEgressoLogado}
              alt="Foto de perfil"
              fill
              sizes="128px"
              priority
              className="rounded-full object-cover border-2 border-gray-300"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 border-2 border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          )}
        </div>
        <h2 className="text-xl font-semibold text-gray-800 text-center">{nomeEgressoLogado}</h2>
        <h2 className="text-x1 font-semibold text-gray-800 text-center">CPF: {cpfEgressoLogado}</h2>
        <h2>Localização: {cidadeLogado} {estadoLogado} {paisLogado}</h2>
  
        <Button onClick={() => router.push('/egresso')} className="w-full">Início</Button>
        <Button onClick={() => router.push('/egresso/editar_informacoes')} className="w-full">Editar Informações</Button><br/>
  
        <div className="flex justify-end mb-4">
          <Button
            onClick={BotaoLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            Sair
          </Button>
        </div>
      </div>
  
      {/* Conteúdo principal */}
      <main className="flex-1 p-6">
        <header className="bg-white shadow p-4 sticky top-0 z-10">
          <h1 className="text-2x1 font-bold">Perfil de Egresso</h1>
        </header>
        {children}
      </main>
    </div>
  );
  
}