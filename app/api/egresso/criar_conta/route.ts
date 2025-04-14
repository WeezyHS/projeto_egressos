// app/api/egresso/criar_conta/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import bcrypt from 'bcrypt';
import { NextRequest } from 'next/server';

import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  }
}

export async function POST(request: NextRequest) {
  console.log('Requisição POST recebida em /api/egresso/criar_conta');
  try {
    const formData = await request.formData();
    const cpf = formData.get('cpf') as string | null;
    const email = formData.get('email') as string | null;
    const telefone = formData.get('telefone') as string | null;
    const senha = formData.get('senha') as string | null;
    const cidade = formData.get('cidade') as string | null;
    const estado = formData.get('estado') as string | null;
    const pais = formData.get('pais') as string | null;
    const linkedin = formData.get('linkedin') as string | null;
    const instagram = formData.get('instagram') as string | null;
    // const fotoPerfil = formData.get('fotoPerfil'); // Se você não estiver lidando com upload agora

    console.log('Dados recebidos do formulário:', { cpf, email, telefone, senha, cidade, estado, pais, linkedin, instagram });

    if (!cpf || !senha || !telefone || !email || !cidade || !estado || !pais) {
      return NextResponse.json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' }, { status: 400 });
    }

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
        linkedin,
        instagram,
        // fotoPerfil: null, // Se você não estiver lidando com upload agora
      },
    });

    await prisma.$disconnect();

    return NextResponse.json({ message: 'Egresso criado com sucesso!', egresso: novoEgresso }, { status: 201 });

  } catch (error) {
    console.error('Erro ao criar egresso:', error);
    return NextResponse.json({ error: 'Erro ao criar egresso.' }, { status: 500 });
  }
}

// O Next.js processa o body por padrão agora, então a configuração bodyParser: false não é estritamente necessária para este caso simples.