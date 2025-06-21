//app/api/instituicao/buscar_instituicao/[id]/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    // 1. Obter o ID da URL e convertê-lo para número.
    const idDaInstituicao = Number(params.id);

    // 2. Validar o ID. Se não for um número válido, retorna um erro.
    if (isNaN(idDaInstituicao)) {
      return NextResponse.json({ error: "O ID da instituição fornecido é inválido." }, { status: 400 });
    }

    // 3. Buscar a instituição no banco de dados usando o ID.
    const instituicao = await prisma.instituicao.findUnique({
      where: { 
        id: idDaInstituicao 
      },
      // 4. Selecionar apenas os campos necessários para preencher o formulário de edição.
      // Isso evita expor dados desnecessários, como a senha hasheada.
      select: {
        id: true,
        nomeCompleto: true,
        telefone: true,
        endereco: true,
        cep: true,
        nomeRepresentante: true,
        fotoPerfil: true,
      }
    });

    // 5. Se nenhuma instituição for encontrada com esse ID, retorna um erro 404.
    if (!instituicao) {
      return NextResponse.json({ error: "Instituição não encontrada." }, { status: 404 });
    }

    // 6. Se encontrou, retorna os dados da instituição com um status 200 OK.
    return NextResponse.json(instituicao);

  } catch (error) {
    // 7. Se ocorrer qualquer outro erro no servidor, loga o erro e retorna um status 500.
    console.error("Erro na API GET /api/instituicao/perfil/[id]:", error);
    return NextResponse.json({ error: "Falha ao buscar os dados do perfil no servidor." }, { status: 500 });
  }
}
