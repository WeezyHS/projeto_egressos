'use client';

import styles from './login_instituicao.module.css';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ParseError } from 'papaparse';

export default function CriarContaInstituicao() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const validacaoEmail = (email: string) => { //Validação do formato de email
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
      return false;
    }
    if (senha.length < 8){
      alert("A senha deve ter no mínimo 8 caracteres!");
      return false;
    }
    return true;
  };

  const handleCriarConta = () =>{
    router.push("/criarconta_instituicao"); //Redireciona para perfilinstituicao
  }

  const handleEntrar = async () => {
    if (!camposVazios()) return;

    try {
      const response = await fetch('/api/instituicao/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.removeItem("perfilInstituicao"); //Remove o antigo, se houver
        localStorage.setItem("perfilInstituicao", JSON.stringify(data)); //Salva os novos dados
        router.push('/app_instituicao');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Erro ao fazer login.');
      }
    } catch (error) {
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Conta de Instituição</h1>

      <label className={styles.labEmail} htmlFor="email">Email:</label>
      <input className={styles.email} type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label className={styles.labSenha} htmlFor="senha">Senha:</label>
      <input className={styles.senha} type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>

      <button className={styles.CriarConta} onClick={handleCriarConta}>Criar Conta</button><br/>
      <button className={styles.Entrar} onClick={handleEntrar}>Entrar</button>
    </div>
  );
}