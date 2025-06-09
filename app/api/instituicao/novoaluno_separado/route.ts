// app/api/instituicao/novoaluno_separado/route.ts
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const data = await req.json()

  try {
    // Verifica se já existe uma pessoa com o mesmo CPF
    const pessoaExistente = await prisma.pessoa.findUnique({
      where: { cpf: data.cpf },
    })

    if (pessoaExistente) {
      return NextResponse.json({ error: 'CPF já cadastrado' }, { status: 400 })
    }

    // Verifica se o curso já existe ou cria um novo
    const curso = await prisma.curso.upsert({
      where: { nome: data.curso }, // <- "curso" vem do front-end
      update: {},
      create: {
        nome: data.curso,
      },
    })

    // Cria a pessoa com a matrícula vinculada ao curso
    const pessoa = await prisma.pessoa.create({
      data: {
        nome: data.nome,
        cpf: data.cpf,
        email: data.email,
        matriculas: {
          create: {
            cursoId: curso.id,
            anoSemestreEntrada: data.anoSemestreEntrada,
            anoSemestreSaida: data.anoSemestreSaida || null,
          },
        },
      },
      include: {
        matriculas: {
          include: {
            curso: true,
          },
        },
      },
    })

    return NextResponse.json(pessoa)
  } catch (error) {
    console.error('Erro ao salvar aluno:', error)
    return NextResponse.json({ error: 'Erro ao salvar aluno' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
