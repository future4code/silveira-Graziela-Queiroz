// import styled from 'styled-components'
// import { AdminHomePage } from './pages/AdminHomePage'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminHomePage = () => {

  const navigate = useNavigate()

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