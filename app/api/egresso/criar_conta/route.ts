// app/api/egresso/criar_conta/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { verify } from 'jsonwebtoken';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Interface para o conteúdo do nosso token JWT
interface TokenPayload {
    pessoaId: number;
    cpf: string;
}

export async function POST(request: NextRequest) {
    const prisma = new PrismaClient();
    try {
        const formData = await request.formData();
        
        // --- PASSO 1: Extrair os dados e o TOKEN de segurança ---
        const token = formData.get('cadastro_token') as string | null;
        const senha = formData.get('senha') as string | null;
        const telefone = formData.get('telefone') as string | null;
        const emailPreferencial = formData.get('email') as string | null;
        const cidade = formData.get('cidade') as string | null;
        const estado = formData.get('estado') as string | null;
        const pais = formData.get('pais') as string | null;
        const linkedin = formData.get('linkedin') as string | null;
        const instagram = formData.get('instagram') as string | null;
        const fotoPerfilFile = formData.get('fotoPerfil') as File | null;

        if (!token || !senha) {
            return NextResponse.json({ error: 'Token e senha são obrigatórios.' }, { status: 400 });
        }

        // --- PASSO 2: Validar o Token de Segurança ---
        const JWT_SECRET = process.env.JWT_SECRET || 'seu-segredo-deve-ser-mais-longo-e-seguro';
        let tokenPayload: TokenPayload;

        try {
            tokenPayload = verify(token, JWT_SECRET) as TokenPayload;
        } catch (error) {
            return NextResponse.json({ error: 'Token inválido ou expirado. Por favor, reinicie o processo.' }, { status: 401 });
        }

        // --- PASSO 3: Verificação de Segurança Anti-Fraude ---
        // A verificação do CPF do formulário foi REMOVIDA, pois o usuário não digita mais o CPF nesta etapa.
        // A única fonte confiável do CPF agora é o token.
        
        // --- Processamento da Imagem ---
        let caminhoImagem: string | null = null;
        if (fotoPerfilFile) {
            const buffer = Buffer.from(await fotoPerfilFile.arrayBuffer());
            const nomeArquivo = `${uuidv4()}.${fotoPerfilFile.name.split('.').pop()}`;
            const uploadDir = path.join(process.cwd(), 'public', 'uploads');
            await fs.mkdir(uploadDir, { recursive: true });
            await fs.writeFile(path.join(uploadDir, nomeArquivo), buffer);
            caminhoImagem = `/uploads/${nomeArquivo}`;
        }

        // --- PASSO 4: Criar o Egresso e CONECTÁ-LO à Pessoa ---
        const senhaHash = await bcrypt.hash(senha, 10);

        const novoEgresso = await prisma.egresso.create({
            data: {
                senha: senhaHash,
                emailPreferencial: emailPreferencial,
                telefone: telefone!,
                cidade: cidade!,
                estado: estado!,
                pais: pais!,
                linkedin: linkedin,
                instagram: instagram,
                fotoPerfil: caminhoImagem,
                
                // A LIGAÇÃO MÁGICA ACONTECE AQUI:
                pessoa: {
                    connect: {
                        id: tokenPayload.pessoaId, // Conecta ao ID da Pessoa que estava no token
                    },
                },
            },
        });

        // Opcional: Atualizar o status da Pessoa para EGRESSO
        await prisma.pessoa.update({
            where: { id: tokenPayload.pessoaId },
            data: { status: 'EGRESSO' }
        });

        // --- MUDANÇA FINAL: Retornar o ID do Egresso ---
        // Em vez de retornar o objeto egresso inteiro, retornamos apenas o ID,
        // que é o que o frontend precisa para o redirecionamento.
        return NextResponse.json(
            { message: 'Dados pessoais salvos com sucesso!', egressoId: novoEgresso.id },
            { status: 201 }
        );

    } catch (error: any) {
        console.error('Erro ao criar conta de egresso:', error);
        return NextResponse.json({ error: 'Erro interno no servidor.' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
