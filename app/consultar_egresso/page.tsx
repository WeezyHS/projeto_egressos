'use client';

import { useEffect, useState } from 'react';

type Egresso = {
  id: number;
  cpf: string;
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  pais: string;
  fotoPerfil?: string;
  linkedin?: string;
  instagram?: string;
  cargoAtual: string;
  empresaAtual: string;
  curso: string;
  anoSemestreEntrada?: string;
  anoSemestreSaida?: string;
};

export default function ConsultarEgressoPage() {
  const [egressos, setEgressos] = useState<Egresso[]>([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    fetch('/api/egresso/lista_geral')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEgressos(data); // caso a API retorne diretamente o array no futuro
        } else if (Array.isArray(data.egressos)) {
          setEgressos(data.egressos);
        } else {
          console.error('Formato de dados inválido:', data);
        }
      })
      .catch((err) => console.error('Erro ao carregar egressos:', err));
  }, []);

  const egressosFiltrados = egressos.filter((egresso) =>
    egresso.nome.toLowerCase().includes(filtro.toLowerCase()) ||
    egresso.cargoAtual.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Consultar Egressos</h1>

      <input
        type="text"
        placeholder="Buscar por nome ou cargo"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="border p-2 rounded w-full mb-6"
      />

      <div className="grid gap-4">
        {egressosFiltrados.map((egresso) => (
          <div key={egresso.id} className="border rounded p-4 flex gap-4 items-center">
            {egresso.fotoPerfil ? (
              <img
                src={egresso.fotoPerfil}
                alt={egresso.nome}
                className="w-20 h-20 object-cover rounded-full"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm text-gray-600">Sem Foto</span>
              </div>
            )}
            <div>
              <h2 className="text-xl font-semibold">{egresso.nome}</h2>
              <p><strong>Curso:</strong> {egresso.curso}</p>
              <p><strong>Cargo:</strong> {egresso.cargoAtual}</p>
              <p><strong>Empresa:</strong> {egresso.empresaAtual}</p>
              <p><strong>Email:</strong> {egresso.email}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
