import { PrismaClient } from "@/app/generated/prisma";
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request){
    try{
        const { email, senha } = await request.json();

        if (!email || !senha) {
            return NextResponse.json({ error: "E-mail e senha são obrigatórios" }, { status: 400});
        }

        const egresso = await prisma.egresso.findUnique({
            where: { email },
        });

        if (!egresso){
            return NextResponse.json({ error: "Credenciais inválidas" }, {status: 401 });
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
        await prisma.$disconnect();
    }
}