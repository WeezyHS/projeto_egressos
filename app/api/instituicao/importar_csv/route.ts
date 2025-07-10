// app/api/instituicao/importar_csv/route.ts

import { NextResponse, NextRequest } from 'next/server';
// A importação foi ajustada conforme sua preferência.
import { PrismaClient } from '@prisma/client';

// --- INTERFACES ATUALIZADAS ---
// Definem a "forma" dos dados que esperamos receber do frontend.
interface CursoInput {
    id: number;
    nome: string;
}

interface PessoaInput {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    codigoConvite: string;
    conviteExpiraEm: string; // Vem como string do JSON, convertemos para Date depois
}

interface MatriculaInput {
    cursoId: number;
    pessoaId: number;
    entrada: string;
    saida: string | null;
}

export async function POST(request: NextRequest) {
    // Instanciamos o PrismaClient aqui, no início da função.
    const prisma = new PrismaClient();

    try {
        const body = await request.json();
        const { cursos, pessoas, matriculas } = body as {
            cursos: CursoInput[];
            pessoas: PessoaInput[];
            matriculas: MatriculaInput[];
        };

        // Usamos uma transação para garantir que toda a importação aconteça com sucesso, ou nada é salvo.
        const resultado = await prisma.$transaction(async (tx) => {
            
            // --- PASSO 1: Salvar os Cursos ---
            if (cursos.length > 0) {
                await tx.curso.createMany({
                    data: cursos.map(c => ({ nome: c.nome })),
                    skipDuplicates: true,
                });
            }

            // --- PASSO 2: Salvar as Pessoas ---
            const cpfsExistentes = (await tx.pessoa.findMany({
                where: { cpf: { in: pessoas.map(p => p.cpf) } },
                select: { cpf: true },
            })).map(p => p.cpf);

            const novasPessoasParaCriar = pessoas.filter(p => !cpfsExistentes.includes(p.cpf));

            if (novasPessoasParaCriar.length > 0) {
                await tx.pessoa.createMany({
                    data: novasPessoasParaCriar.map(p => ({
                        nome: p.nome,
                        cpf: p.cpf,
                        email: p.email,
                        codigoConvite: p.codigoConvite, // Salvando o código de convite
                        conviteExpiraEm: new Date(p.conviteExpiraEm), // Convertendo a string para Data
                    })),
                    skipDuplicates: true,
                });
            }

            // --- PASSO 3: Salvar as Matrículas ---
            const todosCursosDoBanco = await tx.curso.findMany({ select: { id: true, nome: true } });
            const todasPessoasDoBanco = await tx.pessoa.findMany({ select: { id: true, cpf: true } });

            const mapaCursos = new Map(todosCursosDoBanco.map(c => [c.nome, c.id]));
            const mapaPessoas = new Map(todasPessoasDoBanco.map(p => [p.cpf, p.id]));
            
            const novasMatriculasParaCriar = matriculas
                .map(m => {
                    const nomeCurso = cursos.find(c => c.id === m.cursoId)?.nome;
                    const cpfPessoa = pessoas.find(p => p.id === m.pessoaId)?.cpf;

                    if (!nomeCurso || !cpfPessoa) return null;

                    const cursoIdReal = mapaCursos.get(nomeCurso);
                    const pessoaIdReal = mapaPessoas.get(cpfPessoa);

                    if (!cursoIdReal || !pessoaIdReal) return null;

                    return {
                        cursoId: cursoIdReal,
                        pessoaId: pessoaIdReal,
                        anoSemestreEntrada: m.entrada,
                        anoSemestreSaida: m.saida,
                    };
                })
                .filter((m): m is NonNullable<typeof m> => m !== null);
            
            if (novasMatriculasParaCriar.length > 0) {
                await tx.matricula.createMany({
                    data: novasMatriculasParaCriar,
                    skipDuplicates: true,
                });
            }

            return {
                cursosCriados: cursos.length,
                pessoasCriadas: novasPessoasParaCriar.length,
                matriculasCriadas: novasMatriculasParaCriar.length,
            };
        });

        return NextResponse.json({ 
            message: 'Dados do CSV importados com sucesso!',
            detalhes: resultado
        });

    } catch (error: any) {
        console.error('Erro ao importar dados do CSV:', error);
        return NextResponse.json({ error: error.message || 'Erro ao salvar dados do CSV no banco de dados.' }, { status: 500 });
    } finally {
        // É crucial desconectar o cliente Prisma para não esgotar as conexões com o banco.
        await prisma.$disconnect();
    }
}
