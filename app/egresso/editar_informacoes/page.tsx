// app/editarperfil_instituicao/page.tsx
'use client';

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function EditarPerfilInstituicao() {
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSalvar = () => {
    //Lógica de envio para o banco de dados ou API
    console.log('Nome:', nome);
    console.log('Foto:', foto);
  };

  return (
    <div className="flex flex-col justify-center p-6">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6 p-6">
          <h2 className="text-xl font-bold text-center">Editar Perfil</h2>

          <div className="flex flex-col items-center gap-2">
            {preview ? (<Image src={preview} alt="Foto de perfil" width={120} height={120} className="rounded-full object-cover"/>) : (<div className="w-[120px] h-[120px] rounded-full bg-gray-200 flex items-center justify-center text-gray-500">Sem imagem</div>)}
            <Input type="file" accept="image/*" onChange={handleFotoChange}/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Telefone</label>
            <Input value={nome} onChange={handleNomeChange} placeholder="Digite o nome"/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Senha</label>
            <Input value={nome} onChange={handleNomeChange} placeholder="Digite o nome"/>
          </div>
          <Button className="w-full" onClick={handleSalvar}>Salvar Alterações</Button>
        </CardContent>
      </Card><br/>
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6 p-6">
          <div>
            <label className="block mb-1 font-medium">Linkedin</label>
            <Input value={nome} onChange={handleNomeChange} placeholder="Digite o nome"/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Instagram</label>
            <Input value={nome} onChange={handleNomeChange} placeholder="Digite o nome"/>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}