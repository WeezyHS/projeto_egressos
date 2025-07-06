//app/api/egresso/[cpf]/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { cpf: string } }) {

  try {
    const cpfNormalizado = params.cpf.replace(/\D/g, '');
    // 1. Busca direta na tabela Egresso
    let egresso = await prisma.egresso.findUnique({
      where: { cpf: cpfNormalizado },
      include: { trabalhoAtual: true }
    });
    // 2. Se não encontrou, verifica na tabela Pessoa
    if (!egresso) {
      console.log('[API] Buscando na tabela Pessoa...');
      const pessoa = await prisma.pessoa.findUnique({
        where: { cpf: cpfNormalizado },
        include: {
          matriculas: {
            include: {
              curso: true
            }
          }
        }
      });

      if (pessoa) {
        console.log('[API] Encontrado na tabela Pessoa, convertendo para formato Egresso');
        egresso = {
          id: pessoa.id,
          cpf: pessoa.cpf,
          nome: pessoa.nome,
          email: pessoa.email,
          telefone: '',
          cidade: '',
          estado: '',
          pais: '',
          fotoPerfil: null,
          linkedin: null,
          instagram: null,
          visivel: pessoa.visivel,
          trabalhoAtual: null,
          // @ts-ignore
          cursos: pessoa.matriculas.map(m => ({
            nomeCurso: m.curso.nome,
            anoEntrada: m.anoSemestreEntrada,
            anoSaida: m.anoSemestreSaida
          }))
        };
      }
    }
    // 3. Se ainda não encontrou, verifica possíveis problemas de formatação
    if (!egresso) {
      // Busca todos os egressos para verificar similaridades
      const todosEgressos = await prisma.egresso.findMany({
        select: { cpf: true, nome: true }
      });
      const cpfsSimilares = todosEgressos.filter(e => 
        e.cpf.includes(cpfNormalizado.slice(-4)) // Últimos 4 dígitos
      );

      console.log('[API] CPFs similares encontrados:', cpfsSimilares);

      return NextResponse.json(
        { 
          error: "Egresso não encontrado",
          debug: {
            cpfBuscado: params.cpf,
            cpfNormalizado,
            cpfsSimilares,
            sugestao: "Verifique se o CPF está correto ou se existe em outra tabela"
          }
        },
        { status: 404 }
      );
    }
    // 4. Remove campos sensíveis antes de retornar
    const { senha, ...dadosSeguros } = egresso;

    return NextResponse.json(dadosSeguros);

  } catch (error) {
    console.error('[API] Erro:', error);
    return NextResponse.json(
      { 
        error: "Erro interno no servidor",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}