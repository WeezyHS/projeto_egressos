'use client';

import { Button } from "@/components/ui/button";
//app/instituicao/layout.tsx
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';

export default function InstituicaoLayout({ children }: { children: React.ReactNode }) {
  
  const [perfil, setPerfil] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
      const dadosPerfil = localStorage.getItem("perfilInstituicao");
      if (dadosPerfil) {
          setPerfil(JSON.parse(dadosPerfil));
      } else {
          buscarPerfilInstituicao();
      }
  }, []);

  const buscarPerfilInstituicao = async () => {
      try {
          const response = await fetch(`/api/instituicao/perfil_instituicao`);
          if (response.ok) {
              const data = await response.json();
              setPerfil(data);
              localStorage.setItem("perfilInstituicao", JSON.stringify(data));
          }
      } catch (error) {
          console.error("Erro ao buscar perfil da instituição", error);
      }
  };

  const BotaoLogout = () => {
    localStorage.removeItem('cpfEgresso');
    // ou sessionStorage.removeItem('cpfEgresso');
    window.location.href = 'http://localhost:3000'; // ou qualquer página de login
  };


  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Coluna lateral esquerda fixa */}
      <aside className="sticky top-0 h-screen w-64 bg-white border-r shadow p-4 flex flex-col items-center">
        {perfil?.fotoPerfil && (
          <img
            src={perfil.fotoPerfil}
            alt="Foto da Instituição"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary mb-4"
          />
        )}
        <p className="text-lg font-semibold mb-2">
          {perfil?.nomeCompleto || "Nome não encontrado!"}
        </p>
        <br />
        <Button onClick={() => router.push('/instituicao')}>Início</Button>
        <br />
        <Button onClick={() => router.push('/instituicao/gerenciar_cursos')}>Gerenciar Cursos</Button>
        <br />
        <Button onClick={() => router.push('/instituicao/cursos')}>Cursos</Button>
        <br />
        <Button onClick={() => router.push('/instituicao/editar_informacoes')}>Editar Informações</Button>
        <br />
        <div className="flex justify-end mb-4">
          <Button
            onClick={BotaoLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            Sair
          </Button>
        </div>
      </aside>
  
      {/* Conteúdo central dinâmico */}
      <main className="flex-1 p-6">
        <header className="bg-white shadow p-4 sticky top-0 z-10">
          <h1 className="text-2xl font-bold">Perfil da Instituição</h1>
        </header>
        {children}
      </main>
    </div>
  );
  
}
