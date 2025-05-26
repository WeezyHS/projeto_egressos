import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';
import { writeFile } from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  console.log('HANDLER INSTITUICAO POST: Requisição recebida.');

  const formData = await req.formData();
  const nome = formData.get('nome') as string;
  const foto = formData.get('foto') as File;

  console.log('HANDLER INSTITUICAO POST: Nome recebido do form:', nome);
  if (foto) {
    console.log('HANDLER INSTITUICAO POST: Foto recebida do form - Nome:', foto.name, 'Tamanho:', foto.size, 'Tipo:', foto.type);
  } else {
    console.log('HANDLER INSTITUICAO POST: Foto não recebida do form.');
  }

  // Verificação Crítica
  if (!nome || !foto) {
    // Logs adicionais DENTRO do IF para depuração EXTREMA:
    console.error('>>> DEBUG: ENTROU NO BLOCO IF (!nome || !foto) <<<');
    console.error('>>> DEBUG: Valor de nome NO MOMENTO DO IF:', nome, 'Avaliação de !nome:', !nome);
    console.error('>>> DEBUG: Valor de foto NO MOMENTO DO IF:', foto, 'Avaliação de !foto:', !foto);
    // Log original do erro:
    console.error('HANDLER INSTITUICAO POST: Erro - Nome e/ou foto são obrigatórios. Nome:', nome, 'Foto:', foto ? 'Existe' : 'Não existe');
    return NextResponse.json({ error: 'Nome e foto são obrigatórios' }, { status: 400 });
  }

  console.log('HANDLER INSTITUICAO POST: Passou da verificação nome/foto. Tentando ler o buffer da foto.');

  let buffer: Buffer;
  try {
    const arrayBuffer = await foto.arrayBuffer();
    buffer = Buffer.from(arrayBuffer);
    console.log('HANDLER INSTITUICAO POST: Buffer da foto lido com sucesso. Tamanho:', buffer.length);
  } catch (error) {
    console.error('HANDLER INSTITUICAO POST: ERRO CRÍTICO ao ler o arrayBuffer ou criar o Buffer da foto:', error);
    let errorMessage = 'Falha crítica ao processar o arquivo da foto.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: 'Falha ao processar arquivo da foto.', detalhes: errorMessage }, { status: 500 });
  }

  const fileName = `${Date.now()}-${foto.name}`;
  const filePath = path.join(process.cwd(), 'public/uploads', fileName);

  try {
    await writeFile(filePath, buffer);
    console.log('HANDLER INSTITUICAO POST: Arquivo salvo com sucesso em:', filePath);
  } catch (error) {
    console.error('HANDLER INSTITUICAO POST: Erro ao salvar o arquivo no disco:', error);
    let errorMessage = 'Falha ao salvar a imagem no servidor (detalhes indisponíveis).';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: 'Falha ao salvar a imagem no servidor.', detalhes: errorMessage }, { status: 500 });
  }

  const fotoUrl = `/uploads/${fileName}`;
  console.log('HANDLER INSTITUICAO POST: URL da foto para o banco de dados:', fotoUrl);

  const idDaInstituicaoParaAtualizar = 1;
  console.log(`HANDLER INSTITUICAO POST: ID da instituição para atualizar: ${idDaInstituicaoParaAtualizar}`);

  try {
    console.log(`HANDLER INSTITUICAO POST: Tentando atualizar instituição (ID: ${idDaInstituicaoParaAtualizar}) no banco de dados com nome: "${nome}" e fotoPerfil: "${fotoUrl}"`);
    const instituicao = await prisma.instituicao.update({
      where: { id: idDaInstituicaoParaAtualizar },
      data: {
        nomeCompleto: nome,
        fotoPerfil: fotoUrl,
      },
    });
    console.log('HANDLER INSTITUICAO POST: Instituição atualizada com sucesso no banco de dados. Retorno do Prisma:', instituicao);
    return NextResponse.json({ sucesso: true, instituicao });
  } catch (error) {
    console.error('HANDLER INSTITUICAO POST: Erro ao atualizar instituição no banco de dados:', error);
    let detalhesErro = 'Ocorreu um erro desconhecido ao atualizar o banco.';
    if (error instanceof Error) {
      detalhesErro = error.message;
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
            console.error(`HANDLER INSTITUICAO POST: Erro Prisma P2025 - A instituição com ID ${idDaInstituicaoParaAtualizar} não foi encontrada para atualização.`);
            return NextResponse.json({
                error: `Registro para atualizar não encontrado. Nenhuma instituição com ID ${idDaInstituicaoParaAtualizar} foi localizada.`,
                detalhes: error.message
            }, { status: 404 });
        }
        detalhesErro = `Erro do Prisma (código ${error.code}): ${error.message}`;
    }
    return NextResponse.json({ error: 'Erro ao atualizar dados da instituição no banco.', detalhes: detalhesErro }, { status: 500 });
  }
}