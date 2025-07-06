// app/api/instituicao/alunos/[id]/route.ts

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function PUT(
  req: NextRequest,
  contextPromise: Promise<{ params: { id: string } }>
) {
  const { params } = await contextPromise
  const pessoaId = Number(params.id)
  const data = await req.json()

  try {
    const pessoa = await prisma.pessoa.update({
      where: { id: pessoaId },
      data: {
        nome: data.nome,
        email: data.email,
        matriculas: {
          update: {
            where: { id: data.matriculaId },
            data: {
              anoSemestreEntrada: data.anoSemestreEntrada,
              anoSemestreSaida: data.anoSemestreSaida
            }
          }
        }
      }
    })

    return NextResponse.json(pessoa)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erro ao editar aluno' }, { status: 500 })
  }
}