// 'use client';

// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import styles from './perfil.module.css'; // O nome do CSS agora está correto

// interface Pessoa {
//   id: number;
//   nome: string;
//   cpf: string;
//   email: string;
//   telefone?: string;
//   cidade: string;
//   estado: string;
//   pais: string;
//   cursos: {
//     nomeCurso: string;
//     anoEntrada: string;
//     anoSaida: string | null;
//   }[];
//   linkedin?: string;
//   instagram?: string;
//   fotoPerfil?: string;
// }

// interface Egresso {
//   id: number;
//   cpf: string;
//   email: string;
//   telefone: string;
//   cidade: string;
//   estado: string;
//   pais: string;
//   cargoAtual: string;
//   empresaAtual: string;
//   linkedin?: string;
//   instagram?: string;
//   fotoPerfil?: string;
// }

// export default function PerfilEgresso() {
//   const { id } = useParams<{ id: string }>(); // 👈 adicionei o tipo para o id
//   const [pessoa, setPessoa] = useState<Pessoa | null>(null);
//   const [egresso, setEgresso] = useState<Egresso | null>(null);

//   useEffect(() => {
//     const pessoasStorage = localStorage.getItem('pessoas');
//     const egressosStorage = localStorage.getItem('egressos');

//     if (pessoasStorage && egressosStorage && id) {
//       const pessoas: Pessoa[] = JSON.parse(pessoasStorage);
//       const egressos: Egresso[] = JSON.parse(egressosStorage);

//       const pessoaEncontrada = pessoas.find(p => p.id === Number(id));
//       const egressoEncontrado = egressos.find(e => e.id === Number(id));

//       setPessoa(pessoaEncontrada || null);
//       setEgresso(egressoEncontrado || null);
//     }
//   }, [id]);

//   if (!pessoa) {
//     return <div className={styles.container}>Carregando perfil...</div>; // 👈 Troquei para .container pra manter o padrão
//   }

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.titulo}>{pessoa.nome}</h1>

//       {pessoa.fotoPerfil && (
//         <img src={pessoa.fotoPerfil} alt="Foto de Perfil" className={styles.fotoPerfil} />
//       )}

//       <div className={styles.secao}>
//         <p><strong>Email:</strong> {pessoa.email}</p>
//         <p><strong>Telefone:</strong> {pessoa.telefone || 'Não informado'}</p>
//         <p><strong>Localização:</strong> {pessoa.cidade}, {pessoa.estado}, {pessoa.pais}</p>

//         {egresso && (
//           <>
//             <p><strong>Cargo Atual:</strong> {egresso.cargoAtual}</p>
//             <p><strong>Empresa Atual:</strong> {egresso.empresaAtual}</p>
//           </>
//         )}

//         {(pessoa.linkedin || pessoa.instagram) && (
//           <>
//             <p><strong>Links:</strong></p>
//             <ul>
//               {pessoa.linkedin && (
//                 <li><a href={pessoa.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
//               )}
//               {pessoa.instagram && (
//                 <li><a href={pessoa.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
//               )}
//             </ul>
//           </>
//         )}
//       </div>

//       <div className={styles.secao}>
//         <h2>Cursos</h2>
//         <ul>
//           {pessoa.cursos.map((curso, index) => (
//             <li key={index}>
//               {curso.nomeCurso} — {curso.anoEntrada} até {curso.anoSaida || 'ATUALMENTE'}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface PerfilEgressoData {
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

export default function PerfilEgresso() {
  const { id } = useParams();
  const [perfil, setPerfil] = useState<PerfilEgressoData | null>(null);

  useEffect(() => {
    const buscarPerfil = async () => {
      if (!id) return;

      try {
        const response = await fetch(`/api/egresso/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPerfil(data);
        } else {
          console.error('Erro ao buscar perfil:', response.status);
        }
      } catch (error) {
        console.error('Erro de conexão:', error);
      }
    };

    buscarPerfil();
  }, [id]);

  if (!perfil) {
    return <div>Carregando perfil...</div>;
  }

  return (
    <div>
      <h1>Perfil do Egresso</h1>
      <p><strong>CPF:</strong> {perfil.cpf}</p>
      <p><strong>Email:</strong> {perfil.email}</p>
      <p><strong>Telefone:</strong> {perfil.telefone}</p>
      <p><strong>Cidade:</strong> {perfil.cidade}</p>
      <p><strong>Estado:</strong> {perfil.estado}</p>
      <p><strong>País:</strong> {perfil.pais}</p>
      <p><strong>Cargo Atual:</strong> {perfil.cargoAtual}</p>
      <p><strong>Empresa Atual:</strong> {perfil.empresaAtual}</p>
      {perfil.linkedin && <p><strong>LinkedIn:</strong> {perfil.linkedin}</p>}
      {perfil.instagram && <p><strong>Instagram:</strong> {perfil.instagram}</p>}
    </div>
  );
}
