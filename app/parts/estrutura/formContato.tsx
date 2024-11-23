"use client"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

interface colorType {
    color: "white" | "purple"
}

export default function FormContato({ color = "white" }: colorType) {
    const [message, setMessage] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [colorMessage, setColorMessage] = useState('bg-red-700');
    const fieldColor = (color == "white") ? "bg-purple-700 md:bg-transparent bg-purple-700 border-zinc-200 placeholder:text-zinc-200 text-beige-500" : "bg-transparent border-purple-700 placeholder:text-gray-800 text-purple-700";
    const buttonColor = (color == "white") ? "bg-beige-500 hover:bg-beige-600 text-purple-700 " : "bg-purple-700 hover:bg-purple-600 text-beige-500 ";

    const handleNome = (e: ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value);
    };
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleTelefone = (e: ChangeEvent<HTMLInputElement>) => {
        setTelefone(e.target.value);
    };
    function onSubmitSend(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (nome == null || nome.length < 3) { setMessage('O nome digitado não é válido'); }
        else if (email == null || email.length < 5) { setMessage('O e-mail digitado não é válido'); }
        else if (telefone == null || telefone.length < 7) { setMessage('O telefone digitado não é válido'); }
        else if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) { setMessage('O e-mail digitado não é válido'); }
        else {
            setMessage('');
            axios.post('/api/leads/create', { nome, email, telefone })
            .then(function (response) {
                setMessage(response.data.message);
                response.data.status ? setColorMessage('bg-green-700') : setColorMessage('bg-red-700');
                setNome(""); setEmail(""); setTelefone("");
            })
            .catch(function (error) { setMessage("HOUVE UM ERRO AO ENVIAR A MENSAGEM"); });
        }
    }
    return (
        <form onSubmit={onSubmitSend}>
            <div className="grid gap-5 container mx-auto max-w-lg">
                <input type="text" name="nome" onChange={handleNome} value={nome} className={"w-full py-3 px-6 rounded-lg text-lg font-light border-2 " + fieldColor} placeholder="Nome" />
                <input type="text" name="email" onChange={handleEmail} value={email} className={"w-full py-3 px-6 rounded-lg text-lg font-light border-2 " + fieldColor} placeholder="E-mail" />
                <input type="text" name="Telefone" onChange={handleTelefone} value={telefone} className={"w-full py-3 px-6 rounded-lg text-lg font-light border-2 " + fieldColor} placeholder="Telefone" />
                <div className="flex justify-end">
                    <button type="submit" className={"py-2 px-6 text-base rounded-full transform hover:scale-105 duration-300 transition delay-300 uppercase flex justify-center items-center gap-x-2 " + buttonColor}><FontAwesomeIcon icon={faArrowRight} />Enviar</button>
                </div>
            </div>
            {
                (message != '') ? <div id="response-contact" className="w-full"><div className={'wpcf7-response-output w-full text-white my-2 p-2 uppercase text-center border-2 border-white  border-dashed ' + colorMessage} role="alert">{message}</div></div> : ''
            }
        </form>
    )
}