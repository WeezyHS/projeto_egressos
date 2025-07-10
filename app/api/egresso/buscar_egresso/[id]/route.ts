// app/api/egresso/buscar_egresso/[id]/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

// Não precisamos mais da interface de contexto com esta abordagem
export async function GET(request: NextRequest) {
  const prisma = new PrismaClient();
  
  try {
    // --- ABORDAGEM FINAL E ROBUSTA PARA OBTER O ID ---
    // Extraímos o ID diretamente do URL da requisição.
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const idString = pathSegments[pathSegments.length - 1]; // O ID é o último segmento do caminho
    const egressoId = Number(idString);
    // --- FIM DA ALTERAÇÃO ---

    if (isNaN(egressoId)) {
      return NextResponse.json({ error: "O ID do egresso fornecido é inválido." }, { status: 400 });
    }

    // A lógica de busca, que já está funcionando perfeitamente, permanece a mesma.
    const egressoComPessoa = await prisma.egresso.findUnique({
      where: { id: egressoId },
      include: {
        pessoa: true,
        TrabalhoAtual: {
            orderBy: { anoEntrada: 'desc' },
            take: 1
        }
      }
    });

    if (!egressoComPessoa || !egressoComPessoa.pessoa) {
      return NextResponse.json({ error: "Egresso ou dados de pessoa associados não encontrados." }, { status: 404 });
    }

    // Monta o objeto de resposta
    const dadosParaEdicao = {
      nome: egressoComPessoa.pessoa.nome,
      email: egressoComPessoa.pessoa.email,
      telefone: egressoComPessoa.telefone,
      linkedin: egressoComPessoa.linkedin,
      instagram: egressoComPessoa.instagram,
      fotoPerfil: egressoComPessoa.fotoPerfil,
      cidade: egressoComPessoa.cidade,
      estado: egressoComPessoa.estado,
      pais: egressoComPessoa.pais,
      trabalhoAtual: egressoComPessoa.TrabalhoAtual.length > 0 ? egressoComPessoa.TrabalhoAtual[0] : null
    };

    return NextResponse.json(dadosParaEdicao);

  } catch (error) {
    console.error("Erro na API GET /api/egresso/buscar_egresso/[id]:", error);
    return NextResponse.json({ error: "Falha ao buscar os dados do perfil no servidor." }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
