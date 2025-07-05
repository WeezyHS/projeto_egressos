'use client';

//app/criarconta2_egresso
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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

export default function CriarContaEgresso2() {
  // --- Lógica do componente (sem alterações) ---
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cidadeEmpresa, setCidadeEmpresa] = useState('');
  const [estadoEmpresa, setEstadoEmpresa] = useState('');
  const [paisEmpresa, setPaisEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [anoEntrada, setAnoEntrada] = useState('');
  const [visivel, setVisivel] = useState(true);
  const [egressoId, setEgressoId] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setEgressoId(parseInt(id, 10));
    } else {
      alert("Erro: ID do egresso não encontrado. Redirecionando para a primeira etapa.");
      router.push("/criarconta_egresso");
    }
  }, [searchParams, router]);

  const handleFinalizar = async () => {
    if (!nomeEmpresa || !cidadeEmpresa || !estadoEmpresa || !paisEmpresa || !cargo || !anoEntrada || !egressoId) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    try {
      const response = await fetch('/api/egresso/criar_conta2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          id: egressoId.toString(),
          nomeEmpresa: nomeEmpresa,
          cidadeEmpresa: cidadeEmpresa,
          estadoEmpresa: estadoEmpresa,
          paisEmpresa: paisEmpresa,
          cargo: cargo,
          anoEntrada: anoEntrada,
          visivel: visivel.toString(),
        }),
      });

      if (response.ok) {
        alert('Informações profissionais salvas com sucesso! Cadastro finalizado.');
        router.push('/egresso');
      } else {
        const errorData = await response.json();
        alert(`Erro ao salvar informações profissionais: ${errorData.error || 'Erro desconhecido'}`);
      }
    } catch (error) {
      alert("Erro de conexão ao enviar dados de experiência.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">Experiência Profissional</CardTitle>
          <CardDescription className="pt-2">Último passo! Adicione sua experiência de trabalho mais recente.</CardDescription>
        </CardHeader>
        <CardContent className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="nomeEmpresa" className="text-sm font-medium">Nome da Empresa</label>
              <Input id="nomeEmpresa" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} placeholder="Onde você trabalha atualmente?"/>
            </div>
            <div className="space-y-2">
              <label htmlFor="cargo" className="text-sm font-medium">Seu Cargo/Função</label>
              <Input id="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Ex: Desenvolvedor de Software"/>
            </div>
            <div className="space-y-2">
              <label htmlFor="anoEntrada" className="text-sm font-medium">Ano de Entrada</label>
              <Input id="anoEntrada" type="number" value={anoEntrada} onChange={(e) => setAnoEntrada(e.target.value)} placeholder="Ex: 2023"/>
            </div>
            <div className="space-y-2 lg:col-span-2 mt-4">
                <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">Localização da Empresa</h3>
            </div>
            <div className="space-y-2">
              <label htmlFor="cidadeEmpresa" className="text-sm font-medium">Cidade</label>
              <Input id="cidadeEmpresa" value={cidadeEmpresa} onChange={(e) => setCidadeEmpresa(e.target.value)} placeholder="Cidade da empresa"/>
            </div>
            <div className="space-y-2">
              <label htmlFor="estadoEmpresa" className="text-sm font-medium">Estado</label>
              <Input id="estadoEmpresa" value={estadoEmpresa} onChange={(e) => setEstadoEmpresa(e.target.value)} placeholder="Estado da empresa"/>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="paisEmpresa" className="text-sm font-medium">País</label>
              <Input id="paisEmpresa" value={paisEmpresa} onChange={(e) => setPaisEmpresa(e.target.value)} placeholder="País da empresa"/>
            </div>
            <div className="md:col-span-2 pt-4">
              <hr className="border-slate-200" />
            </div>
            <div className="flex items-center space-x-2 md:col-span-2 pt-4">
              <input id="visivel" type="checkbox" checked={visivel} onChange={() => setVisivel(!visivel)} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
              <label htmlFor="visivel" className="text-sm font-medium leading-none">Deixar minhas informações visíveis para outros usuários no sistema.</label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full text-lg" size="lg" onClick={handleFinalizar}>Finalizar Cadastro</Button>
        </CardFooter>
      </Card>
    </div>
  );
}