// app/api/instituicao/login/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
  console.log('Requisição POST recebida em /api/instituicao/login');
  try {
    const { email, senha } = await request.json();

    console.log('Dados de login recebidos:', { email, senha });

    if (!email || !senha) {
      return NextResponse.json({ error: 'Email e senha são obrigatórios.' }, { status: 400 });
    }

    const prisma = new PrismaClient();

    const instituicao = await prisma.instituicao.findUnique({
      where: {
        email: email,
      },
    });

    await prisma.$disconnect();

    if (!instituicao) {
      return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
    }

    const senhaMatch = await bcrypt.compare(senha, instituicao.senha || "");

    if (!senhaMatch) {
      return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
    }

    // Se as credenciais são válidas, você pode retornar informações sobre a instituição
    // e possivelmente um token de autenticação (para manter a sessão).
    // Por enquanto, vamos apenas retornar uma mensagem de sucesso e o ID da instituição.
    return NextResponse.json({ message: 'Login bem-sucedido!', instituicaoId: instituicao.id }, { status: 200 });

  } catch (error: any) {
    console.error('Erro ao fazer login da instituição:', error);
    return NextResponse.json({ error: 'Erro ao fazer login da instituição.' }, { status: 500 });
  }
}