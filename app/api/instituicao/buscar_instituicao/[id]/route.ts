//app/api/instituicao/buscar_instituicao/[id]/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const idDaInstituicao = Number(params.id); // 1. Obter o ID da URL e convertê-lo para número.

    if (isNaN(idDaInstituicao)) { // 2. Validar o ID. Se não for um número válido, retorna um erro.
      return NextResponse.json({ error: "O ID da instituição fornecido é inválido." }, { status: 400 });
    }

    const instituicao = await prisma.instituicao.findUnique({ // 3. Buscar a instituição no banco de dados usando o ID.
      where: { 
        id: idDaInstituicao 
      },

      select: { // 4. Selecionar apenas os campos necessários para preencher o formulário de edição. Isso evita expor dados desnecessários, como a senha hasheada.
        id: true,
        nomeCompleto: true,
        telefone: true,
        endereco: true,
        cep: true,
        nomeRepresentante: true,
        fotoPerfil: true,
      }
    });

    if (!instituicao) { // 5. Se nenhuma instituição for encontrada com esse ID, retorna um erro 404.
      return NextResponse.json({ error: "Instituição não encontrada." }, { status: 404 });
    }

    return NextResponse.json(instituicao); // 6. Se encontrou, retorna os dados da instituição com um status 200 OK.

  } catch (error) {// 7. Se ocorrer qualquer outro erro no servidor, loga o erro e retorna um status 500.
    return NextResponse.json({ error: "Falha ao buscar os dados do perfil no servidor." }, { status: 500 });
  }
}