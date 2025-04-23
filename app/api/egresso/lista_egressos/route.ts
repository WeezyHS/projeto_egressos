import { NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Busca todos os egressos visíveis com seus dados de trabalho
    const egressos = await prisma.egresso.findMany({
      where: {
        visivel: true,
      },
      include: {
        trabalhoAtual: true,
      }
    });

    // Busca todas as pessoas com suas matrículas e cursos
    const pessoas = await prisma.pessoa.findMany({
      where: {
        visivel: true,
      },
      include: {
        matriculas: {
          include: {
            curso: true
          }
        }
      }
    });

    const dadosEgressos = egressos.map((egresso) => ({
      id: egresso.id,
      cpf: egresso.cpf,
      email: egresso.email,
      telefone: egresso.telefone,
      cidade: egresso.trabalhoAtual?.cidade || egresso.cidade,
      estado: egresso.trabalhoAtual?.estado || egresso.estado,
      pais: egresso.trabalhoAtual?.pais || egresso.pais,
      cargoAtual: egresso.trabalhoAtual?.cargo || '',
      empresaAtual: egresso.trabalhoAtual?.empresa || '',
      fotoPerfil: egresso.fotoPerfil || '',
      linkedin: egresso.linkedin || '',
      instagram: egresso.instagram || ''
    }));

    const dadosPessoas = pessoas.map((pessoa) => ({
      id: pessoa.id,
      nome: pessoa.nome,
      cpf: pessoa.cpf,
      email: pessoa.email,
      cursos: pessoa.matriculas.map(matricula => ({
        nomeCurso: matricula.curso.nome,
        anoEntrada: matricula.anoSemestreEntrada,
        anoSaida: matricula.anoSemestreSaida || null
      }))
    }));

    return NextResponse.json({
      egressos: dadosEgressos,
      pessoas: dadosPessoas
    });
  } catch (error) {
    console.error('Erro ao buscar egressos e pessoas:', error);
    return NextResponse.json({ error: 'Erro ao buscar egressos e pessoas' }, { status: 500 });
  }
}
