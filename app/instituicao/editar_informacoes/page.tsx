'use client';

//app/instituicao/editar_informacoes/page.tsx
import { useState, ChangeEvent, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function EditarPerfilInstituicao() {
  const [id, setId] = useState<number | null>(null); //Estado para guardar o ID
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [nomeRepresentante, setNomeRepresentante] = useState('');
  const [senha, setSenha] = useState(''); //Apenas para nova senha

  const [foto, setFoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  //useEffect para buscar os dados da instituição ao carregar a página
  useEffect(() => {
    const instituicaoId = localStorage.getItem('instituicaoId');
    if (!instituicaoId) {
      alert("Não foi possível identificar a instituição. Faça login novamente.");
      setLoading(false);
      return;
    }

    const fetchDadosInstituicao = async () => {
      try {
        const response = await fetch(`/api/instituicao/buscar_instituicao/${instituicaoId}`);
        if (response.ok) {
          const data = await response.json();
          setId(data.id);
          setNome(data.nomeCompleto || '');
          setTelefone(data.telefone || '');
          setEndereco(data.endereco || '');
          setCep(data.cep || '');
          setNomeRepresentante(data.nomeRepresentante || '');
          setPreview(data.fotoPerfil || null); // Mostra a foto atual
        } else {
          console.error("Erro ao buscar dados da instituição");
        }
      } catch (error) {
        console.error("Erro de conexão ao buscar dados da instituição:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDadosInstituicao();
  }, []); // Roda apenas uma vez quando o componente monta

  const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFoto(file);
      setPreview(URL.createObjectURL(file));
      setSelectedFileName(file.name);
    }
  };

  const handleSalvar = async () => {
    if (!id) {
      alert("ID da instituição não está definido. Não é possível salvar.");
      return;
    }

    const formData = new FormData();
    // Envia apenas os dados que foram preenchidos
    if (nome) formData.append('nome', nome);
    if (telefone) formData.append('telefone', telefone);
    if (endereco) formData.append('endereco', endereco);
    if (cep) formData.append('cep', cep);
    if (nomeRepresentante) formData.append('nomeRepresentante', nomeRepresentante);
    if (senha) formData.append('senha', senha);
    if (foto) formData.append('foto', foto);

    try {
      // A API de edição agora é dinâmica, usando o ID
      const response = await fetch(`/api/instituicao/editar_instituicao/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        alert('Perfil atualizado com sucesso!');
      } else {
        const errorData = await response.json().catch(() => null);
        alert(`Falha ao salvar: ${errorData?.error || 'Erro desconhecido'}`);
      }
    } catch (error) {
      console.error('Erro de conexão ao salvar perfil:', error);
      alert('Erro de conexão. Não foi possível salvar as alterações.');
    }
  };

  const handleBotaoFotoClick = () => {
    fileInputRef.current?.click();
  };

  if (loading) return <p>Carregando perfil...</p>;

  return (
    <div className="flex justify-center p-6 bg-gray-100">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6 p-6">
          <h2 className="text-xl font-bold text-center">Editar Perfil da Instituição</h2>

          <div className="flex flex-col items-center gap-2">
            {preview ? (<Image src={preview} alt="Foto de perfil" width={120} height={120} className="rounded-full object-cover"/>) : (<div className="w-[120px] h-[120px] rounded-full bg-gray-200 flex items-center justify-center text-gray-500">Sem imagem</div>)}

            <Input type="file" accept="image/*" onChange={handleFotoChange} ref={fileInputRef} className="hidden"/>
            <Button variant="outline" onClick={handleBotaoFotoClick}>Alterar Foto</Button>
              {selectedFileName && (<p className="text-sm text-gray-500 mt-2">Ficheiro: {selectedFileName}</p>)}
          </div>
          {/* Inputs agora ligados a seus próprios estados */}
          <div>
            <label className="block mb-1 font-medium">Nome da Instituição</label>
            <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o nome da instituição"/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Telefone</label>
            <Input value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Digite o telefone"/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Endereço</label>
            <Input value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Digite o endereço"/>
          </div>
          <div>
            <label className="block mb-1 font-medium">CEP</label>
            <Input value={cep} onChange={(e) => setCep(e.target.value)} placeholder="Digite o CEP"/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Nome do representante</label>
            <Input value={nomeRepresentante} onChange={(e) => setNomeRepresentante(e.target.value)} placeholder="Digite o nome do representante"/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Nova Senha</label>
            <Input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite a nova senha caso queira alterar"/>
          </div>
          <Button className="w-full" onClick={handleSalvar}>Salvar Alterações</Button>
        </CardContent>
      </Card>
    </div>
  );
}