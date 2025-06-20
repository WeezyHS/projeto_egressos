import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { cpf: string } }
) {
  const { cpf } = params;

  try {
    const egresso = await prisma.egresso.findUnique({
      where: { cpf },
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
