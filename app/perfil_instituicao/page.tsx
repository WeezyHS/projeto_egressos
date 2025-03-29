'use client';

import { useState } from 'react';

export default function PerfilInstituicao() {
  const [fotoPerfil, setFotoPerfil] = useState<File | null>(null);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [nomeRepresentante, setNomeRepresentante] = useState('');
  const [cpfRepresentante, setCpfRepresentante] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
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
    if (event.target.files && event.target.files[0]) {
      setFotoPerfil(event.target.files[0]);
    }
  };

  return (
    <div>
      <h1>Perfil da Instituição</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fotoPerfil" className="fotoPerfil">Foto do Perfil:</label>
        <input type="file" id="fotoPerfil" accept="image/*" onChange={handleFotoPerfilChange} />

        <label htmlFor="nomeCompleto">Nome Completo:</label>
        <input type="text" id="nomeCompleto" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />

        <label htmlFor="cnpj">CNPJ:</label>
        <input type="text" id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

        <label htmlFor="endereco">Endereço:</label>
        <input type="text" id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} />

        <label htmlFor="cep">CEP:</label>
        <input type="text" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} />

        <label htmlFor="nomeRepresentante">Nome do Representante Legal:</label>
        <input type="text" id="nomeRepresentante" value={nomeRepresentante} onChange={(e) => setNomeRepresentante(e.target.value)} />

        <label htmlFor="cpfRepresentante">CPF do Representante Legal:</label>
        <input type="text" id="cpfRepresentante" value={cpfRepresentante} onChange={(e) => setCpfRepresentante(e.target.value)} />

        <button type="submit">Salvar Perfil</button>
      </form>
    </div>
  );
}