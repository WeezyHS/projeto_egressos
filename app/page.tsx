'use client';

//app/page.tsx
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
      <Card className="w-full max-w-md p-6 shadow-xl border-none rounded-2xl bg-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">Bem-vindo ao Sistema</CardTitle>
          <p className="text-center text-sm text-gray-500 mt-2">Selecione o tipo de perfil para acessar a plataforma.</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 mt-6">
          <Button onClick={() => router.push('/login_instituicao')} className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg py-3 shadow-sm transition">Acessar como Instituição</Button>
          <Button onClick={() => router.push('/login_egresso')} className="w-full bg-green-600 hover:bg-green-700 text-white text-base font-medium rounded-lg py-3 shadow-sm transition">Acessar como Aluno</Button>
        </CardContent>
      </Card>
    </div>
  );
}