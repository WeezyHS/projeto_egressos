'use client';

import { useRouter } from 'next/navigation';

export default function EscolhaPerfil() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Escolha seu perfil</h1>
      <div className="space-y-4">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition" onClick={() => router.push('/login_instituicao')}>Instituição</button><br/>
        <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition" onClick={() => router.push('/login_egresso')}>Aluno</button>
      </div>
    </div>
  );
}
