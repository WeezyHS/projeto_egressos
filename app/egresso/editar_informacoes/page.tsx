'use client';

import { useState, ChangeEvent, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

export default function EditarPerfilEgresso() {
  const [id, setId] = useState<number | null>(null);
  // Dados Pessoais
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [foto, setFoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  // Redes Sociais e Localização Pessoal
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [cidadePessoal, setCidadePessoal] = useState('');
  const [estadoPessoal, setEstadoPessoal] = useState('');
  const [paisPessoal, setPaisPessoal] = useState('');
  // Informações Profissionais
  const [empresa, setEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [anoEntrada, setAnoEntrada] = useState('');
  const [cidadeTrabalho, setCidadeTrabalho] = useState('');
  const [estadoTrabalho, setEstadoTrabalho] = useState('');
  const [paisTrabalho, setPaisTrabalho] = useState('');
  // Estados de UI
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  //const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const egressoId = localStorage.getItem('egressoId');
    if (!egressoId) {
      setError("Não foi possível identificar o egresso. Faça login novamente.");
      setLoading(false);
      return;
    }

    const fetchDadosEgresso = async () => {
      try {
        const response = await fetch(`/api/egresso/buscar_egresso/${egressoId}`);
        if (response.ok) {
          const data = await response.json();
          setId(data.id);
          setNome(data.nome || '');
          setEmail(data.email || '');
          setTelefone(data.telefone || '');
          setLinkedin(data.linkedin || '');
          setInstagram(data.instagram || '');
          setCidadePessoal(data.cidade || '');
          setEstadoPessoal(data.estado || '');
          setPaisPessoal(data.pais || '');
          setPreview(data.fotoPerfil || null);
          
          if (data.trabalhoAtual) {
            setEmpresa(data.trabalhoAtual.empresa || '');
            setCargo(data.trabalhoAtual.cargo || '');
            setAnoEntrada(data.trabalhoAtual.anoEntrada ? String(data.trabalhoAtual.anoEntrada) : '');
            setCidadeTrabalho(data.trabalhoAtual.cidade || '');
            setEstadoTrabalho(data.trabalhoAtual.estado || '');
            setPaisTrabalho(data.trabalhoAtual.pais || '');
          }
        } else {
          const errorData = await response.json().catch(() => null);
          setError(errorData?.error || `Erro ${response.status} ao buscar dados.`);
        }
      } catch (err) {
        setError("Erro de conexão ao buscar seus dados.");
      } finally {
        setLoading(false);
      }
    };
    fetchDadosEgresso();
  }, []);

  const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFoto(file);
      setPreview(URL.createObjectURL(file));
      setSelectedFileName(file.name);
    }
  };

  const handleBotaoFotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleSalvar = async () => {
    if (!id) {
      alert("ID do egresso não está definido. Não é possível salvar.");
      return;
    }
    setIsSaving(true);
    const formData = new FormData();
    // Adiciona todos os campos ao FormData
    formData.append('nome', nome);
    formData.append('telefone', telefone);
    if (senha) formData.append('senha', senha);
    if (foto) formData.append('foto', foto);
    formData.append('linkedin', linkedin);
    formData.append('instagram', instagram);
    // Localização pessoal
    formData.append('cidadePessoal', cidadePessoal);
    formData.append('estadoPessoal', estadoPessoal);
    formData.append('paisPessoal', paisPessoal);
    // Informações profissionais
    formData.append('empresa', empresa);
    formData.append('cargo', cargo);
    formData.append('anoEntrada', anoEntrada);
    formData.append('cidadeTrabalho', cidadeTrabalho);
    formData.append('estadoTrabalho', estadoTrabalho);
    formData.append('paisTrabalho', paisTrabalho);

    try {
      const response = await fetch(`/api/egresso/editar_egresso/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        alert('Perfil atualizado com sucesso!');
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Ocorreu um erro desconhecido.' }));
        alert(`Falha ao salvar: ${errorData.error}`);
      }
    } catch (err) {
      console.error('Erro de conexão ao salvar perfil:', err);
      alert('Erro de conexão. Não foi possível salvar as alterações.');
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen"><p>Carregando seu perfil...</p></div>;
  if (error) return <div className="flex justify-center items-center h-screen"><p className="text-red-600">{error}</p></div>;

  return (
    <div className="flex min-h-screen bg-gray-100 p-6 justify-center">
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Editar Meu Perfil</h1>
        {/* Card de Informações Pessoais e de Contato */}
        <Card>
          <CardHeader><CardTitle>Informações Pessoais</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              {preview ? (<Image src={preview} alt="Pré-visualização da foto" width={120} height={120} className="rounded-full object-cover"/>) : (<div className="w-[120px] h-[120px] rounded-full bg-gray-200 flex items-center justify-center text-gray-500">Sem imagem</div>)}
              <Input type="file" accept="image/*" onChange={handleFotoChange} ref={fileInputRef} className="hidden" />
              <Button variant="outline" onClick={handleBotaoFotoClick}>Alterar Foto</Button>
              {selectedFileName && (<p className="text-sm text-gray-500 mt-2">Arquivo: {selectedFileName}</p>)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="block mb-1 font-medium text-sm">Nome Completo</label><Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome completo"/></div>
              <div><label className="block mb-1 font-medium text-sm">Email</label><Input value={email} disabled placeholder="Seu email (não pode ser alterado)"/></div>
              <div><label className="block mb-1 font-medium text-sm">Telefone</label><Input value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(XX) XXXXX-XXXX"/></div>
              <div><label className="block mb-1 font-medium text-sm">Nova Senha</label><Input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Deixe em branco para não alterar"/></div>
            </div>
          </CardContent>
        </Card>
        {/* Card de Localização e Redes Sociais */}
        <Card>
          <CardHeader><CardTitle>Localização Pessoal e Redes Sociais</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="block mb-1 font-medium text-sm">País de Residência</label><Input value={paisPessoal} onChange={(e) => setPaisPessoal(e.target.value)} placeholder="País onde mora"/></div>
              <div><label className="block mb-1 font-medium text-sm">Estado</label><Input value={estadoPessoal} onChange={(e) => setEstadoPessoal(e.target.value)} placeholder="Estado/Província"/></div>
              <div><label className="block mb-1 font-medium text-sm">Cidade</label><Input value={cidadePessoal} onChange={(e) => setCidadePessoal(e.target.value)} placeholder="Cidade onde mora"/></div>
              <div><label className="block mb-1 font-medium text-sm">LinkedIn</label><Input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="URL do seu perfil LinkedIn"/></div>
              <div className="md:col-span-2"><label className="block mb-1 font-medium text-sm">Instagram</label><Input value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="@seuusuario"/></div>
          </CardContent>
        </Card>
        {/* Card de Informações Profissionais */}
        <Card>
          <CardHeader><CardTitle>Informações Profissionais Atuais</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block mb-1 font-medium text-sm">Empresa</label><Input value={empresa} onChange={(e) => setEmpresa(e.target.value)} placeholder="Nome da empresa atual"/></div>
            <div><label className="block mb-1 font-medium text-sm">Cargo</label><Input value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Seu cargo atual"/></div>
            <div><label className="block mb-1 font-medium text-sm">País do Trabalho</label><Input value={paisTrabalho} onChange={(e) => setPaisTrabalho(e.target.value)} placeholder="País onde trabalha"/></div>
            <div><label className="block mb-1 font-medium text-sm">Estado do Trabalho</label><Input value={estadoTrabalho} onChange={(e) => setEstadoTrabalho(e.target.value)} placeholder="Estado onde trabalha"/></div>
            <div><label className="block mb-1 font-medium text-sm">Cidade do Trabalho</label><Input value={cidadeTrabalho} onChange={(e) => setCidadeTrabalho(e.target.value)} placeholder="Cidade onde trabalha"/></div>
            <div><label className="block mb-1 font-medium text-sm">Ano de Entrada na Empresa</label><Input type="number" value={anoEntrada} onChange={(e) => setAnoEntrada(e.target.value)} placeholder="Ex: 2023"/></div>
          </CardContent>
        </Card>

        <div className="flex justify-end pt-4">
          <Button size="lg" onClick={handleSalvar} disabled={isSaving}>
            {isSaving ? 'Salvando...' : 'Salvar Todas as Alterações'}
          </Button>
        </div>
      </div>
    </div>
  );
}
