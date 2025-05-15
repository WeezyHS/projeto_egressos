// app/api/instituicao/login/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
  console.log('Requisição POST recebida em /api/instituicao/login');
  const prisma = new PrismaClient();

  try {
    const { email, senha } = await request.json();

    console.log('Dados de login recebidos:', { email, senha });

    if (!email || !senha) {
      await prisma.$disconnect();
      return NextResponse.json({ error: 'Email e senha são obrigatórios.' }, { status: 400 });
    }

    const instituicao = await prisma.instituicao.findUnique({ //Busca a instituição pelo email
      where: { email },
    });

    if (!instituicao) {
      await prisma.$disconnect();
      return NextResponse.json({ error: 'Conta inexistente!' }, { status: 401 });
    }

    const senhaCorreta = await bcrypt.compare(senha, instituicao.senha || ''); //Verifica se a senha informada bate com a senha da instituição encontrada
    if (!senhaCorreta) {
      await prisma.$disconnect();
      return NextResponse.json({ error: 'Senha incorreta!' }, { status: 401 });
    }

    const todasInstituicoes = await prisma.instituicao.findMany({ //Verifica se mais de uma instituição está usando a mesma senha
      where: {
        NOT: { id: instituicao.id }, //exclui a própria
      },
    });

    let senhaDuplicada = false;
    for (const outra of todasInstituicoes) {
      if (outra.senha && await bcrypt.compare(senha, outra.senha)) {
        senhaDuplicada = true;
        break;
      }
    }

    await prisma.$disconnect();

    if (senhaDuplicada) {
      return NextResponse.json({ error: 'Essa senha já está sendo usada por outra instituição. Use uma senha única.' }, { status: 409 });
    }

    return NextResponse.json(instituicao, { status: 200 });

  } catch (error: any) {
    console.error('Erro ao fazer login da instituição:', error);
    await prisma.$disconnect();
    return NextResponse.json({ error: 'Erro ao fazer login da instituição.' }, { status: 500 });
  }
}
