'use client';

import { useRouter } from "next/navigation";
import { useState, ChangeEvent, useRef } from 'react';
import Image from "next/image";

// Importando componentes do Shadcn UI (sem o Label)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export default function CriarContaInstituicao() {
  // --- Lógica do componente (sem alterações) ---
  const [fotoPerfil, setFotoPerfil] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [nomeRepresentante, setNomeRepresentante] = useState('');
  const [cpfRepresentante, setCpfRepresentante] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const camposVazios = () => {
    if (
      !fotoPerfil || !nomeCompleto.trim() || !email.trim() || !senha.trim() ||
      !cnpj.trim() || !telefone.trim() || !endereco.trim() || !cep.trim() ||
      !nomeRepresentante.trim() || !cpfRepresentante.trim()
    ) {
      alert("Preencha todos os campos antes de continuar!");
      return false;
    }
    return true;
  };

  const handleFotoPerfilChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setFotoPerfil(file);
      setFotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSalvarPerfil = async () => {
    if (!camposVazios()) return;

    const formData = new FormData();
    formData.append('fotoPerfil', fotoPerfil!);
    formData.append('nomeCompleto', nomeCompleto.trim());
    formData.append('email', email.trim());
    formData.append('senha', senha.trim());
    formData.append('cnpj', cnpj.trim());
    formData.append('telefone', telefone.trim());
    formData.append('endereco', endereco.trim());
    formData.append('cep', cep.trim());
    formData.append('nomeRepresentante', nomeRepresentante.trim());
    formData.append('cpfRepresentante', cpfRepresentante.trim());

    try {
      const response = await fetch('/api/instituicao/criar_conta', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data?.error || "Erro ao salvar o perfil da instituição.");
        return;
      }

      alert(data.message || "Perfil da instituição salvo com sucesso!");
      router.push('/instituicao');
    } catch (error: any) {
      alert("Erro de conexão com o servidor!");
    }
  };
  
  // --- JSX Refatorado com Tailwind e Shadcn ---
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-3xl shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Criar Conta de Instituição
          </CardTitle>
          <CardDescription className="pt-2">
            Preencha os dados abaixo para registrar sua instituição na plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 sm:p-8">
          <div className="space-y-8">

            {/* Seção de Upload de Foto */}
            <div className="flex flex-col items-center gap-4 border-b pb-8">
              <div className="relative w-32 h-32 rounded-full bg-slate-200 flex items-center justify-center">
                {fotoPreview ? (
                  <Image
                    src={fotoPreview}
                    alt="Pré-visualização do perfil"
                    fill
                    className="rounded-full object-cover"
                    sizes="128px"
                  />
                ) : (
                   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                )}
              </div>
              <input 
                type="file" 
                id="fotoPerfil" 
                accept="image/*" 
                onChange={handleFotoPerfilChange} 
                className="hidden"
                ref={fileInputRef}
              />
              <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                Selecionar Foto do Perfil
              </Button>
            </div>

            {/* Grid de Campos do Formulário */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="space-y-2">
                <label htmlFor="nomeCompleto" className="text-sm font-medium leading-none">Nome Completo da Instituição</label>
                <Input id="nomeCompleto" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} placeholder="Ex: Universidade Luterana do Brasil"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="cnpj" className="text-sm font-medium leading-none">CNPJ</label>
                <Input id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} placeholder="00.000.000/0000-00"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none">Email de Contato</label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="contato@instituicao.com"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="senha" className="text-sm font-medium leading-none">Senha de Acesso</label>
                <Input id="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="********"/>
              </div>
               <div className="space-y-2">
                <label htmlFor="telefone" className="text-sm font-medium leading-none">Telefone</label>
                <Input id="telefone" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(00) 00000-0000"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="endereco" className="text-sm font-medium leading-none">Endereço</label>
                <Input id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Av. Exemplo, 123"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="cep" className="text-sm font-medium leading-none">CEP</label>
                <Input id="cep" value={cep} onChange={(e) => setCep(e.target.value)} placeholder="00000-000"/>
              </div>
              <div className="space-y-2 md:col-span-2">
                 <hr className="my-4"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="nomeRepresentante" className="text-sm font-medium leading-none">Nome do Representante Legal</label>
                <Input id="nomeRepresentante" value={nomeRepresentante} onChange={(e) => setNomeRepresentante(e.target.value)} placeholder="Nome completo do responsável"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="cpfRepresentante" className="text-sm font-medium leading-none">CPF do Representante Legal</label>
                <Input id="cpfRepresentante" value={cpfRepresentante} onChange={(e) => setCpfRepresentante(e.target.value)} placeholder="000.000.000-00"/>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full text-lg" size="lg" onClick={handleSalvarPerfil}>
            Registrar Instituição
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}