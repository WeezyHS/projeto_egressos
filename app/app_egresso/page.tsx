'use client';

import styles from './app_egresso.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Egresso{
    id: number;
    nome: string;
    cargoAtual: string;
}

export default function App_Egresso(){
    const [egressos, setEgressos] = useState<Egresso[]>([]);
    const [filtroNome, setFiltroNome] = useState('');
    const [filtroCargo, setFiltroCargo] = useState('');

    const [consultEgressos, labConsultEgressos] = useState('');

    useEffect(() =>{ //Simulação da lista de egressos com filtragem, ainda para desenvolver conectado ao banco de dados
        const dadosSimulacao: Egresso[] = [
            { id: 1, nome: 'João Silva', cargoAtual: 'Engenheiro de Software' },
            { id: 2, nome: 'Maria Oliveira', cargoAtual: 'Analista de Dados' },
            { id: 3, nome: 'Carlos Pereira', cargoAtual: 'Gerente de Projetos' }
        ];
        setEgressos(dadosSimulacao);
    }, []);

    const egressosFiltrados = egressos.filter((egresso) =>
        egresso.nome.toLowerCase().includes(filtroNome.toLowerCase()) &&
        egresso.cargoAtual.toLowerCase().includes(filtroCargo.toLowerCase())
      );

    return(
        <div className={styles.container}>
            <h1 className={styles.titulo}>DESENVOLVENDO...</h1>
            <div className={styles.filtros}>
              <label className={styles.labFiltroNome}>Pesquisar nome:</label>
              <input className={styles.filtroNome} type="text" placeholder="Pesquisar por nome..." value={filtroNome} onChange={(e) => setFiltroNome(e.target.value)}/>
              <label className={styles.labFiltroCargo}>Pesquisar cargo:</label>
              <input className={styles.filtroCargo} type="text" placeholder="Pesquisar por cargo..." value={filtroCargo} onChange={(e) => setFiltroCargo(e.target.value)}/>
            </div>
            <div className={styles.campo}>
            <label className={styles.labConsultEgressos}>Consultar egressos:</label>
            </div>
            <ul className={styles.lista}>
              {egressosFiltrados.map((egresso) => (
                <li className={styles.item} key={egresso.id}>
                  <strong>{egresso.nome}</strong> — {egresso.cargoAtual}
                </li>
              ))}
            </ul>
        </div>
    );
}