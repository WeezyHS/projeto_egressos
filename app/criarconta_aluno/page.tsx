'use client';

import styles from './criarconta_aluno.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CriarContaAluno(){
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const router = useRouter();

    const validacaoCPF = (cpf: string) => {
        cpf = cpf.replace(/[^\d]+/g, "");

        if (cpf.length !== 11 || /[^\d]+/g.test(cpf)) return false;

        let soma = 0;
        for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
        let resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;

        soma = 0;
        for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(10))) return false;

        return true;
    }

    const handleCadastrar = () =>{
        if (!camposVazios()) return;
        router.push("/app_aluno");
    }

    const camposVazios = () => {
        if (!cpf || !senha){
            alert("Preencha todos os campos!");
            return false;
        }
        if (!validacaoCPF(cpf)){
            alert("CPF inválido!");
            return false;
        }
        if (senha.length < 8){
            alert("A senha deve ter no mínimo 8 caracteres!");
            return false;
        }
        return true;
    };

    return(
        <div className={styles.container}>
            <h1 className={styles.titulo}>Criar Conta</h1>
            <label className={styles.labCpf} htmlFor="cpf">CPF:</label>
        <input className={styles.cpf} type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
        <label className={styles.labSenha} htmlFor="senha">Senha:</label>
        <input className={styles.senha} type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

        <button className={styles.Cadastrar} onClick={handleCadastrar}>Cadastrar</button>
        </div>
    );
}