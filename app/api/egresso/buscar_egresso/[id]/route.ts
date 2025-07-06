//app/api/egresso/buscar_egresso/[id]/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const egressoId = Number(params.id);

    if (isNaN(egressoId)) {
      return NextResponse.json({ error: "O ID do egresso fornecido é inválido." }, { status: 400 });
    }

    const egresso = await prisma.egresso.findUnique({
      where: { id: egressoId },
      // Seleciona os campos necessários para preencher o formulário de edição.
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        linkedin: true,
        instagram: true,
        fotoPerfil: true,
        cidade: true,
        estado: true,
        pais: true,
        trabalhoAtual: {
          select: {
            empresa: true,
            cargo: true,
            anoEntrada: true,
          }
        }
      }
    });

    if (!egresso) {
      return NextResponse.json({ error: "Egresso não encontrado." }, { status: 404 });
    }
    // Retorna os dados do egresso com um status 200 OK.
    return NextResponse.json(egresso);

  } catch (error) {
    console.error("Erro na API GET /api/egresso/buscar_egresso/[id]:", error);
    return NextResponse.json({ error: "Falha ao buscar os dados do perfil no servidor." }, { status: 500 });
  }
}