'use client';

import styles from './criarconta2_egresso.module.css';
import { useState } from 'react';

export default function CriarContaEgresso2(){
    const [empresa, setEmpresa] = useState('');
    const [cidadeEmpresa, setCidadeEmpresa] = useState('');
    const [estadoEmpresa, setEstadoEmpresa] = useState('');
    const [paisEmpresa, setPaisEmpresa] = useState('');
    const [cargo, setCargo] = useState('');
    const [anoEntrada, setAnoEntrada] = useState('');

    const handleCadastrar = () =>{
        if (!empresa || !cidadeEmpresa || !estadoEmpresa || !paisEmpresa || !cargo || !anoEntrada) {
            alert('Preencha todos os campos!');
            return;
        }
        alert("Informações salvas!");
    }
    return(
        <div className={styles.container}>
        <h1 className={styles.titulo}>PARA DESENVOLVER!!!</h1>
        <div className={styles.duasColunas}>

        </div>
        </div>
    );
}