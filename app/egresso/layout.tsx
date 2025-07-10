'use client';

// app/egresso/layout.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { User } from 'lucide-react';

// Interface para os dados do perfil que esperamos do localStorage
interface PerfilEgresso {
  id: number;
  fotoPerfil: string | null;
  cidade: string | null;
  estado: string | null;
  pais: string | null;
  pessoa: {
    nome: string;
    cpf: string;
  } | null;
}

export default function EgressoLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [nomeEgresso, setNomeEgresso] = useState<string>('Carregando...');
  const [cpfEgresso, setCpfEgresso] = useState<string | null>(null);
  const [fotoUrl, setFotoUrl] = useState<string | null>(null);
  const [localizacao, setLocalizacao] = useState<string>('');

  useEffect(() => {
    const perfilSalvoString = localStorage.getItem('perfilEgresso');

    if (perfilSalvoString) {
      try {
        const perfil: PerfilEgresso = JSON.parse(perfilSalvoString);
        setNomeEgresso(perfil.pessoa?.nome || 'Nome não informado');
        setCpfEgresso(perfil.pessoa?.cpf || 'CPF não informado');
        setFotoUrl(perfil.fotoPerfil);
        
        const localParts = [perfil.cidade, perfil.estado, perfil.pais].filter(Boolean);
        setLocalizacao(localParts.join(', '));
      } catch (error) {
        console.error("Erro ao ler dados do perfil do localStorage:", error);
        handleLogout();
      }
    } else {
      alert("Sessão não encontrada. Por favor, faça o login novamente.");
      router.push('/login_egresso');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('perfilEgresso');
    localStorage.removeItem('egressoId');
    localStorage.removeItem('userCpf');
    localStorage.removeItem('userSenha');
    router.push('/login_egresso');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="sticky top-0 h-screen w-full max-w-xs bg-white border-r border-gray-200 p-6 flex flex-col items-center shadow-lg space-y-6">
        <div className="w-32 h-32 relative">
          {fotoUrl ? (
            <Image src={fotoUrl} alt="Foto de perfil" fill sizes="128px" priority className="rounded-full object-cover border-4 border-blue-200"/>
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 border-4 border-gray-300">
              <User size={64} />
            </div>
          )}
        </div>
        <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">{nomeEgresso}</h2>
            {cpfEgresso && <p className="text-sm text-gray-500 mt-1">CPF: {cpfEgresso}</p>}
            {localizacao && <p className="text-sm text-gray-500 mt-1">Localização: {localizacao}</p>}
        </div>
        <nav className="w-full flex flex-col gap-2 pt-4 border-t">
            <Button onClick={() => router.push('/egresso')} variant="ghost" className="justify-start">Início</Button>
            <Button onClick={() => router.push('/egresso/editar_informacoes')} variant="ghost" className="justify-start">Editar Informações</Button>
        </nav>
        <div className="mt-auto w-full">
          <Button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 text-white">
            Sair
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <header className="bg-white shadow p-4 sticky top-0 z-10">
          <h1 className="text-2x1 font-bold">Perfil de Egresso</h1>
        </header>
        {children}
      </main>
    </div>
  );
}
