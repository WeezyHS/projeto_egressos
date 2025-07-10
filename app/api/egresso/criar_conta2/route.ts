// app/api/egresso/criar_conta2/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(request: NextRequest) {
    const prisma = new PrismaClient();

    try {
        const formData = await request.formData();
        const idString = formData.get('id') as string | null;
        const nomeEmpresa = formData.get('nomeEmpresa') as string | null;
        const cidadeEmpresa = formData.get('cidadeEmpresa') as string | null;
        const estadoEmpresa = formData.get('estadoEmpresa') as string | null;
        const paisEmpresa = formData.get('paisEmpresa') as string | null;
        const cargo = formData.get('cargo') as string | null;
        const anoEntradaString = formData.get('anoEntrada') as string | null;
        const visivel = formData.get('visivel') === 'true';

        if (!idString || !anoEntradaString) {
            return NextResponse.json({ error: 'O ID do egresso e o ano de entrada são obrigatórios.' }, { status: 400 });
        }

        const egressoId = parseInt(idString, 10);
        const anoEntrada = parseInt(anoEntradaString, 10);

        if (isNaN(egressoId) || isNaN(anoEntrada)) {
            return NextResponse.json({ error: 'O ID do egresso e o ano de entrada devem ser números válidos.' }, { status: 400 });
        }

        if (!nomeEmpresa || !cidadeEmpresa || !estadoEmpresa || !paisEmpresa || !cargo) {
            return NextResponse.json({ error: 'Todos os campos de experiência devem ser preenchidos.' }, { status: 400 });
        }

        console.log(`Iniciando transação para o Egresso ID: ${egressoId}`);

        // --- A GARANTIA DE CONSISTÊNCIA ESTÁ AQUI ---
        // A transação garante que ambas as operações funcionem, ou nenhuma delas.
        const [trabalhoAtualCriado, egressoAtualizado] = await prisma.$transaction([
            prisma.trabalhoAtual.create({
                data: {
                    empresa: nomeEmpresa,
                    cidade: cidadeEmpresa,
                    estado: estadoEmpresa,
                    pais: paisEmpresa,
                    cargo: cargo,
                    anoEntrada: anoEntrada,
                    egresso: {
                        connect: { id: egressoId },
                    },
                },
            }),
            prisma.egresso.update({
                where: { id: egressoId },
                data: { visivel },
            })
        ]);

        console.log(`Transação concluída com sucesso para o Egresso ID: ${egressoId}`);

        return NextResponse.json({ 
            message: 'Experiência do egresso criada com sucesso!', 
            trabalhoAtual: trabalhoAtualCriado, 
            egresso: egressoAtualizado 
        }, { status: 200 });

    } catch (error) {
        console.error("ERRO NA TRANSAÇÃO DA API /criar_conta2:", error);
        return NextResponse.json({ 
            error: 'Erro interno no servidor ao salvar os dados. A operação foi revertida.',
            details: error instanceof Error ? error.message : 'Erro desconhecido' 
        }, { status: 500 });

    } finally {
        await prisma.$disconnect();
    }
}
