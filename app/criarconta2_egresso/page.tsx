'use client';

import styles from './criarconta2_egresso.module.css';
import { useState } from 'react';

export default function CriarContaEgresso2(){
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cidadeEmpresa, setCidadeEmpresa] = useState('');
    const [estadoEmpresa, setEstadoEmpresa] = useState('');
    const [paisEmpresa, setPaisEmpresa] = useState('');
    const [cargo, setCargo] = useState('');
    const [anoEntrada, setAnoEntrada] = useState('');
    const [visivel, setVisivel] = useState(true);

    const handleFinalizar = () =>{
        if (!nomeEmpresa || !cidadeEmpresa || !estadoEmpresa || !paisEmpresa || !cargo || !anoEntrada) {
            alert('Preencha todos os campos!');
            return;
        }
        alert("Informações salvas!");
        //router.push("/app_aluno");
    }
    return(
        <div className={styles.container}>
        <h1 className={styles.titulo}>PARA DESENVOLVER!!!</h1>
        <div className={styles.duasColunas}>
            <div className={styles.campo}>
                <label className={styles.labNomeEmpresa}>Nome da empresa:</label>
                <input className={styles.nomeEmpresa} type="text" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} />
            </div>
            <div className={styles.campo}>
                <label className={styles.labCidadeEmpresa}>Cidade da empresa:</label>
                <input className={styles.cidadeEmpresa} type="text" value={cidadeEmpresa} onChange={(e) => setCidadeEmpresa(e.target.value)} />
            </div>
            <div className={styles.campo}>
                <label className={styles.labEstadoEmpresa}>Estado da empresa:</label>
                <input className={styles.estadoEmpresa} type="text" value={estadoEmpresa} onChange={(e) => setEstadoEmpresa(e.target.value)} />
            </div>
            <div className={styles.campo}>
                <label className={styles.labPaisEmpresa}>País da empresa:</label>
                <input className={styles.paisEmpresa} type="text" value={paisEmpresa} onChange={(e) => setPaisEmpresa(e.target.value)} />
            </div>
            <div className={styles.campo}>
                <label className={styles.labCargo}>Nome do cargo/função:</label>
                <input className={styles.cargo} type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />
            </div>
            <div className={styles.campo}>
                <label className={styles.labAnoEntrada}>Ano de entrada na empresa:</label>
                <input className={styles.anoEntrada} type="text" value={anoEntrada} onChange={(e) => setAnoEntrada(e.target.value)} />
            </div>
            <div className={styles.visivel}>
                <label><input type="checkbox" checked={visivel} onChange={() => setVisivel(!visivel)}/> Deixar minhas informações visíveis para outros usuários.</label>
            </div>
            <button className={styles.Finalizar} onClick={handleFinalizar}>Finalizar</button>
        </div>
        </div>
    );
}