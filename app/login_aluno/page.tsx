'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CriarContaInstituicao() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Adicionar a lógica para enviar os dados para o backend
    console.log('Email:', email, 'Senha:', senha);

    router.push("/perfil_instituicao"); //Redireciona para perfilinstituicao
  };

  return (
    <div>
      <h1>Criar Conta de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

        <button type="submit">Criar Conta</button>

      </form>
    </div>
  );
}