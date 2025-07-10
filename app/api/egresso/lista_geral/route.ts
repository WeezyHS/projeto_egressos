// app/api/egresso/lista_geral/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    // É uma boa prática instanciar o Prisma dentro da função e fora do try/catch
    const prisma = new PrismaClient();

    try {
        const { searchParams } = new URL(request.url);
        const cpfLogado = searchParams.get('cpf');

        // --- CORREÇÃO 1: Consulta corrigida para buscar o CPF da tabela Pessoa ---
        // Buscamos todos os egressos e incluímos o CPF da pessoa relacionada.
        const egressosComPessoa = await prisma.egresso.findMany({
            select: {
                pessoa: { // Entra na relação 'pessoa'
                    select: {
                        cpf: true // E seleciona apenas o CPF
                    }
                }
            }
        });

        // --- CORREÇÃO 2: Mapeamento correto para a nova estrutura de dados ---
        // Extrai os CPFs, garantindo que o objeto 'pessoa' não seja nulo.
        const cpfsEgressos = new Set(
            egressosComPessoa
                .map(e => e.pessoa?.cpf) // Usa optional chaining (?.) para segurança
                .filter(cpf => cpf != null) as string[] // Filtra quaisquer CPFs nulos
        );

        // O resto da sua lógica para buscar todas as pessoas está correta.
        const todasAsPessoasComCursos = await prisma.pessoa.findMany({
            include: {
                matriculas: {
                    include: { curso: true },
                    orderBy: { anoSemestreEntrada: 'desc' }
                }
            },
            orderBy: { nome: 'asc' }
        });

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
            isEgresso: cpfsEgressos.has(pessoa.cpf),
        }));

        return NextResponse.json({ pessoas: resultadoFormatado });

    } catch (error) {
        // BOA PRÁTICA: Log detalhado do erro no servidor
        console.error("ERRO NA API /lista_geral:", error);
        return NextResponse.json(
            { error: 'Erro ao buscar dados das pessoas' },
            { status: 500 }
        );
    } finally {
        // BOA PRÁTICA: Garantir que a conexão com o banco seja fechada
        await prisma.$disconnect();
    }
}
