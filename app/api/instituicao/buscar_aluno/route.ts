// app/api/instituicao/buscar_aluno/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';

export async function GET() {
  const prisma = new PrismaClient();
  try {
    const alunosComMatriculasECursos = await prisma.pessoa.findMany({
      include: {
        matriculas: {
          include: {
            curso: true,
          },
        },
      },
    });
    await prisma.$disconnect();
    return NextResponse.json(alunosComMatriculasECursos);
  } catch (error: any) {
    console.error('Erro ao buscar alunos do banco:', error);
    await prisma.$disconnect();
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}