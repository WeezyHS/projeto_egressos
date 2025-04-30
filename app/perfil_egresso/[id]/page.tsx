import { notFound } from 'next/navigation';
import styles from './perfil_egresso.module.css';

interface TrabalhoAtualData {
  id: number;
  empresa: string;
  cidade: string;
  estado: string;
  pais: string;
  cargo: string;
  anoEntrada: number;
  egressoId: number;
}

interface PerfilEgressoData {
  id: number;
  cpf: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  pais: string;
  fotoPerfil?: string;
  linkedin?: string;
  instagram?: string;
  nomeCompleto?: string;
  trabalhoAtual: TrabalhoAtualData | null;
}

async function buscarPerfil(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/egresso/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data as PerfilEgressoData;
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    return null;
  }
}

export default async function PerfilEgressoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const perfil = await buscarPerfil(id);
  if (!perfil) notFound();

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.profileLeft}>
          <img
            src={perfil.fotoPerfil || '/default-user.png'}
            alt="Foto de perfil"
            className={styles.profilePhoto}
          />
        </div>

        <div className={styles.profileRight}>
          <h2 className={styles.titulo}>{perfil.nomeCompleto || 'Nome não informado'}</h2>

          <div className={styles.secao}>
            <p><span className={styles.labEmail}>Email:</span> <span className={styles.email}>{perfil.email}</span></p>
            <p><span className={styles.labTelefone}>Telefone:</span> <span className={styles.telefone}>{perfil.telefone}</span></p>
          </div>

          {perfil.linkedin && (
            <div className={`${styles.secao} ${styles.linkedin}`}>
              <p><span className={styles.labLinkedin}>LinkedIn:</span> <a href={perfil.linkedin} target="_blank">{perfil.linkedin}</a></p>
            </div>
          )}

          {perfil.instagram && (
            <div className={`${styles.secao} ${styles.instagram}`}>
              <p><span className={styles.labInstagram}>Instagram:</span> <a href={perfil.instagram} target="_blank">{perfil.instagram}</a></p>
            </div>
          )}

          {perfil.trabalhoAtual && (
            <div className={styles.secao}>
              <p><span className={styles.labEmpresaAtual}>Empresa:</span> <span className={styles.trabalhoAtual}>{perfil.trabalhoAtual.empresa}</span></p>
              <p><span className={styles.labCargoAtual}>Cargo:</span> <span className={styles.cargoAtual}>{perfil.trabalhoAtual.cargo}</span></p>
              <p><span className={styles.labCidade}>Local:</span> <span className={styles.cidade}>{perfil.trabalhoAtual.cidade}, {perfil.trabalhoAtual.estado}, {perfil.trabalhoAtual.pais}</span></p>
              <p><span className={styles.labAnoEntrada}>Ano de entrada:</span> <span className={styles.anoEntrada}>{perfil.trabalhoAtual.anoEntrada}</span></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}