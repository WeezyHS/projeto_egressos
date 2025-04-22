import { NextResponse } from 'next/server';
import { PrismaClient, Pessoa, Curso } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const matriculas = await prisma.matricula.findMany({
      include: {
        pessoa: true,
        curso: true
      }
    });

    type MatriculaComPessoaECurso = {
      pessoa: Pessoa;
      curso: Curso;
    };
    
    const egressos = matriculas.map((matricula) => {
      const { pessoa, curso } = matricula;
    
      return {
        id: pessoa.id,
        nome: pessoa.nome,
        cargoAtual: '',
        curso: curso.nome,
        cidade: '',
        estado: '',
        pais: ''
      };
    });

    return NextResponse.json(egressos);
  } catch (error) {
    console.error('Erro ao buscar egressos:', error);
    return NextResponse.json({ error: 'Erro ao buscar egressos' }, { status: 500 });
  }
}