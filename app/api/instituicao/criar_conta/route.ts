import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import bcrypt from 'bcrypt';
import path from 'path';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  console.log('Requisição POST recebida em /api/instituicao/criar-conta');
  const prisma = new PrismaClient();

  try {
    const formData = await request.formData();
    const nomeCompleto = formData.get('nomeCompleto') as string | null;
    const cnpj = formData.get('cnpj') as string | null;
    const telefone = formData.get('telefone') as string | null;
    const endereco = formData.get('endereco') as string | null;
    const cep = formData.get('cep') as string | null;
    const nomeRepresentante = formData.get('nomeRepresentante') as string | null;
    const cpfRepresentante = formData.get('cpfRepresentante') as string | null;
    const email = formData.get('email') as string | null;
    const senha = formData.get('senha') as string | null;
    const fotoPerfilFile = formData.get('fotoPerfil') as Blob | null;

    console.log('Dados recebidos do formulário:', {
      nomeCompleto, cnpj, telefone, endereco, cep,
      nomeRepresentante, cpfRepresentante, email, senha, fotoPerfilFile
    });

    // Validação de campos obrigatórios
    if (!nomeCompleto || !cnpj || !telefone || !email || !endereco || !cep || !nomeRepresentante || !cpfRepresentante || !senha) {
      return NextResponse.json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' }, { status: 400 });
    }

    // Verifica se já existe uma instituição com mesmo CNPJ ou email
    const existente = await prisma.instituicao.findFirst({
      where: {
        OR: [{ cnpj }, { email }],
      },
    });

    if (existente) {
      await prisma.$disconnect();
      return NextResponse.json({ error: 'Já existe uma instituição com esse CNPJ ou email.' }, { status: 409 });
    }

    // Verifica se a senha já existe em alguma instituição
    const todasInstituicoes = await prisma.instituicao.findMany({
      select: { senha: true },
    });

    for (const inst of todasInstituicoes) {
      if (inst.senha && await bcrypt.compare(senha, inst.senha)) {
        await prisma.$disconnect();
        return NextResponse.json({ error: 'Senha já existente!' }, { status: 409 });
      }
    }

    // Criptografa a senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // Processa imagem de perfil, se houver
    let fotoPerfilPath: string | null = null;
    if (fotoPerfilFile) {
      const bytes = await fotoPerfilFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const originalName = (fotoPerfilFile as Blob & { name: string }).name;
      const extension = originalName.split('.').pop();
      const filename = `${uuidv4()}.${extension}`;
      const uploadDir = path.join(process.cwd(), '/public/uploads');
      await fs.mkdir(uploadDir, { recursive: true });

      fotoPerfilPath = `/uploads/${filename}`;
      const filePath = path.join(uploadDir, filename);
      await fs.writeFile(filePath, buffer);

      console.log('Foto de perfil salva em:', fotoPerfilPath);
    }

    // Cria a instituição no banco
    const novaInstituicao = await prisma.instituicao.create({
      data: {
        nomeCompleto,
        cnpj,
        telefone,
        endereco,
        cep,
        nomeRepresentante,
        cpfRepresentante,
        email,
        senha: senhaHash,
        fotoPerfil: fotoPerfilPath,
      },
    });

    await prisma.$disconnect();

    console.log(`Instituição criada: ${nomeCompleto} (${email}), imagem: ${fotoPerfilPath}`);

    return NextResponse.json(
      { message: 'Perfil da instituição criado com sucesso!', instituicao: novaInstituicao },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Erro ao criar perfil da instituição:', error);
    await prisma.$disconnect();
    return NextResponse.json({ error: 'Erro ao criar perfil da instituição.' }, { status: 500 });
  }
}