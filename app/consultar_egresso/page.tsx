'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Eye } from 'lucide-react';

interface Egresso {
  id: number;
  cpf: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  pais: string;
  cargoAtual: string;
  empresaAtual: string;
  fotoPerfil?: string;
  linkedin?: string;
  instagram?: string;
}

export default function Consultar_Egresso() {
  const [egressos, setEgressos] = useState<Egresso[]>([]);
  const [filtroCargo, setFiltroCargo] = useState('');
  const [filtroPais, setFiltroPais] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('');
  const [filtroCidade, setFiltroCidade] = useState('');

  const router = useRouter();

  const buscarEgressos = async () => {
    const egressoLogadoId = localStorage.getItem('egressoId');

    if (egressoLogadoId && !isNaN(Number(egressoLogadoId))) {
      try {
        const response = await fetch('/api/egresso/lista_egressos', {
          headers: {
            'X-Egresso-ID': egressoLogadoId,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setEgressos(data.egressos || []);
          localStorage.setItem('egressos', JSON.stringify(data.egressos || []));
        } else {
        }
      } catch (error) {
      }
    } else {
    }
  };

  useEffect(() => {
    buscarEgressos();
  }, []);

  const visualizarPerfil = (egressoId: number) => {
    router.push(`/perfil_egresso/${egressoId}`);
  };

  const egressosFiltrados = egressos.filter((egresso) => {
    return (
      (!filtroCargo || egresso.cargoAtual?.toLowerCase().includes(filtroCargo.toLowerCase())) &&
      (!filtroPais || egresso.pais?.toLowerCase().includes(filtroPais.toLowerCase())) &&
      (!filtroEstado || egresso.estado?.toLowerCase().includes(filtroEstado.toLowerCase())) &&
      (!filtroCidade || egresso.cidade?.toLowerCase().includes(filtroCidade.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/formatura.jpg')" }}>
      <div className="p-6 sm:p-10 max-w-6xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg">
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold">Consulta de Egressos</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-[16px] font-medium text-gray-700">Cargo:</label>
              <input className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" value={filtroCargo} onChange={e => setFiltroCargo(e.target.value)}/>

              <label className="block text-[16px] font-medium text-gray-700">País:</label>
              <input className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" value={filtroPais} onChange={e => setFiltroPais(e.target.value)}/>

              <label className="block text-[16px] font-medium text-gray-700">Estado:</label>
              <input className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" value={filtroEstado} onChange={e => setFiltroEstado(e.target.value)}/>

              <label className="block text-[16px] font-medium text-gray-700">Cidade:</label>
              <input className="w-full px-4 py-2 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" value={filtroCidade} onChange={e => setFiltroCidade(e.target.value)}/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Egressos</h2>
              <ul className="space-y-4">
                {egressosFiltrados.map((egresso) => (
                  <li key={egresso.id} className="border rounded p-4 shadow-sm">
                    <p><strong>CPF:</strong> {egresso.cpf}</p>
                    <p><strong>Email:</strong> {egresso.email}</p>
                    <p><strong>Cargo:</strong> {egresso.cargoAtual || 'Não informado'}</p>
                    <p><strong>Empresa:</strong> {egresso.empresaAtual || 'Não informado'}</p>
                    <p><strong>Local:</strong> {`${egresso.cidade}, ${egresso.estado}, ${egresso.pais}`}</p>
                    {egresso.linkedin && <p><strong>LinkedIn:</strong> {egresso.linkedin}</p>}
                    {egresso.instagram && <p><strong>Instagram:</strong> {egresso.instagram}</p>}
                    <button onClick={() => visualizarPerfil(egresso.id)} title="Visualizar Perfil" className="mt-2 inline-flex items-center gap-2 text-blue-600 hover:underline"><Eye size={20}/> Visualizar Perfil</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}