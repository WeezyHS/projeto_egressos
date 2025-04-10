'use client';

import { useRouter } from "next/navigation";
import styles from "./perfil_instituicao.module.css";
import { useState } from 'react';
import { read } from "fs";

export default function PerfilInstituicao() {
  const [fotoPerfil, setFotoPerfil] = useState<File | null>(null);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [nomeRepresentante, setNomeRepresentante] = useState('');
  const [cpfRepresentante, setCpfRepresentante] = useState('');

  const router = useRouter();

  const camposVazios = () =>{
    if (!fotoPerfil || !nomeCompleto.trim() || !cnpj.trim() || !telefone.trim() || !endereco.trim() || !cep.trim() || !nomeRepresentante.trim() || !cpfRepresentante.trim()){
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

  const handleSalvarPerfil = () => {
    if (!camposVazios()) return;

    if (!fotoPerfil){
      alert("Escolha uma foto de perfil!");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {

      console.log("Imagem convertida com sucesso!");

      const dadosPerfil = {
        fotoPerfil: reader.result,
        nomeCompleto: nomeCompleto.trim(),
        cnpj: cnpj.trim(),
        telefone: telefone.trim(),
        endereco: endereco.trim(),
        cep: cep.trim(),
        nomeRepresentante: nomeRepresentante.trim(),
        cpfRepresentante: cpfRepresentante.trim()
      };
      console.log("Salvando no localStorage:", dadosPerfil);
      localStorage.setItem("perfilInstituicao", JSON.stringify(dadosPerfil));

      console.log("Redirecionando para /app_instituicao...");
      router.push("/app_instituicao"); //Direciona para a página do perfil pronto
    };
    reader.onerror = () => {
      console.log("Erro ao ler a imagem!");
    };
    reader.readAsDataURL(fotoPerfil);
  };

  return (
    <div className={styles.container}>
      <h1>Perfil da Instituição</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="fotoPerfil" className={styles.labPerfil}>Foto do Perfil:</label>
        <input type="file" id="fotoPerfil" accept="image/*" onChange={handleFotoPerfilChange} />

        <label className={styles.labelPadrao} htmlFor="nomeCompleto">Nome Completo:</label>
        <input className={styles.inputPadrao} type="text" id="nomeCompleto" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />

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