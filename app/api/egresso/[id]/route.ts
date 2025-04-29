import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  // Desestruture o id diretamente do objeto params, aguardando a resolução da Promise
  const { id } = await Promise.resolve(params);

  try {
    const egresso = await prisma.egresso.findUnique({
      where: { id: Number(id) },
      include: {
        trabalhoAtual: true,
      },
    });

    if (!egresso) {
      return NextResponse.json({ error: 'Egresso não encontrado' }, { status: 404 });
    }

    return NextResponse.json(egresso);
  } catch (error) {
    console.error('Erro ao buscar egresso com trabalho atual:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}