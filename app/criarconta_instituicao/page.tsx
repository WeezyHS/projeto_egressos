'use client';

import { useRouter } from "next/navigation";
import styles from "./perfil_instituicao.module.css";
import { useState } from 'react';
import { read } from "fs";

export default function CriarContaInstituicao() {
  const [fotoPerfil, setFotoPerfil] = useState<File | null>(null);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [nomeRepresentante, setNomeRepresentante] = useState('');
  const [cpfRepresentante, setCpfRepresentante] = useState('');

  const router = useRouter();

  const camposVazios = () =>{
    if (!fotoPerfil || !nomeCompleto.trim() || !email?.trim() || !senha?.trim() || !cnpj.trim() || !telefone.trim() || !endereco.trim() || !cep.trim() || !nomeRepresentante.trim() || !cpfRepresentante.trim()){
      alert("Preencha todos os campos antes de continuar!");
      return false;
    }
    return true;
  }

  const handleSubmit = (event: React.FormEvent) => {
    if (!camposVazios()) return;
    event.preventDefault();
    // Adicionar a lógica para enviar os dados para o backend
    console.log(
      'Foto do Perfil:', fotoPerfil,
      'Nome Completo:', nomeCompleto,
      'email:', email,
      'senha', senha,
      'CNPJ:', cnpj,
      'Telefone:', telefone,
      'Endereço:', endereco,
      'CEP:', cep,
      'Nome do Representante:', nomeRepresentante,
      'CPF do Representante:', cpfRepresentante
    );
  };

  const handleFotoPerfilChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // if (!camposVazios()) return;
    if (event.target.files && event.target.files[0]) {
      setFotoPerfil(event.target.files[0]);
    }
  };

  const handleSalvarPerfil = async () => {
    if (!camposVazios()) return;

    if (!fotoPerfil){
      alert("Escolha uma foto de perfil!");
      return;
    }

    console.log("Imagem convertida com sucesso!");

    const formData = new FormData();
    formData.append('fotoPerfil', fotoPerfil);
    formData.append('nomeCompleto', nomeCompleto.trim());
    formData.append('email', email.trim());
    formData.append('senha', senha.trim());
    formData.append('cnpj', cnpj.trim());
    formData.append('telefone', telefone.trim());
    formData.append('endereco', endereco.trim());
    formData.append('cep', cep.trim());
    formData.append('nomeRepresentante', nomeRepresentante.trim());
    formData.append('cpfRepresentante', cpfRepresentante.trim());

    console.log("Redirecionando para /app_instituicao...");
    router.push("/app_instituicao"); //Direciona para a página do perfil pronto

    try{
      const response = await fetch('/api/instituicao/criar_conta', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message || "Perfil da instituição salvo com sucesso!");
        console.log("Resposta do backend:", data);
        router.push('/app_instituicao'); //Redireciona com sucesso
      } else{
        const errorData = await response.json();
        alert(errorData.error || "Erro ao salvar o perfil da instituição.");
        console.error("Erro ao salvar o perfil:", errorData);
      }
    } catch (error) {
      alert("Erro de conexão com o servidor!");
      console.error("Erro de conexão", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Perfil da Instituição</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="fotoPerfil" className={styles.labPerfil}>Foto do Perfil:</label>
        <input type="file" id="fotoPerfil" accept="image/*" onChange={handleFotoPerfilChange} />

        <label className={styles.labelPadrao} htmlFor="nomeCompleto">Nome Completo:</label>
        <input className={styles.inputPadrao} type="text" id="nomeCompleto" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />

        <label className={styles.labelPadrao} htmlFor="email">Email:</label>
        <input className={styles.inputPadrao} type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className={styles.labelPadrao} htmlFor="senha">Senha:</label>
        <input className={styles.inputPadrao} type="text" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

        <label className={styles.labelPadrao} htmlFor="cnpj">CNPJ:</label>
        <input className={styles.inputPadrao} type="text" id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

        <label className={styles.labelPadrao} htmlFor="telefone">Telefone:</label>
        <input className={styles.inputPadrao} type="tel" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

        <label className={styles.labelPadrao} htmlFor="endereco">Endereço:</label>
        <input className={styles.inputPadrao} type="text" id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} />

        <label className={styles.labelPadrao} htmlFor="cep">CEP:</label>
        <input className={styles.inputPadrao} type="text" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} />

        <label className={styles.labelPadrao} htmlFor="nomeRepresentante">Nome do Representante Legal:</label>
        <input className={styles.inputPadrao} type="text" id="nomeRepresentante" value={nomeRepresentante} onChange={(e) => setNomeRepresentante(e.target.value)} />

        <label className={styles.labelPadrao} htmlFor="cpfRepresentante">CPF do Representante Legal:</label>
        <input className={styles.inputPadrao} type="text" id="cpfRepresentante" value={cpfRepresentante} onChange={(e) => setCpfRepresentante(e.target.value)} />

        <button className={styles.salvarPerfil} type="button" onClick={handleSalvarPerfil}>Salvar Perfil</button>
      </form>
    </div>
  );
}