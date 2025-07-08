// app/api/egresso/autenticar_codigo/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; // Usando sua importação preferida
import { sign } from 'jsonwebtoken'; // Usaremos JWT para criar um token seguro

const normalizarCPF = (cpf: string) => cpf.replace(/\D/g, '');

export async function POST(req: Request) {
  const prisma = new PrismaClient();
  try {
    const body = await req.json();
    const { cpf, codigo } = body;

    if (!cpf || !codigo) {
      return NextResponse.json({ error: 'CPF e código são obrigatórios.' }, { status: 400 });
    }

    const cpfNormalizado = normalizarCPF(cpf);
    const codigoFormatado = String(codigo).toUpperCase().trim();

    // Busca a pessoa pelo CPF, código do convite e verifica se o convite não expirou
    const pessoa = await prisma.pessoa.findFirst({
      where: {
        cpf: cpfNormalizado,
        codigoConvite: codigoFormatado,
        conviteExpiraEm: {
          gte: new Date(), // gte: "maior ou igual a". Garante que o convite ainda é válido.
        },
      },
      include: {
        egresso: true // Verificamos se já não existe uma conta
      }
    });

    if (!pessoa) {
      return NextResponse.json({ error: 'CPF ou código inválido/expirado.' }, { status: 404 });
    }

    // Verifica se uma conta de egresso já foi criada para essa pessoa
    if (pessoa.egresso) {
      return NextResponse.json({ error: 'Uma conta já foi criada para este CPF. Por favor, faça o login.' }, { status: 409 });
    }

    // Se a verificação foi bem-sucedida, criamos um token seguro (JWT).
    const JWT_SECRET = process.env.JWT_SECRET || 'seu-segredo-deve-ser-mais-longo-e-seguro';
    const token = sign(
      { pessoaId: pessoa.id, cpf: pessoa.cpf }, // O token contém a identidade verificada
      JWT_SECRET,
      { expiresIn: '15m' } // O token é válido por 15 minutos, tempo para completar o cadastro
    );

    // Opcional: Limpar o código para que não seja reutilizado.
    await prisma.pessoa.update({
        where: { id: pessoa.id },
        data: { codigoConvite: null, conviteExpiraEm: null }
    });

    return NextResponse.json({ 
        message: 'Verificação bem-sucedida!', 
        token: token,
        nome: pessoa.nome // Retorna o nome para uma saudação na próxima tela
    });

  } catch (error) {
    console.error('Erro na verificação do convite:', error);
    return NextResponse.json({ error: 'Erro interno no servidor.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
