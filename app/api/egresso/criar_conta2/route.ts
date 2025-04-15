// app/api/egresso/atualizar_experiencia/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';

export async function POST(request: NextRequest) {
  console.log('Requisição POST recebida em /api/egresso/atualizar_experiencia');
  try {
    const formData = await request.formData();
    const id = formData.get('id') as string | null;
    const nomeEmpresa = formData.get('nomeEmpresa') as string | null;
    const cidadeEmpresa = formData.get('cidadeEmpresa') as string | null;
    const estadoEmpresa = formData.get('estadoEmpresa') as string | null;
    const paisEmpresa = formData.get('paisEmpresa') as string | null;
    const cargo = formData.get('cargo') as string | null;
    const anoEntrada = formData.get('anoEntrada') as string | null;
    const visivel = formData.get('visivel') === 'true';

    console.log('Dados de experiência recebidos:', { id, nomeEmpresa, cidadeEmpresa, estadoEmpresa, paisEmpresa, cargo, anoEntrada, visivel });

    if (!id || !nomeEmpresa || !cidadeEmpresa || !estadoEmpresa || !paisEmpresa || !cargo || !anoEntrada) {
      return NextResponse.json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' }, { status: 400 });
    }

    const prisma = new PrismaClient();

    const trabalhoAtualCriado = await prisma.trabalhoAtual.create({
      data: {
        empresa: nomeEmpresa,
        cidade: cidadeEmpresa,
        estado: estadoEmpresa,
        pais: paisEmpresa,
        cargo: cargo,
        anoEntrada: parseInt(anoEntrada, 10),
        egresso: {
          connect: { id: parseInt(id, 10) },
        },
      },
    });

    const egressoAtualizado = await prisma.egresso.update({
      where: { id: parseInt(id, 10) },
      data: { visivel }, // Atualiza a visibilidade no modelo Egresso
    });

    await prisma.$disconnect();

    return NextResponse.json({ message: 'Experiência do egresso criada com sucesso!', trabalhoAtual: trabalhoAtualCriado, egresso: egressoAtualizado }, { status: 200 });

  } catch (error) {
    console.error('Erro ao criar experiência do egresso:', error);
    return NextResponse.json({ error: 'Erro ao criar experiência do egresso.' }, { status: 500 });
  }
}