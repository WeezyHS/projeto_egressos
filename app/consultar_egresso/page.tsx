'use client';

import { useState, useEffect, useMemo } from 'react'; // Adicionado useMemo
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
          const egressosData = data.egressos || [];
          setEgressos(egressosData);
          // Salva no localStorage para possível uso futuro ou cache simples
          localStorage.setItem('egressos', JSON.stringify(egressosData));
        } else {
          console.error('Erro ao buscar egressos:', response.statusText);
        }
      } catch (error) {
        console.error('Erro de conexão ao buscar egressos:', error);
      }
    } else {
      console.warn('ID do egresso não encontrado ou inválido no localStorage.');
    }
  };

  useEffect(() => {
    // Opcional: Carregar do localStorage para uma exibição inicial mais rápida
    const egressosSalvos = localStorage.getItem('egressos');
    if (egressosSalvos) {
      try {
        setEgressos(JSON.parse(egressosSalvos));
      } catch (e) {
        console.error("Erro ao parsear egressos do localStorage", e);
        localStorage.removeItem('egressos'); // Limpa se estiver corrompido
      }
    }
    buscarEgressos(); // Busca os dados mais recentes da API
  }, []);

  // Derivar listas de opções para os dropdowns
  const paisesUnicos = useMemo(() => {
    if (!egressos || egressos.length === 0) return [];
    // Filtra para garantir que e.pais é uma string não vazia antes de adicionar ao Set
    const distinctPaises = new Set(egressos.map(e => e.pais).filter(pais => typeof pais === 'string' && pais.trim() !== ''));
    return Array.from(distinctPaises).sort();
  }, [egressos]);

  const estadosOpcoes = useMemo(() => {
    if (!filtroPais || !egressos || egressos.length === 0) return [];
    const states = new Set(
      egressos
        .filter(e => e.pais === filtroPais && typeof e.estado === 'string' && e.estado.trim() !== '')
        .map(e => e.estado)
    );
    return Array.from(states).sort();
  }, [egressos, filtroPais]);

  const cidadesOpcoes = useMemo(() => {
    if (!filtroEstado || !filtroPais || !egressos || egressos.length === 0) return [];
    const cities = new Set(
      egressos
        .filter(e => e.pais === filtroPais && e.estado === filtroEstado && typeof e.cidade === 'string' && e.cidade.trim() !== '')
        .map(e => e.cidade)
    );
    return Array.from(cities).sort();
  }, [egressos, filtroPais, filtroEstado]);

  // Efeitos para resetar os filtros filhos quando um pai é alterado
  useEffect(() => {
    setFiltroEstado(''); // Reseta o estado quando o país muda
    setFiltroCidade(''); // Reseta a cidade quando o país muda
  }, [filtroPais]);

  useEffect(() => {
    setFiltroCidade(''); // Reseta a cidade quando o estado muda
  }, [filtroEstado]);

  const visualizarPerfil = (egressoId: number) => {
    router.push(`/perfil_egresso/${egressoId}`);
  };

  const egressosFiltrados = egressos.filter((egresso) => {
    // Assegura que a comparação de filtros seja feita de forma consistente (ex: case-insensitive)
    // e que o campo do egresso exista antes de tentar acessá-lo.
    const cargoMatch = !filtroCargo || (egresso.cargoAtual && egresso.cargoAtual.toLowerCase().includes(filtroCargo.toLowerCase()));
    const paisMatch = !filtroPais || (egresso.pais && egresso.pais === filtroPais); // Comparação exata para dropdown
    const estadoMatch = !filtroEstado || (egresso.estado && egresso.estado === filtroEstado); // Comparação exata
    const cidadeMatch = !filtroCidade || (egresso.cidade && egresso.cidade === filtroCidade); // Comparação exata

    return cargoMatch && paisMatch && estadoMatch && cidadeMatch;
  });

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/formatura.jpg')" }}>
      <div className="p-6 sm:p-10 max-w-6xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg">
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Consulta de Egressos</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Aumentei o gap para melhor espaçamento */}
            <div className="space-y-4"> {/* Aumentei o space-y */}
              <div>
                <label htmlFor="filtroCargo" className="block text-[16px] font-medium text-gray-700 mb-1">Cargo:</label>
                <input
                  id="filtroCargo"
                  className="w-full px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  type="text"
                  value={filtroCargo}
                  onChange={e => setFiltroCargo(e.target.value)}
                  placeholder="Digite o cargo"
                />
              </div>

              <div>
                <label htmlFor="filtroPais" className="block text-[16px] font-medium text-gray-700 mb-1">País:</label>
                <select
                  id="filtroPais"
                  className="w-full px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white"
                  value={filtroPais}
                  onChange={e => setFiltroPais(e.target.value)}
                >
                  <option value="">Todos</option>
                  {paisesUnicos.map(pais => (
                    <option key={pais} value={pais}>{pais}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4"> {/* Div para alinhar os próximos filtros */}
              <div>
                <label htmlFor="filtroEstado" className="block text-[16px] font-medium text-gray-700 mb-1">Estado:</label>
                <select
                  id="filtroEstado"
                  className="w-full px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white"
                  value={filtroEstado}
                  onChange={e => setFiltroEstado(e.target.value)}
                  disabled={!filtroPais || estadosOpcoes.length === 0} // Desabilita se não houver país selecionado ou estados
                >
                  <option value="">{filtroPais ? 'Todos' : 'Selecione um País primeiro'}</option>
                  {estadosOpcoes.map(estado => (
                    <option key={estado} value={estado}>{estado}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="filtroCidade" className="block text-[16px] font-medium text-gray-700 mb-1">Cidade:</label>
                <select
                  id="filtroCidade"
                  className="w-full px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white"
                  value={filtroCidade}
                  onChange={e => setFiltroCidade(e.target.value)}
                  disabled={!filtroEstado || cidadesOpcoes.length === 0} // Desabilita se não houver estado selecionado ou cidades
                >
                  <option value="">{filtroEstado ? 'Todas' : 'Selecione um Estado primeiro'}</option>
                  {cidadesOpcoes.map(cidade => (
                    <option key={cidade} value={cidade}>{cidade}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8"> {/* Adicionado margem superior */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Egressos Encontrados</h2>
            {egressosFiltrados.length > 0 ? (
              <ul className="space-y-6">
                {egressosFiltrados.map((egresso) => (
                  <li key={egresso.id} className="border rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      {egresso.fotoPerfil ? (
                        <img src={egresso.fotoPerfil} alt={`Foto de ${egresso.cpf}`} className="w-16 h-16 rounded-full mr-4 object-cover" />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-2xl font-semibold mr-4">
                          {/* Pega as iniciais, por exemplo, do CPF ou email se o nome não estiver disponível */}
                          {egresso.email ? egresso.email.substring(0,1).toUpperCase() : egresso.cpf.substring(0,1)}
                        </div>
                      )}
                      <div>
                        {/* Idealmente você teria o nome do Egresso aqui */}
                        <p className="text-lg font-semibold text-gray-900">CPF: {egresso.cpf}</p>
                        <p className="text-sm text-gray-600">Email: {egresso.email}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <p><strong className="font-medium text-gray-700">Cargo:</strong> {egresso.cargoAtual || 'Não informado'}</p>
                      <p><strong className="font-medium text-gray-700">Empresa:</strong> {egresso.empresaAtual || 'Não informado'}</p>
                      <p><strong className="font-medium text-gray-700">Local:</strong> {`${egresso.cidade || 'N/A'}, ${egresso.estado || 'N/A'}, ${egresso.pais || 'N/A'}`}</p>
                      {egresso.telefone && <p><strong className="font-medium text-gray-700">Telefone:</strong> {egresso.telefone}</p>}
                      {egresso.linkedin && <p><strong className="font-medium text-gray-700">LinkedIn:</strong> <a href={egresso.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{egresso.linkedin}</a></p>}
                      {egresso.instagram && <p><strong className="font-medium text-gray-700">Instagram:</strong> <a href={`https://instagram.com/${egresso.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{egresso.instagram}</a></p>}
                    </div>
                    <button 
                      onClick={() => visualizarPerfil(egresso.id)} 
                      title="Visualizar Perfil" 
                      className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <Eye size={18}/> Visualizar Perfil Completo
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-600 py-8">Nenhum egresso encontrado com os filtros aplicados.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}