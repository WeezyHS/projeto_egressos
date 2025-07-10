'use client';

import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function CriarContaEgressoFinal() {
    // --- ESTADOS DO FORMULÁRIO ---
    const [fotoPerfil, setFotoPerfil] = useState<File | null>(null);
    const [fotoPreview, setFotoPreview] = useState<string | null>(null);
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');
    const [redesSociais, setRedesSociais] = useState({ linkedin: '', instagram: '' });
    
    // --- ESTADOS DE CONTROLO ---
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
    const [cadastroToken, setCadastroToken] = useState<string | null>(null);
    const [erro, setErro] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // --- PASSO 1: LER O TOKEN E O NOME QUANDO A PÁGINA CARREGA ---
    useEffect(() => {
        const token = localStorage.getItem('cadastro_token');
        const nome = localStorage.getItem('cadastro_nome');

        if (!token) {
            // Se não houver token, o usuário não passou pela verificação.
            // Redireciona para a página de ativação para forçar o fluxo correto.
            alert("Sessão inválida. Por favor, valide seu código de acesso primeiro.");
            router.push('/ativar-conta');
        } else {
            setCadastroToken(token);
            setNomeUsuario(nome);
        }
    }, [router]);

    const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFotoPerfil(file);
            setFotoPreview(URL.createObjectURL(file));
        }
    };

    const handleSalvarConta = async () => {
      // As suas validações iniciais estão perfeitas
      if (senha.length < 8) {
          setErro("A senha deve ter no mínimo 8 caracteres.");
          return;
      }
      if (!fotoPerfil || !telefone || !email || !cidade || !estado || !pais) {
          setErro("Por favor, preencha todos os campos obrigatórios.");
          return;
      }
      if (!cadastroToken) {
          setErro("Erro de sessão. Por favor, reinicie o processo.");
          return;
      }
  
      setIsLoading(true);
      setErro(null);
  
      try {
          const formData = new FormData();
          formData.append('cadastro_token', cadastroToken);
          formData.append('senha', senha);
          formData.append('telefone', telefone);
          formData.append('email', email);
          formData.append('cidade', cidade);
          formData.append('estado', estado);
          formData.append('pais', pais);
          formData.append('linkedin', redesSociais.linkedin);
          formData.append('instagram', redesSociais.instagram);
          formData.append('fotoPerfil', fotoPerfil as Blob);
  
          const response = await fetch("/api/egresso/criar_conta", {
              method: "POST",
              body: formData,
          });
  
          // --- CORREÇÃO IMPORTANTE AQUI ---
          // Lê o corpo da resposta JSON apenas UMA VEZ.
          const responseData = await response.json();
  
          if (!response.ok) {
              // Se a resposta não for de sucesso, lança um erro com a mensagem da API
              throw new Error(responseData.error || "Erro ao criar conta!");
          }
  
          // --- CORREÇÃO PRINCIPAL ---
          // Acede diretamente a 'responseData.egressoId'
          console.log("Egresso criado com sucesso! ID:", responseData.egressoId);
  
          const novoEgressoId = responseData.egressoId;
  
          // Verifica se o ID foi recebido antes de continuar
          if (!novoEgressoId) {
              throw new Error("Não foi possível obter o ID do novo egresso da API.");
          }
  
          // Limpa o token do localStorage após o uso bem-sucedido
          localStorage.removeItem('cadastro_token');
          localStorage.removeItem('cadastro_nome'); // Se ainda existir
  
          alert("Conta criada com sucesso! Você será redirecionado para a 2° etapa.");
          
          // --- NAVEGAÇÃO FINAL ---
          router.push(`/criarconta2_egresso?id=${novoEgressoId}`);
  
      } catch (error: any) {
          setErro(error.message);
      } finally {
          setIsLoading(false);
      }
  };

  // Não renderiza o formulário até que o token seja verificado
  if (!cadastroToken) {
      return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

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
          <Button className="w-full text-lg" size="lg" onClick={handleSalvarConta}>Próximo Passo</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
