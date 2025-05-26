// app/api/egresso/perfil_egresso/route.ts
import { PrismaClient } from '@prisma/client'; // Ou do seu @/app/generated/prisma
import bcrypt from 'bcrypt'; // Importe o bcrypt
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { cpf, senha } = body;

    if (!cpf || !senha) { // Adicione validação para os dados de entrada
        return NextResponse.json({ erro: 'CPF e senha são obrigatórios na requisição' }, { status: 400 });
    }

    const egresso = await prisma.egresso.findUnique({ // Use findUnique se CPF for único
      where: { cpf },
    });

    if (!egresso) { // Usuário com este CPF não encontrado
      return NextResponse.json({ erro: 'Credenciais inválidas (CPF não encontrado)' }, { status: 401 });
    }

    const senhaCorreta = await bcrypt.compare(senha, egresso.senha); // Agora compare a senha fornecida com a senha hasheada do banco

    if (!senhaCorreta) {
      return NextResponse.json({ erro: 'Credenciais inválidas (senha incorreta)' }, { status: 401 });
    }

    const perfilDoEgresso = { // Se chegou aqui, CPF existe e senha está correta
        nome: egresso.nome,
        fotoPerfil: egresso.fotoPerfil,
    };

    console.log("API Perfil: Enviando dados do egresso:", perfilDoEgresso);
    return NextResponse.json(perfilDoEgresso); // Retorna o objeto com nome e fotoPerfil

  } catch (error) {
    console.error('Erro ao buscar perfil do egresso:', error);
    return NextResponse.json({ erro: 'Erro interno ao autenticar egresso' }, { status: 500 });
  } finally {
  }
}