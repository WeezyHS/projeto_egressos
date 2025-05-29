//app/api/egresso/lista_geral/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cpfLogado = searchParams.get('cpf'); // Recebe o CPF do egresso logado via query param

  try {
    // 1. Busca todos os CPFs da tabela Egresso
    const egressos = await prisma.egresso.findMany({
      select: { cpf: true }
    });

    const cpfsEgressos = new Set(egressos.map(e => e.cpf));

    // 2. Busca todas as pessoas com os cursos
    const todasAsPessoasComCursos = await prisma.pessoa.findMany({
      include: {
        matriculas: {
          include: { curso: true },
          orderBy: { anoSemestreEntrada: 'desc' }
        }
      },
      orderBy: { nome: 'asc' }
    });

    // 3. Monta o resultado com marcações
    const resultadoFormatado = todasAsPessoasComCursos.map(pessoa => ({
      id: pessoa.id,
      nome: pessoa.nome,
      cpf: pessoa.cpf,
      email: pessoa.email,
      cursos: pessoa.matriculas.map(matricula => ({
        nomeCurso: matricula.curso.nome,
        anoEntrada: matricula.anoSemestreEntrada || 'Não informado',
        anoSaida: matricula.anoSemestreSaida || null,
      })),
      isEgressoLogado: pessoa.cpf === cpfLogado,
      isEgresso: cpfsEgressos.has(pessoa.cpf), // <- MARCA "EGRESSO"
    }));

    return NextResponse.json({ pessoas: resultadoFormatado });

  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar dados das pessoas' },
      { status: 500 }
    );
  }
}
