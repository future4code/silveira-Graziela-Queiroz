import { useNavigate } from 'react-router-dom';
import React from 'react';
import useForm from "../hooks/useForm";
import axios from 'axios'

export const ApplicationFormPage = () => {
    const { form, onChange, cleanFields } = useForm({
        tripId: "",
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const inscrever = (event, id) => {
        event.preventDefault()

        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/trips/5gpowMAsU3RWKtZNjUMU/apply", body
          )
          .then((response) => {
            console.log("cadastro com sucesso", response.data)
          })
          .catch((error) => {
            console.log('Deu erro!!!', error.response)
          });

        cleanFields();
    };

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Inscreva para uma viagem</h1>

            <form onSubmit={inscrever}>

                <select name="tripId" onChange={onChange}>
                    <option value="" disable>Escolha uma viagem</option>   
                </select>

                <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Nome"
                    required
                    pattern={"^.{3,}"}
                    title="O nome deve ter no mínimo 3 letras"
                    type="text"
                />
                <input
                    name="age"
                    value={form.age}
                    onChange={onChange}
                    placeholder="idade"
                    required
                    type="number"
                    min={18}
                />
                <input
                    name="applicationText"
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder="texto Candidatura"
                    required
                    pattern={"^.{30,}"}
                    title="O texto deve ter no mínimo 30 caracteres"
                    type="text"
                />
                <input
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                    placeholder="profissao"
                    required
                    pattern={"^.{4,}"}
                    title="A profissão deve ter no mínimo 4 letras"
                    type="text"
                />
                <input
                    name="country"
                    value={form.country}
                    onChange={onChange}
                    placeholder="country"
                    required
                    pattern={"^.{4,}"}
                    title="A profissão deve ter no mínimo 4 letras"
                    type="text"
                />
                {/* <select name="country" onChange={onChange}>
                    <option value="" disable>Escolha um País</option>   
                </select> */}

                <button onClick={goBack}>Voltar</button>
                <button>Enviar</button>
            </form>

        </div >
    );
}