// app/api/instituicao/perfil_instituicao/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, senha } = body;

    const instituicao = await prisma.instituicao.findFirst({
      where: { email, senha },
      select: {
        id: true,
        nomeCompleto: true,
        fotoPerfil: true,
        // outros campos se quiser
      },
    });

    if (!instituicao) {
      return NextResponse.json({ erro: 'Credenciais inválidas' }, { status: 401 });
    }

    return NextResponse.json(instituicao);
  } catch (error) {
    console.error('Erro no login da instituição:', error);
    return NextResponse.json({ erro: 'Erro ao autenticar' }, { status: 500 });
  }
}
