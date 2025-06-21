//app/api/instituicao/editar_instituicao/[id]/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import path from 'path';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    // 1. Obter o ID dinâmico da URL e convertê-lo para número.
    const idDaInstituicao = Number(params.id);

    // Validação para garantir que o ID é um número válido.
    if (isNaN(idDaInstituicao)) {
      return NextResponse.json({ error: "ID da instituição é inválido." }, { status: 400 });
    }

    const formData = await req.formData();

    // 2. Extrair todos os campos que podem vir do formulário.
    const nome = formData.get('nome') as string | null;
    const telefone = formData.get('telefone') as string | null;
    const endereco = formData.get('endereco') as string | null;
    const cep = formData.get('cep') as string | null;
    const nomeRepresentante = formData.get('nomeRepresentante') as string | null;
    const senha = formData.get('senha') as string | null;
    const foto = formData.get('foto') as File | null;

    const dadosParaAtualizar: any = {};

    // 3. Montar o objeto de dados para atualização apenas com os campos fornecidos.
    if (nome) dadosParaAtualizar.nomeCompleto = nome; // Supondo que o campo no DB é nomeCompleto
    if (telefone) dadosParaAtualizar.telefone = telefone;
    if (endereco) dadosParaAtualizar.endereco = endereco;
    if (cep) dadosParaAtualizar.cep = cep;
    if (nomeRepresentante) dadosParaAtualizar.nomeRepresentante = nomeRepresentante;
    
    // Hashear a senha apenas se uma nova for fornecida.
    if (senha) {
      dadosParaAtualizar.senha = await bcrypt.hash(senha, 10);
    }

    // Salvar a foto apenas se uma nova for enviada.
    if (foto) {
      const buffer = Buffer.from(await foto.arrayBuffer());
      const fileName = `${Date.now()}-${foto.name.replace(/\s/g, '_')}`;
      const filePath = path.join(process.cwd(), 'public/uploads', fileName);
      await writeFile(filePath, buffer);
      dadosParaAtualizar.fotoPerfil = `/uploads/${fileName}`; // Supondo que o campo no DB é fotoPerfil
    }
    
    // Verifica se há pelo menos um campo para atualizar.
    if (Object.keys(dadosParaAtualizar).length === 0) {
      return NextResponse.json({ error: 'Nenhum dado fornecido para atualização.' }, { status: 400 });
    }

    // 4. Usar o ID dinâmico na cláusula 'where' do Prisma para atualizar o registro correto.
    const instituicaoAtualizada = await prisma.instituicao.update({
      where: { id: idDaInstituicao },
      data: dadosParaAtualizar,
    });

    return NextResponse.json(instituicaoAtualizada);

  } catch (error: any) {
    console.error("Erro na API /api/instituicao/editar-instituicao:", error);

    // Tratamento de erro específico para "Registro não encontrado" do Prisma (P2025).
    if (error.code === 'P2025') {
        return NextResponse.json({ error: "Registro para atualizar não encontrado." }, { status: 404 });
    }

    return NextResponse.json({ error: "Falha ao atualizar o perfil no servidor." }, { status: 500 });
  }
}