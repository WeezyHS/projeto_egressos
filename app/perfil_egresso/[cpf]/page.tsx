// app/perfil_egresso/[cpf]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import {
  Linkedin, Instagram, Phone, Mail, 
  MapPin, Briefcase, GraduationCap, Building, Calendar, User
} from 'lucide-react';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

interface Curso {
  nomeCurso: string;
  anoEntrada: string;
  anoSaida: string | null;
}

interface Egresso {
  id: number;
  cpf: string;
  nome: string | null;
  email: string;
  telefone: string | null;
  cidade: string | null;
  estado: string | null;
  pais: string | null;
  fotoPerfil: string | null;
  linkedin: string | null;
  instagram: string | null;
  trabalhoAtual: {
    empresa: string;
    cargo: string;
    anoEntrada: number;
  } | null;
  cursos: Curso[];
}

const formatarPeriodo = (anoEntrada: string, anoSaida: string | null) => {
  if (!anoSaida) return `Início em ${anoEntrada}`;
  return `${anoEntrada} - ${anoSaida}`;
};

async function buscarPerfil(cpf: string): Promise<Egresso | null> {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/egresso/${encodeURIComponent(cpf)}`;
    const res = await fetch(apiUrl, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error('[FRONTEND] Erro ao buscar perfil:', error);
    return null;
  }
}

const InfoItem = ({ icon, label, children }: { icon: ReactNode, label: string, children: ReactNode }) => ( // Componente auxiliar para padronizar itens de informação
  <div className="flex items-start gap-3">
    <div className="text-slate-500 mt-1">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="text-md text-slate-800">{children}</p>
    </div>
  </div>
);

export default async function PerfilEgressoPage({ params }: { params: { cpf: string } }) { // Componente da Página
  const resolvedParams = await params; 
  const perfil = await buscarPerfil(resolvedParams.cpf);

  if (!perfil) {
    notFound(); // Usando a página 404 padrão do Next.js
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto py-8 px-4">
        {/* --- Card Principal do Perfil --- */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Banner e Avatar */}
          <div className="relative">
            <div className="h-40 bg-gradient-to-r from-slate-800 to-slate-600" />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-16">
               <div className="relative w-32 h-32 rounded-full overflow-hidden border-8 border-white shadow-md">
                 <Image src={perfil.fotoPerfil || '/images/avatar-default.png'} alt={`Foto de ${perfil.nome || 'Egresso'}`} fill className="object-cover" sizes="128px" priority/>
               </div>
            </div>
          </div>
          {/* Nome, Título e Redes Sociais */}
          <div className="pt-20 pb-6 text-center border-b border-slate-200">
            <h1 className="text-4xl font-bold text-slate-800">{perfil.nome || 'Nome não informado'}</h1>
            {perfil.trabalhoAtual && (<p className="text-md text-slate-500 mt-1">{perfil.trabalhoAtual.cargo}</p>)}
            <div className="flex justify-center gap-4 mt-4">
              {perfil.linkedin && (<Link href={perfil.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn"><Linkedin size={28}/></Link>)}
              {perfil.instagram && (<Link href={`https://instagram.com/${perfil.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-600 transition-colors" aria-label="Instagram"><Instagram size={28}/></Link>)}
            </div>
          </div>
          {/* --- Corpo do Perfil (Grid de 2 Colunas) --- */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coluna Esquerda */}
            <div className="md:col-span-1 flex flex-col gap-8">
              {perfil.trabalhoAtual && (
                <section>
                  <h2 className="text-lg font-bold text-slate-700 mb-4">Experiência Atual</h2>
                  <div className="space-y-4">
                    <InfoItem icon={<User size={20} />} label="Cargo">{perfil.trabalhoAtual.cargo}</InfoItem>
                    <InfoItem icon={<Building size={20} />} label="Empresa">{perfil.trabalhoAtual.empresa}</InfoItem>
                    <InfoItem icon={<Calendar size={20} />} label="Desde">{perfil.trabalhoAtual.anoEntrada}</InfoItem>
                  </div>
                </section>
              )}
              {perfil.cursos?.length > 0 && (
                <section>
                  <h2 className="text-lg font-bold text-slate-700 mb-4">Formação Acadêmica</h2>
                  <div className="space-y-4">
                    {perfil.cursos.map((curso, index) => (<InfoItem key={index} icon={<GraduationCap size={20}/>} label={curso.nomeCurso}>{formatarPeriodo(curso.anoEntrada, curso.anoSaida)}</InfoItem>))}
                  </div>
                </section>
              )}
            </div>
            {/* Coluna Direita */}
            <div className="md:col-span-2">
              <section>
                  <h2 className="text-lg font-bold text-slate-700 mb-4">Contato e Localização</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    <InfoItem icon={<Mail size={20} />} label="Email">
                      <a href={`mailto:${perfil.email}`} className="text-blue-600 hover:underline break-all">{perfil.email}</a>
                    </InfoItem>
                    {perfil.telefone && (<InfoItem icon={<Phone size={20} />} label="Telefone">{perfil.telefone}</InfoItem>)}
                    {perfil.cidade && (<InfoItem icon={<MapPin size={20} />} label="Cidade">{perfil.cidade}</InfoItem>)}
                     {perfil.estado && (<InfoItem icon={<MapPin size={20} />} label="Estado">{perfil.estado}</InfoItem>)}
                     {perfil.pais && (<InfoItem icon={<MapPin size={20} />} label="País">{perfil.pais}</InfoItem>)}
                  </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}