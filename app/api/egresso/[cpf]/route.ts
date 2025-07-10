// app/api/egresso/[cpf]/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

interface RouteContext {
  params: {
    cpf: string;
  }
}

export async function GET(request: NextRequest, context: RouteContext) {
  const prisma = new PrismaClient();
  // Decodifica o CPF do URL para garantir que caracteres como '.' não sejam perdidos
  const cpf = decodeURIComponent(context.params.cpf);

  try {
    // A fonte da verdade é a tabela 'Pessoa', pois ela contém o CPF.
    // Começamos a busca aqui e incluímos todos os dados relacionados.
    const pessoa = await prisma.pessoa.findUnique({
      where: { cpf },
      include: {
        egresso: { // Inclui dados da tabela Egresso (se existirem)
          include: {
            TrabalhoAtual: { // Inclui as experiências profissionais
              orderBy: { anoEntrada: 'desc' } // Pega o mais recente primeiro
            },
          },
        },
        matriculas: { // Inclui as matrículas da pessoa
          include: {
            curso: true, // E os dados do curso de cada matrícula
          },
          orderBy: { anoSemestreEntrada: 'asc' }
        },
      },
    });

    // Se não encontrarmos a pessoa, o perfil não existe.
    if (!pessoa) {
      return NextResponse.json({ error: 'Perfil não encontrado.' }, { status: 404 });
    }

    // Se a pessoa existe, mas não tem um registo de 'Egresso' associado,
    // ou se o perfil do egresso não for visível, negamos o acesso.
    if (!pessoa.egresso || !pessoa.egresso.visivel) {
      return NextResponse.json({ error: 'Este perfil não é público ou não pertence a um egresso.' }, { status: 403 });
    }

    // Agora, montamos a resposta exatamente no formato que o seu frontend espera.
    const perfilFormatado = {
      id: pessoa.egresso.id,
      cpf: pessoa.cpf,
      nome: pessoa.nome,
      email: pessoa.email,
      telefone: pessoa.egresso.telefone,
      cidade: pessoa.egresso.cidade,
      estado: pessoa.egresso.estado,
      pais: pessoa.egresso.pais,
      fotoPerfil: pessoa.egresso.fotoPerfil,
      linkedin: pessoa.egresso.linkedin,
      instagram: pessoa.egresso.instagram,
      // Pega apenas o trabalho mais recente da lista de trabalhos
      trabalhoAtual: pessoa.egresso.TrabalhoAtual.length > 0 ? {
        empresa: pessoa.egresso.TrabalhoAtual[0].empresa,
        cargo: pessoa.egresso.TrabalhoAtual[0].cargo,
        anoEntrada: pessoa.egresso.TrabalhoAtual[0].anoEntrada,
      } : null,
      cursos: pessoa.matriculas.map(m => ({
        nomeCurso: m.curso.nome,
        anoEntrada: m.anoSemestreEntrada,
        anoSaida: m.anoSemestreSaida,
      })),
    };

    return NextResponse.json(perfilFormatado);

  } catch (error) {
    console.error(`[API] Erro ao buscar perfil para o CPF ${cpf}:`, error);
    return NextResponse.json({ error: 'Erro interno no servidor.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
