'use client';

//app/autenticacao
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from 'lucide-react';

export default function AtivarContaPage() {
    const [cpf, setCpf] = useState('');
    const [codigo, setCodigo] = useState('');
    const [erro, setErro] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleVerificar = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErro(null);

        try {
            // Esta página chama a nova API de verificação
            const response = await fetch('/api/egresso/verificar-convite', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cpf, codigo }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'CPF ou código inválido.');
            }
            
            // Se a verificação for bem-sucedida, a API retorna um token de segurança.
            const { token, nome } = data;

            // Armazenamos o token no localStorage para ser usado na próxima etapa.
            localStorage.setItem('cadastro_token', token);
            localStorage.setItem('cadastro_nome', nome);

            router.push(`/criarconta_egresso`); // Redireciona para a página onde o usuário vai definir a senha e completar o perfil.

        } catch (error: any) {
            setErro(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold tracking-tight">Ativar sua Conta</CardTitle>
                    <CardDescription className="pt-2">
                        Digite seu CPF e o código de acesso que enviamos para o seu e-mail.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleVerificar} className="space-y-6">
                        <div className="space-y-1">
                            <label htmlFor="cpf" className="text-sm font-medium">CPF</label>
                            <Input
                                id="cpf"
                                type="text"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                placeholder="000.000.000-00"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="codigo" className="text-sm font-medium">Código de Acesso</label>
                            <Input
                                id="codigo"
                                type="text"
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value.toUpperCase())}
                                placeholder="ABC12345"
                                required
                                disabled={isLoading}
                                className="text-center tracking-widest font-mono"
                            />
                        </div>
                        
                        {erro && (
                            <p className="text-sm text-red-600 text-center animate-pulse">{erro}</p>
                        )}

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verificando...</>
                            ) : ( 'Verificar e Continuar' )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
