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

    const [filtroPrimeiraLetra, setFiltroPrimeiraLetra] = useState('');
    const [filtroCurso, setFiltroCurso] = useState('');
    const [filtroPais, setFiltroPais] = useState('');
    const [filtroEstado, setFiltroEstado] = useState('');
    const [filtroCidade, setFiltroCidade] = useState('');

    //const [consultEgressos, labConsultEgressos] = useState('');

    const BotaoConsultEgressos = () =>{

    }

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
            {/* <label className={styles.labConsultEgressos}>Consultar egressos:</label> */}
            </div>
            <ul className={styles.lista}>
              {egressosFiltrados.map((egresso) => (
                <li className={styles.item} key={egresso.id}>
                  <strong>{egresso.nome}</strong> — {egresso.cargoAtual}
                </li>
              ))}
            </ul>
            <button className={styles.consultEgressos} onClick={BotaoConsultEgressos}>Consultar Egressos</button>
        </div>
    );
}