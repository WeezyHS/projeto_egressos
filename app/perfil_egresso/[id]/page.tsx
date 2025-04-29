import { notFound } from 'next/navigation';

interface TrabalhoAtualData {
  id: number;
  empresa: string;
  cidade: string;
  estado: string;
  pais: string;
  cargo: string;
  anoEntrada: number;
  egressoId: number;
}

interface PerfilEgressoData {
  id: number;
  cpf: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  pais: string;
  fotoPerfil?: string;
  linkedin?: string;
  instagram?: string;
  trabalhoAtual: TrabalhoAtualData | null; // Adicionamos o tipo para trabalhoAtual
}

// Função para buscar o perfil do egresso pela API
async function buscarPerfil(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/egresso/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data as PerfilEgressoData;
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    return null;
  }
}

// Aqui o tipo muda: { params }: { params: Promise<{ id: string }> }
export default async function PerfilEgressoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;  // <- agora params precisa ser await
  const perfil = await buscarPerfil(id);

  if (!perfil) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Perfil do Egresso</h1>
      <div className="space-y-4">
        <p><strong>CPF:</strong> {perfil.cpf}</p>
        <p><strong>Email:</strong> {perfil.email}</p>
        <p><strong>Telefone:</strong> {perfil.telefone}</p>
        <p><strong>Cidade:</strong> {perfil.cidade}</p>
        <p><strong>Estado:</strong> {perfil.estado}</p>
        <p><strong>País:</strong> {perfil.pais}</p>
        {perfil.trabalhoAtual ? (
          <>
            <p><strong>Cargo Atual:</strong> {perfil.trabalhoAtual.cargo}</p>
            <p><strong>Empresa Atual:</strong> {perfil.trabalhoAtual.empresa}</p>
          </>
        ) : (
          <>
            <p><strong>Cargo Atual:</strong> Não informado</p>
            <p><strong>Empresa Atual:</strong> Não informado</p>
          </>
        )}
        {perfil.linkedin && <p><strong>LinkedIn:</strong> {perfil.linkedin}</p>}
        {perfil.instagram && <p><strong>Instagram:</strong> {perfil.instagram}</p>}
      </div>
    </div>
  );
}