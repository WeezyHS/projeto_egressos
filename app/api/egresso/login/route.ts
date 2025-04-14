//Código API Route de login (login_egresso)

import { PrismaClient } from "@/app/generated/prisma";
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request){
    try{
        const { email, senha } = await request.json();
        // const senhaHash = await bcrypt.hash(senha, 10);
        if (!email || !senha) {
            return NextResponse.json({ error: "E-mail e senha são obrigatórios" }, { status: 400});
        }

        const prisma = new PrismaClient();
        const egresso = await prisma.egresso.findUnique({
            where: { email },
        })

        if (!egresso){ //Caso não exista a conta no banco de dados
            return NextResponse.json({ error: "Credenciais inexistentes!" }, {status: 401 });
        }

        const senhaCorreta = await bcrypt.compare(senha, egresso.senha);

        if (!senhaCorreta){
            return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
        }

        const { senha: passwordHash, ...egressoSemSenha } = egresso;

        return NextResponse.json({ egresso: egressoSemSenha }, { status: 200 });

    }catch (error){
        console.error("Erro durante o login:", error);
        return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
    } finally{
        const prisma = new PrismaClient();
        await prisma.$disconnect();
    }
}