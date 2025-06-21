//app/api/egresso/editar_egresso/[id]/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import path from 'path';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const egressoId = Number(params.id);

    if (isNaN(egressoId)) {
      return NextResponse.json({ error: "O ID do egresso é inválido." }, { status: 400 });
    }

    const formData = await req.formData();
    
    const dadosEgresso: any = {};
    const dadosTrabalho: any = {};

    // --- Recolha de Dados para a Tabela Egresso ---
    // (A extração de nome, telefone, etc., permanece a mesma)
    const nome = formData.get('nome') as string | null;
    if (nome) dadosEgresso.nome = nome;
    
    const telefone = formData.get('telefone') as string | null;
    if (telefone || telefone === '') dadosEgresso.telefone = telefone;
    
    const linkedin = formData.get('linkedin') as string | null;
    if (linkedin !== null) dadosEgresso.linkedin = linkedin;
    
    const instagram = formData.get('instagram') as string | null;
    if (instagram !== null) dadosEgresso.instagram = instagram;
    
    const senha = formData.get('senha') as string | null;
    if (senha) {
      dadosEgresso.senha = await bcrypt.hash(senha, 10);
    }
    
    const foto = formData.get('foto') as File | null;
    if (foto) {
      const buffer = Buffer.from(await foto.arrayBuffer());
      const fileName = `${Date.now()}-${foto.name.replace(/\s/g, '_')}`;
      const filePath = path.join(process.cwd(), 'public/uploads', fileName);
      await writeFile(filePath, buffer);
      dadosEgresso.fotoPerfil = `/uploads/${fileName}`;
    }

    // --- Recolha de Dados para a Tabela TrabalhoAtual ---
    const empresa = formData.get('empresa') as string | null;
    if (empresa) dadosTrabalho.empresa = empresa;

    const cargo = formData.get('cargo') as string | null;
    if (cargo) dadosTrabalho.cargo = cargo;

    const cidadeTrabalho = formData.get('cidade') as string | null;
    if (cidadeTrabalho) dadosTrabalho.cidade = cidadeTrabalho;
    
    const estadoTrabalho = formData.get('estado') as string | null;
    if (estadoTrabalho) dadosTrabalho.estado = estadoTrabalho;

    const paisTrabalho = formData.get('pais') as string | null;
    if (paisTrabalho) dadosTrabalho.pais = paisTrabalho;

    // *** INÍCIO DA CORREÇÃO ***
    // Converte o ano de entrada para um número antes de o adicionar.
    const anoEntradaTrabalho = formData.get('anoEntrada') as string | null;
    if (anoEntradaTrabalho && !isNaN(parseInt(anoEntradaTrabalho, 10))) {
      dadosTrabalho.anoEntrada = parseInt(anoEntradaTrabalho, 10);
    }
    // *** FIM DA CORREÇÃO ***
    
    const temDadosDeTrabalho = dadosTrabalho.empresa || dadosTrabalho.cargo || dadosTrabalho.anoEntrada;
    
    if (Object.keys(dadosEgresso).length === 0 && !temDadosDeTrabalho) {
      return NextResponse.json({ error: 'Nenhum dado fornecido para atualização.' }, { status: 400 });
    }
    
    const egressoAtualizado = await prisma.$transaction(async (tx) => {
        if (Object.keys(dadosEgresso).length > 0) {
            await tx.egresso.update({
                where: { id: egressoId },
                data: dadosEgresso,
            });
        }

        if (temDadosDeTrabalho) {
            if (!dadosTrabalho.anoEntrada) {
                throw new Error("O ano de entrada na empresa é obrigatório ao adicionar informações profissionais.");
            }
            
            await tx.trabalhoAtual.upsert({
                where: { egressoId: egressoId },
                update: dadosTrabalho,
                create: { 
                  empresa: dadosTrabalho.empresa || 'Não informado',
                  cargo: dadosTrabalho.cargo || 'Não informado',
                  cidade: dadosTrabalho.cidade || 'Não informado',
                  estado: dadosTrabalho.estado || 'Não informado',
                  pais: dadosTrabalho.pais || 'Não informado',
                  anoEntrada: dadosTrabalho.anoEntrada,
                  egressoId: egressoId 
                }
            });
        }
        
        return await tx.egresso.findUnique({ where: { id: egressoId } });
    });

    return NextResponse.json({ message: "Perfil atualizado com sucesso!", data: egressoAtualizado });

  } catch (error: any) {
    console.error("Erro na API PUT /api/egresso/editar_egresso/[id]:", error);
    if (error.code === 'P2025') {
        return NextResponse.json({ error: "Egresso para atualizar não encontrado." }, { status: 404 });
    }
    return NextResponse.json({ error: error.message || "Falha ao atualizar o perfil no servidor." }, { status: 500 });
  }
}
