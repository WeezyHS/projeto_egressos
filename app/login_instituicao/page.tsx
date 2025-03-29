'use client';

import styles from './login_instituicao.module.css';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CriarContaInstituicao() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  //Caso os campos não sejam preenchidos
  const camposVazios = () =>{
    if (!email || !senha){
      alert("Preencha todos os campos antes de continuar!");
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

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label htmlFor="senha">Senha:</label>
      <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

      <button onClick={handleCriarConta}>Criar Conta</button><br/>
      <button onClick={handleEntrar}>Entrar</button>
    </div>
  );
}