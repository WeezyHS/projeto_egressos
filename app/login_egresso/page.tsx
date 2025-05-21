'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Login_Egresso() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const validacaoEmail = (email: string) => {
    const regex = /^[^\s@]+@(gmail\.com|outlook\.com)$/;
    return regex.test(email);
  };

  const camposVazios = () => {
    if (!email || !senha) {
      alert('Preencha todos os campos antes de continuar!');
      return false;
    }
    if (!validacaoEmail(email)) {
      alert('Insira um e-mail válido!');
      return false;
    }
    if (senha.length < 8) {
      alert('A senha deve ter no mínimo 8 caracteres!');
      return false;
    }
    return true;
  };

  const handleCriarConta = () => {
    router.push('/criarconta_egresso');
  };

  const handleEntrar = async () => {
    if (!camposVazios()) return;

    try {
      const res = await fetch('/api/egresso/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.error || 'Erro ao fazer login!');
        return;
      }

      const userData = await res.json();
      localStorage.removeItem('perfilEgresso');
      localStorage.setItem('perfilEgresso', JSON.stringify(userData));
      router.push('/app_egresso');
    } catch (error) {
      alert('Erro ao conectar com o servidor!');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-12 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-lg">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">Conta de Usuário</h1>

        <div className="mt-8 space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email:</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@gmail.com"
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="senha" className="text-sm font-semibold text-gray-700">Senha:</label>
            <Input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="********"
              autoComplete="current-password"
            />
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <Button onClick={handleEntrar} variant="default" className="w-full bg-blue-600 hover:bg-blue-700">Entrar</Button>
            <Button onClick={handleCriarConta} variant="outline" className="w-full">Criar Conta</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
