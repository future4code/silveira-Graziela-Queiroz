import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';
import useForm from "../hooks/useForm";
import axios from 'axios'

export const CreateTripPage = () => {
  useProtectedPage()
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  })

  const creatTrip = (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    }

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/trips", body,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log("cadastro com sucesso", response.data)
      })
      .catch((error) => {
        console.log('Deu erro!!!', error.response)
      });

    cleanFields();
  };

  const navigate = useNavigate()

  const goToBackAdm = () => {
    navigate(-1)
  }

  return (
    <div>
      <h1>Eu sou a pagina Create Trips</h1>

      <form onSubmit={creatTrip}>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{5,}"}
          title="O nome deve ter no mínimo 5 letras"
          type="text"
        />
        <input
          name="planet"
          value={form.planet}
          onChange={onChange}
          placeholder="planeta"
          required
          type="text"
        />
        <input
          name="date"
          value={form.date}
          onChange={onChange}
          placeholder="Data"
          required
          title="A data deve ser uma data no futuro"
          type="date"
          min={new Date().toISOString().slice(0, 10)}
        />
        <input
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Descrição"
          required
          pattern={"^.{30,}"}
          title="A descrição deve ter no mínimo 30 letras"
          type="text"
        />
        <input
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          placeholder="Duração"
          required
          min="50"
          title="A duração deve ser no mínimo 50 dias"
          type="text"
        />
        <button>Enviar</button>
        <button onClick={goToBackAdm}>Voltar</button>
      </form>

    </div>
  );
}