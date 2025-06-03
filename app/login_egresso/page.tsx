'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input'; // Certifique-se que este caminho está correto
import { Button } from '@/components/ui/button'; // Certifique-se que este caminho está correto

export default function Login_Egresso() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const validacaoEmail = (emailValue: string) => {
    const regex = /^[^\s@]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return regex.test(emailValue);
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
        const errorText = await res.text(); // Pega o texto bruto do erro
        try {
          const errorData = JSON.parse(errorText); // Tenta parsear como JSON, pois algumas APIs de erro retornam JSON
          alert(errorData.error || 'Erro ao fazer login!');
        } catch (e) {
          alert(`Erro ao fazer login: ${errorText || res.statusText}`); // Se não for JSON, mostra o texto bruto ou uma mensagem genérica
        }
        return;
      }
      // Se o login foi teoricamente bem-sucedido (res.ok é true)
      const responseText = await res.text(); // Pega o texto bruto da resposta de sucesso

      if (!responseText) {
        alert('O servidor respondeu com sucesso, mas não retornou dados. Por favor, contate o suporte.');
        return;
      }

      try {
        const userData = JSON.parse(responseText); // Agora tenta parsear o texto que você logou

        const egressoData = userData.egresso;
        const cpfDoUsuario = egressoData ? egressoData.cpf : null;

        if (cpfDoUsuario) {
          localStorage.setItem('userCpf', cpfDoUsuario);
          localStorage.setItem('userSenha', senha); 

          if (egressoData) {
            localStorage.removeItem('perfilEgresso');
            localStorage.setItem('perfilEgresso', JSON.stringify(egressoData));
          }
          router.push('/egresso');
        } else {
          alert('Login bem-sucedido, mas houve um problema ao obter os dados do seu perfil (CPF não encontrado na resposta da API).');
        }
      } catch (parseError) {
        alert('Erro ao processar a resposta do servidor. A resposta não parece ser um JSON válido.');
      }

    } catch (networkError) {
      alert('Erro ao conectar com o servidor. Verifique sua conexão e tente novamente.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 py-12 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-2xl">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-800">Acesso do Egresso</h1>

        <div className="mt-10 space-y-6">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email:</label>
            <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu.email@exemplo.com" autoComplete="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"/>
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="senha" className="text-sm font-semibold text-gray-700">Senha:</label>
            <Input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="********" autoComplete="current-password" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"/>
          </div>

          <div className="flex flex-col gap-4 pt-6">
            <Button onClick={handleEntrar} variant="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all">Entrar</Button>
            <Button onClick={handleCriarConta} variant="outline" className="w-full py-3 text-base font-medium rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">Criar Conta</Button>
          </div>
        </div>
      </div>
    </div>
  );
}