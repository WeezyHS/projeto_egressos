// app/api/cursos/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();
  const { nome } = data;

  try {
    const curso = await prisma.curso.create({
      data: { nome },
    });
    return NextResponse.json(curso);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar curso" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // importante para evitar conexões pendentes
  }
}