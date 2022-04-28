// import styled from 'styled-components'
// import ApplicationFormPage from './pages/ApplicationFormPage'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import useForm from "./hooks/useForm";



export const ApplicationFormPage = () => {
    const { form, onChange, cleanFields} = useForm ({nome:"",email:""})
    nome: "";
    email:""
        
    });
    const navigate = useNavigate()

    const goToListPage = () => {
        navigate(-1)
    }
    const cadastrar = (event) => {
      event.preventDefault()
      console.log("formulario enviado !")

    };
    return (
        <div>
            <div>
                <p>Eu sou a pagina Form Trips</p>
            </div>
            <form onSubmit ={cadastrar}>
            <input value={form.nome} placeholder="Nome"/>
            <input value={form.email} placeholder"email"/>
            <button onClick={goToListPage}>Voltar</button>
            <button>Enviar</button>
            </form>
        </div>
    );

}