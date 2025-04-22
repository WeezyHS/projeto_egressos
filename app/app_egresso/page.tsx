'use client';

import styles from './app_egresso.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Egresso{
    id: number;
    nome: string;
    cargoAtual: string;
    curso: string;
    cidade: string;
    estado: string;
    pais: string;
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

    const buscarEgressos = async () => {

      const egressoLogadoId = localStorage.getItem('egressoId');

      if (egressoLogadoId && !isNaN(Number(egressoLogadoId))) {
        try {
          const response = await fetch('/api/egresso/lista_egressos', {
            headers: {
              'X-Egresso-ID': egressoLogadoId, // Sua função para obter o ID
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log("Dados recebidos da API:", data);
            console.log("Estado egressos após atualização:", egressos);
            setEgressos(data); // Atualiza o estado com a lista de egressos do backend
          } else {
            console.error('Erro ao buscar egressos:', response.status);
            // Tratar o erro (exibir uma mensagem para o usuário, etc.)
          }
        } catch (error) {
          console.error('Erro de conexão ao buscar egressos:', error);
          // Tratar o erro de conexão
        }
      } else {
        console.error("ID do egresso não encontrado localmente.");
      }
  };

    const BotaoConsultEgressos = () =>{
      buscarEgressos();
    }

    const egressosFiltrados = egressos.filter((egresso) => {
      return (
        (!filtroNome || egresso.nome?.toLowerCase().includes(filtroNome.toLowerCase())) &&
        (!filtroCargo || egresso.cargoAtual?.toLowerCase().includes(filtroCargo.toLowerCase())) &&
        (!filtroCurso || egresso.curso?.toLowerCase().includes(filtroCurso.toLowerCase())) &&
        (!filtroPais || egresso.pais?.toLowerCase().includes(filtroPais.toLowerCase())) &&
        (!filtroEstado || egresso.estado?.toLowerCase().includes(filtroEstado.toLowerCase())) &&
        (!filtroCidade || egresso.cidade?.toLowerCase().includes(filtroCidade.toLowerCase())) &&
        (!filtroPrimeiraLetra || egresso.nome?.toLowerCase().startsWith(filtroPrimeiraLetra.toLowerCase()))
      );
    });
    

    useEffect(() => {
      console.log("Estado atualizado de egressos:", egressos);
    }, [egressos]);

    return(
        <div className={styles.container}>
            <h1 className={styles.titulo}>DESENVOLVENDO...</h1>
            <div className={styles.filtros}>
              <label className={styles.labFiltroNome}>Pesquisar nome:</label>
              <input className={styles.filtroNome} type="text" placeholder="Pesquisar por nome..." value={filtroNome} onChange={(e) => setFiltroNome(e.target.value)}/>
              <label className={styles.labFiltroCargo}>Pesquisar cargo:</label>
              <input className={styles.filtroCargo} type="text" placeholder="Pesquisar por cargo..." value={filtroCargo} onChange={(e) => setFiltroCargo(e.target.value)}/>
              <div className={styles.listaFiltro}>
              <label>Primeira letra do nome:</label>
              <input type="text" placeholder="Ex: A" value={filtroPrimeiraLetra} onChange={(e) => setFiltroPrimeiraLetra(e.target.value)} />

              <label>Curso:</label>
              <input type="text" placeholder="Filtrar por curso" value={filtroCurso} onChange={(e) => setFiltroCurso(e.target.value)} />

              <label>País:</label>
              <input type="text" placeholder="Filtrar por país" value={filtroPais} onChange={(e) => setFiltroPais(e.target.value)} />

              <label>Estado:</label>
              <input type="text" placeholder="Filtrar por estado" value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)} />

              <label>Cidade:</label>
              <input type="text" placeholder="Filtrar por cidade" value={filtroCidade} onChange={(e) => setFiltroCidade(e.target.value)} />
              </div>
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