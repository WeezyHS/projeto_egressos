'use client';

import styles from './login_instituicao.module.css';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CriarContaInstituicao() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  //Validação do formato de email
  const validacaoEmail = (email: string) => {
    const regex = /^[^\s@]+@(gmail\.com|outlook\.com)$/;
    return regex.test(email);
  }
  //Caso os campos não sejam preenchidos e caso o e-mail seja inválido
  const camposVazios = () =>{
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
    if (!camposVazios()) return;

    console.log('Email:', email, 'Senha:', senha);
    router.push("/perfil_instituicao"); //Redireciona para perfilinstituicao
  }
  const handleEntrar = () =>{
    if (!camposVazios()) return;
    router.push("/app_instituicao");
  }

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