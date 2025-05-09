'use client';

import styles from './login_egresso.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PrismaClient } from '@prisma/client/extension';

export default function Login_Egresso() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const validacaoEmail = (email: string) => {
    const regex = /^[^\s@]+@(gmail\.com|outlook\.com)$/;
    return regex.test(email);
  }

  const camposVazios = () =>{ //Caso os campos não sejam preenchidos e caso o e-mail seja inválido
    if (!email || !senha){
      alert("Preencha todos os campos antes de continuar!");
      return false;
    }
    if (!validacaoEmail(email)){
      alert("Insira um e-mail válido!");
    }
    if (senha.length < 8){
      alert("A senha deve ter no mínimo 8 caracteres!");
      return false;
    }
    return true;
  };

  const handleCriarConta = () =>{ //Direcionta para perfil_aluno
    router.push("/criarconta_egresso");
  }

  const handleEntrar = async () => { //Direciona para app_egresso
    if (!camposVazios()) return;

    try{
      const res = await fetch("/api/egresso/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      if (!res.ok){
        const errorData = await res.json();
        alert(errorData.error || "Erro ao fazer login!");
        return;
      }
      const userData = await res.json();
      console.log("Usuário logado:", userData.egresso);
      router.push("/app_egresso");
    } catch (error){
      console.log("Erro ao conectar com o servidor:", error);
      alert("Erro ao conectar com o servidor!");
    }
}

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Conta de Usuário</h1>
        <label className={styles.labEmail} htmlFor="email">Email:</label>
        <input className={styles.email} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label className={styles.labSenha} htmlFor="senha">Senha:</label>
        <input className={styles.senha} type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

        <button className={styles.Entrar} onClick={handleEntrar}>Entrar</button>
        <button className={styles.CriarConta} onClick={handleCriarConta}>Criar Conta</button>
    </div>
  );
}