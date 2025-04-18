import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import { Curso as PrismaCurso, Pessoa as PrismaPessoa } from '@/app/generated/prisma'; // Importe os tipos do Prisma

interface CursoInput {
  id: number;
  nome: string;
}

interface PessoaInput {
  id: number;
  nome: string;
  cpf: string;
  email: string;
}

interface MatriculaInput {
  cursoId: number;
  pessoaId: number;
  entrada: string;
  saida: string | null;
  matricula: string;
}

//========================================================================

//=======================================================================

export async function POST(request: NextRequest) {
  const prisma = new PrismaClient();

  try {
    const { cursos, pessoas, matriculas } = await request.json() as { // Defina os tipos aqui
      cursos: CursoInput[];
      pessoas: PessoaInput[];
      matriculas: MatriculaInput[];
    };

    // Salvar cursos (verificar duplicidades pelo nome)
    for (const cursoData of cursos) {
      const cursoExistente = await prisma.curso.findUnique({
        where: { nome: cursoData.nome },
      });
      if (!cursoExistente) {
        await prisma.curso.create({
          data: { nome: cursoData.nome },
        });
      }
    }

    // Salvar pessoas (verificar duplicidades pelo cpf ou email)
    for (const pessoaData of pessoas) {
      const pessoaExistente = await prisma.pessoa.findFirst({
        where: {
          OR: [
            { cpf: pessoaData.cpf },
            { email: pessoaData.email },
          ],
        },
      });
      if (!pessoaExistente) {
        await prisma.pessoa.create({
          data: {
            nome: pessoaData.nome,
            cpf: pessoaData.cpf,
            email: pessoaData.email,
          },
        });
      }
    }

    // Buscar IDs de cursos e pessoas para criar matrículas
    const cursosMapeados = new Map<string, number>();
    const pessoasMapeadas = new Map<string, number>();

    const todosCursos = await prisma.curso.findMany();
    todosCursos.forEach((curso: PrismaCurso) => cursosMapeados.set(curso.nome, curso.id)); // Use o tipo PrismaCurso

    const todasPessoas = await prisma.pessoa.findMany();
    todasPessoas.forEach((pessoa: PrismaPessoa) => pessoasMapeadas.set(pessoa.cpf, pessoa.id)); // Use o tipo PrismaPessoa

    // Salvar matrículas (verificar duplicidades por cursoId e pessoaId)
    for (const matriculaData of matriculas) {
      const cursoId = cursosMapeados.get(
        cursos.find((c: CursoInput) => c.id === matriculaData.cursoId)?.nome || "" // Agora 'c' tem o tipo CursoInput
      );
      const pessoaId = pessoasMapeadas.get(
        pessoas.find((p: PessoaInput) => p.id === matriculaData.pessoaId)?.cpf || "" // Agora 'p' tem o tipo PessoaInput
      );

      if (cursoId && pessoaId) {
        const matriculaExistente = await prisma.matricula.findUnique({
          where: {
            cursoId_pessoaId: {
              cursoId: cursoId,
              pessoaId: pessoaId,
            },
          },
        });
        if (!matriculaExistente) {
          await prisma.matricula.create({
            data: {
              cursoId: cursoId,
              pessoaId: pessoaId,
              anoSemestreEntrada: matriculaData.entrada,
              anoSemestreSaida: matriculaData.saida,
            },
          });
        }
      }
    }

    await prisma.$disconnect();
    return NextResponse.json({ message: 'Dados do CSV salvos no banco de dados com sucesso!' });
  } catch (error: any) {
    console.error('Erro ao salvar dados do CSV no banco:', error);
    await prisma.$disconnect();
    return NextResponse.json({ error: error.message || 'Erro ao salvar dados do CSV no banco de dados.' }, { status: 500 });
  }
}