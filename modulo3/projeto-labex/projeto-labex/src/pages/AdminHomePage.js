// import styled from 'styled-components'
// import { AdminHomePage } from './pages/AdminHomePage'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { useEffect } from 'react';
import axios from 'axios';


export const AdminHomePage = () => {
  useProtectedPage()

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/trips',
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log('Deu erro!!!', error.response)
      });
  }, [navigate]);

  const goToCreateListPage = () => {
    navigate("/admin/trips/create")
  }
  const goToLogout = () => {
    navigate("/")
  }

  const goToBack = () => {
    navigate(-1)
  }

  const goToDetailsTripPage = () => {
    navigate("/admin/trips/:id")
  }

  return (
    <div>

      <div>
        <p>Eu sou a pagina Admin home</p>
      </div>

      <button onClick={goToCreateListPage}>Criar Viagem</button>
      <button onClick={goToLogout}>VoltarHome</button>
      <button onClick={goToBack}>VoltarLogin</button>
      <button onClick={goToDetailsTripPage}>Detalhe Viagem</button>

    </div>
  );

}