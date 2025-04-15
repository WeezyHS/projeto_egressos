'use client';

import styles from './criarconta_egresso.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';

export default function CriarContaEgresso(){
    const [fotoPerfil, SetFotoPerfil] = useState<File | null>(null);
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');
    const [redesSociais, setRedesSociais] = useState({ linkedin: '', instagram: '' });

    const [erro, setErro] = useState('');
    const router = useRouter();

    const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files?.[0];
        if (file){
            SetFotoPerfil(file);
        }
    };

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

    const gerarCodigo = () =>{
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    const handleProximo = async () =>{
        if (!camposVazios()) return;

        try{
            const formData = new FormData();
            formData.append('fotoPerfil', fotoPerfil as Blob);
            formData.append('cpf', cpf);
            formData.append('senha', senha);
            formData.append('telefone', telefone);
            formData.append('email', email);
            formData.append('cidade', cidade);
            formData.append('estado', estado);
            formData.append('pais', pais);
            formData.append('linkedin', redesSociais.linkedin);
            formData.append('instagram', redesSociais.instagram);

            const response = await fetch("/api/egresso/criar_conta", {
                method: "POST",
                body: formData,
            });

            if (!response.ok){
                const errorData = await response.json();
                alert(errorData.error || "Erro ao criar conta!");
                return;
            }

            const successData = await response.json();
            console.log("Egresso criado:", successData.egresso);

            const novoEgressoId = successData.egresso.id; // Acessa o ID do egresso criado

            const codigo = gerarCodigo();
            const templateParams = {
                to_email: email,
                codigo_acesso: codigo,
            };

            emailjs.send("service_rqwpj7q", "template_12nvjhg", templateParams, "Ygc6WQijXU3rWrMEV") //Envia código por e-mail
                .then(() => {
                //   alert("Código enviado por e-mail.");
                router.push(`/criarconta2_egresso?id=${novoEgressoId}`);
                })
                .catch((error) => {
                    console.error("Erro ao enviar e-mail:", error);
                    alert("Erro ao enviar o código. Tente novamente!");
                });
        } catch (error){
            console.log("Erro ao conectar com o servidor", error);
            alert("Erro ao enviar o código. Tente novamente.");
        }
    };

    const camposVazios = () => {
        if (!fotoPerfil || !cpf || !senha || !telefone || !cidade || !estado || !pais){
            alert("Preencha todos os campos obrigatórios!");
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
            <div className={styles.duasColunas}>
                <div className={styles.campo}>
                    <label className={styles.labFoto}>Foto de perfil:*</label>
                    <input className={styles.foto} id="foto_perfil" type="file" accept="image/*" onChange={handleFotoChange} style={{ display:"none" }}/>
                    <label className={styles.botaoPersonalizado} htmlFor="foto_perfil">Fazer upload</label>
                    {fotoPerfil && <p className={styles.nomeArquivo}>{fotoPerfil.name}</p>}
                    {fotoPerfil && (<img className={styles.preview} src={URL.createObjectURL(fotoPerfil)} alt="Preview"/>)}
                </div>
                <div className={styles.campo}>
                    <label className={styles.labCpf} htmlFor="cpf">CPF:*</label>
                    <input className={styles.cpf} type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                </div>
                <div className={styles.campo}>
                    <label className={styles.labSenha} htmlFor="senha">Senha:*</label>
                    <input className={styles.senha} type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                </div>
                <div className={styles.campo}>
                    <label className={styles.labTelefone} htmlFor="telefone">Número de telefone:*</label>
                    <input className={styles.telefone} type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                </div>
                <div className={styles.campo}>
                    <label className={styles.labEmail} htmlFor="email">E-mail:*</label>
                    <input className={styles.email} type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.campo}>
                    <label className={styles.labCidade} htmlFor="localizacao">Cidade:*</label>
                    <input className={styles.cidade} type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                </div>
                <div className={styles.campo}>
                    <label className={styles.labEstado} htmlFor="localizacao">Estado:*</label>
                    <input className={styles.estado} type="text" value={estado} onChange={(e) => setEstado(e.target.value)}/>
                </div>
                <div className={styles.campo}>
                    <label className={styles.labPais} htmlFor="localizacao">País:*</label>
                    <input className={styles.pais} type="text" value={pais} onChange={(e) => setPais(e.target.value)}/>
                </div>
                <div className={styles.campo}>
                    <label className={styles.labLinkedin} htmlFor="linkedin">Linkedin:</label>
                    <input className={styles.linkedin} type="text" placeholder='https://www.linkedin.com/in/...' value={redesSociais.linkedin} onChange={(e) => setRedesSociais({ ...redesSociais, linkedin: e.target.value })}/>
                </div>
                <div className={styles.campo}>
                    <label className={styles.labInstagram} htmlFor="instagram">Instagram:</label>
                    <input className={styles.instagram} type="text" placeholder='https://instagram.com/...' value={redesSociais.instagram} onChange={(e) => setRedesSociais({ ...redesSociais, instagram: e.target.value })}/>
                </div>
        </div>
        <button className={styles.Cadastrar} onClick={handleProximo}>Próximo</button>
        </div>
    );
}