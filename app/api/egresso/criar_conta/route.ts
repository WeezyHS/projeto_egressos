// app/api/registrar/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { cpf, email, telefone, senha, cidade, estado, pais, fotoPerfil, linkedin, instagram } = await request.json();

    const senhaHash = await bcrypt.hash(senha, 10);
    const prisma = new PrismaClient();

    const novoEgresso = await prisma.egresso.create({
      data: {
        cpf,
        senha: senhaHash,
        telefone,
        email,
        cidade,
        estado,
        pais,
        fotoPerfil,
        linkedin,
        instagram,
      },
    });

    await prisma.$disconnect();

    return NextResponse.json({ message: 'Egresso criado com sucesso!', egresso: novoEgresso }, { status: 201 });

  } catch (error) {
    console.error('Erro ao criar egresso:', error);
    return NextResponse.json({ error: 'Erro ao criar egresso.' }, { status: 500 });
  }
}