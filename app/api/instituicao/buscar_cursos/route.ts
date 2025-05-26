// app/api/instituicao/buscar_cursos/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';

export async function GET() {
  const prisma = new PrismaClient();

  try {
    const cursos = await prisma.curso.findMany(); // Busca todos os cursos cadastrados
    await prisma.$disconnect();
    return NextResponse.json(cursos);
  } catch (error: any) {
    console.error('Erro ao buscar cursos do banco:', error);
    await prisma.$disconnect();
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
