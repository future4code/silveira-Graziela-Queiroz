// import styled from 'styled-components'
// import { LoginPage } from './pages/Login'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate()

  const goToListPage = () => {
    navigate(-1)
  }
  const goSignInPage = () => {
    navigate("/admin/trips/list")
  }
  return (
    <div>
      <div>
        <p>Eu sou a pagina Login</p>
      </div>

      <button onClick={goToListPage}>Voltar</button>
      <button onClick={goSignInPage}>EntrarPainelAdm</button>

    </div>
  );

}