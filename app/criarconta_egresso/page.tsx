'use client';

//app/criarconta_egresso
import { useState, useRef, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
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

export default function CriarContaEgresso() {
  const [fotoPerfil, setFotoPerfil] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [redesSociais, setRedesSociais] = useState({ linkedin: '', instagram: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFotoPerfil(file);
      setFotoPreview(URL.createObjectURL(file));
    }
  };

  const validacaoCPF = (cpf: string) => {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || /^[0-9]{11}$/.test(cpf) === false || new Set(cpf).size === 1) return false;
    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;
    return true;
  };

  const gerarCodigo = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const camposVazios = () => {
    if (!fotoPerfil || !nome.trim() || !cpf.trim() || !senha.trim() || !telefone.trim() || !cidade.trim() || !estado.trim() || !pais.trim()) {
      alert("Preencha todos os campos obrigatórios!");
      return false;
    }
    if (!validacaoCPF(cpf)) {
      alert("CPF inválido!");
      return false;
    }
    if (senha.length < 8) {
      alert("A senha deve ter no mínimo 8 caracteres!");
      return false;
    }
    return true;
  };

  const handleProximo = async () => {
    if (!camposVazios()) return;

    try {
      const formData = new FormData();
      formData.append('fotoPerfil', fotoPerfil as Blob);
      formData.append('nome', nome);
      formData.append('cpf', cpf);
      formData.append('senha', senha);
      formData.append('telefone', telefone);
      formData.append('email', email);
      formData.append('cidade', cidade);
      formData.append('estado', estado);
      formData.append('pais', pais);
      formData.append('linkedin', redesSociais.linkedin);
      formData.append('instagram', redesSociais.instagram);

      const response = await fetch("/api/egresso/criar_conta", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Erro ao criar conta!");
        return;
      }

      const successData = await response.json();
      console.log("Egresso criado:", successData.egresso);

      const novoEgressoId = successData.egresso.id;
      const codigo = gerarCodigo();

      const templateParams = {
        to_email: email,
        codigo_acesso: codigo,
      };
      await emailjs.send("service_rqwpj7q", "template_12nvjhg", templateParams, "Ygc6WQijXU3rWrMEV");
      router.push(`/criarconta2_egresso?id=${novoEgressoId}`);
    } catch (error) {
      console.error("Erro no processo de criação de conta:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-4xl shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">Criar Conta de Aluno/Egresso</CardTitle>
          <CardDescription className="pt-2">Primeiro passo: preencha seus dados pessoais e de acesso.</CardDescription>
        </CardHeader>
        <CardContent className="p-6 sm:p-8">
          <div className="space-y-8">
            {/* Seção de Upload de Foto */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-32 h-32 rounded-full bg-slate-200 flex items-center justify-center border-2 border-dashed border-slate-300">
                {fotoPreview ? (<Image src={fotoPreview} alt="Pré-visualização do perfil" fill className="rounded-full object-cover" sizes="128px"/>) : (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>)}
              </div>
              <input type="file" id="fotoPerfil" accept="image/*" onChange={handleFotoChange} className="hidden" ref={fileInputRef}/>
              <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>{fotoPerfil ? 'Alterar Foto' : 'Selecionar Foto de Perfil'}</Button>
            </div>
            {/* Linha de separação, substitui o <Separator /> */}
            <hr className="my-8 border-slate-200" />
            {/* Grid de Campos do Formulário */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              {/* --- DADOS PESSOAIS --- */}
              <div className="space-y-2 lg:col-span-3">
                <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">Dados Pessoais</h3>
              </div>
              <div className="space-y-2">
                <label htmlFor="nome" className="text-sm font-medium">Nome Completo</label>
                <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome completo"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="cpf" className="text-sm font-medium">CPF</label>
                <Input id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="000.000.000-00"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="telefone" className="text-sm font-medium">Telefone</label>
                <Input id="telefone" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(00) 00000-0000"/>
              </div>
              {/* --- DADOS DE ACESSO --- */}
              <div className="space-y-2 lg:col-span-3 mt-4">
                <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">Dados de Acesso</h3>
              </div>
               <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu.email@exemplo.com"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="senha" className="text-sm font-medium">Senha (mín. 8 caracteres)</label>
                <Input id="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="********"/>
              </div>
              {/* --- LOCALIZAÇÃO --- */}
              <div className="space-y-2 lg:col-span-3 mt-4">
                <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">Localização Atual</h3>
              </div>
               <div className="space-y-2">
                <label htmlFor="cidade" className="text-sm font-medium">Cidade</label>
                <Input id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="Sua cidade"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="estado" className="text-sm font-medium">Estado</label>
                <Input id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} placeholder="Seu estado"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="pais" className="text-sm font-medium">País</label>
                <Input id="pais" value={pais} onChange={(e) => setPais(e.target.value)} placeholder="Seu país"/>
              </div>
              {/* --- REDES SOCIAIS (Opcional) --- */}
              <div className="space-y-2 lg:col-span-3 mt-4">
                <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">Redes Sociais (Opcional)</h3>
              </div>
              <div className="space-y-2">
                <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn</label>
                <Input id="linkedin" value={redesSociais.linkedin} onChange={(e) => setRedesSociais({ ...redesSociais, linkedin: e.target.value })} placeholder="URL do seu perfil"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="instagram" className="text-sm font-medium">Instagram</label>
                <Input id="instagram" value={redesSociais.instagram} onChange={(e) => setRedesSociais({ ...redesSociais, instagram: e.target.value })} placeholder="Seu @usuario"/>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full text-lg" size="lg" onClick={handleProximo}>Próximo Passo</Button>
        </CardFooter>
      </Card>
    </div>
  );
}