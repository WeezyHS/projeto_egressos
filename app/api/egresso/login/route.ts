// app/api/egresso/login/route.ts
import { NextResponse, NextRequest } from 'next/server';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

export async function POST(request: NextRequest) {
    const prisma = new PrismaClient();

    try {
        const { email, senha } = await request.json();
        if (!email || !senha) {
            return NextResponse.json({ error: "E-mail e senha são obrigatórios" }, { status: 400 });
        }

        // --- CORREÇÃO PRINCIPAL AQUI ---
        // Usamos 'include' para trazer os dados da 'Pessoa' relacionada
        const egresso = await prisma.egresso.findFirst({
            where: { emailPreferencial: email },
            include: {
                pessoa: true, // Isto vai incluir o objeto 'pessoa' com nome, cpf, etc.
            },
        });

        if (!egresso) {
            return NextResponse.json({ error: "Credenciais inválidas ou conta inexistente." }, { status: 401 });
        }

        const senhaCorreta = await bcrypt.compare(senha, egresso.senha);

        if (!senhaCorreta) {
            return NextResponse.json({ error: "Credenciais inválidas ou conta inexistente." }, { status: 401 });
        }

        const { senha: _, ...egressoSemSenha } = egresso;

        return NextResponse.json({ egresso: egressoSemSenha }, { status: 200 });

    } catch (error) {
        console.error("ERRO NA API DE LOGIN:", error);
        return NextResponse.json({ error: "Erro interno do servidor!" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
