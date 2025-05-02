import { NextResponse } from 'next/server';
// import { PrismaClient } from '@/app/generated/prisma';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  console.log('Requisição POST recebida em /api/egresso/criar_conta');
  try {
    const formData = await request.formData();

    const nome = formData.get('nome') as string | null;
    const cpf = formData.get('cpf') as string | null;
    const email = formData.get('email') as string | null;
    const telefone = formData.get('telefone') as string | null;
    const senha = formData.get('senha') as string | null;
    const cidade = formData.get('cidade') as string | null;
    const estado = formData.get('estado') as string | null;
    const pais = formData.get('pais') as string | null;
    const linkedin = formData.get('linkedin') as string | null;
    const instagram = formData.get('instagram') as string | null;
    const fotoPerfilFile = formData.get('fotoPerfil') as File | null;

    console.log('Dados recebidos do formulário:', {
      nome, cpf, email, telefone, senha, cidade, estado, pais, linkedin, instagram,
    });

    if (!nome || !cpf || !senha || !telefone || !email || !cidade || !estado || !pais) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos.' },
        { status: 400 }
      );
    }

    // Processar a imagem de perfil, se enviada
    let caminhoImagem: string | null = null;

    if (fotoPerfilFile) {
      const arrayBuffer = await fotoPerfilFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const extensao = fotoPerfilFile.name.split('.').pop() || 'png';
      const nomeArquivo = `${uuidv4()}.${extensao}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      const filePath = path.join(uploadDir, nomeArquivo);

      // Cria a pasta se não existir
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      fs.writeFileSync(filePath, buffer);
      caminhoImagem = `/uploads/${nomeArquivo}`; // Caminho acessível pela web
    }

    const senhaHash = await bcrypt.hash(senha, 10);
    const prisma = new PrismaClient();

    try {
      const novoEgresso = await prisma.egresso.create({
        data: {
          nome: nome!,
          cpf: cpf!,
          senha: senhaHash,
          telefone: telefone!,
          email: email!,
          cidade: cidade!,
          estado: estado!,
          pais: pais!,
          linkedin,
          instagram,
          fotoPerfil: caminhoImagem,
        },
      });

      await prisma.$disconnect();
      return NextResponse.json(
        { message: 'Egresso criado com sucesso!', egresso: novoEgresso },
        { status: 201 }
      );
    } catch (error: any) {
      console.error('Erro ao criar egresso:', error);
      await prisma.$disconnect();
      return NextResponse.json({ error: 'Erro ao criar egresso.' }, { status: 500 });
    }
  } catch (error) {
    console.error('Erro geral:', error);
    return NextResponse.json({ error: 'Erro geral no servidor.' }, { status: 500 });
  }
}
