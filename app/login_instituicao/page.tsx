'use client'

//app/login_instituicao
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginInstituicao() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const router = useRouter()

  const validacaoEmail = (email: string) => {
    const regex = /^[^\s@]+@(gmail\.com|outlook\.com)$/;
    return regex.test(email);
  }

  const camposVazios = () => {
    if (!email || !senha) {
      alert("Preencha todos os campos antes de continuar!");
      return false;
    }

    if (!validacaoEmail(email)) {
      alert("Insira um e-mail válido!");
      return false;
    }

    if (senha.length < 8) {
      alert("A senha deve ter no mínimo 8 caracteres!");
      return false;
    }
    return true;
  }

  const handleCriarConta = () => {
    router.push("/criarconta_instituicao");
  }

  const handleEntrar = async () => {
    if (!camposVazios()) return;

    try {
      const response = await fetch('/api/instituicao/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.removeItem("perfilInstituicao");
        localStorage.setItem('instituicaoId', data.id);
        localStorage.setItem("perfilInstituicao", JSON.stringify(data));
        router.push('/instituicao');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Erro ao fazer login.');
      }
    } catch (error) {
      alert('Erro de conexão com o servidor.');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Conta da Instituição</h1>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
          <Input id="email" type="email" placeholder="exemplo@instituicao.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full"/>
        </div>
        <div className="mb-6">
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">Senha:</label>
          <Input id="senha" type="password" placeholder="********" value={senha} onChange={(e) => setSenha(e.target.value)} className="w-full"/>
        </div>
        <div className="flex flex-col gap-4 pt-6">
          <Button onClick={handleEntrar} variant="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all">Entrar</Button>
          <Button onClick={handleCriarConta} variant="outline" className="w-full py-3 text-base font-medium rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">Criar Conta</Button>
        </div>
      </div>
    </div>
  );
}