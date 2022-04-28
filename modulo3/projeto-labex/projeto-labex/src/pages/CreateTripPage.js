import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';


export const CreateTripPage = () => {
  useProtectedPage()
  const navigate = useNavigate()

  const goToBackAdm = () => {
    navigate(-1)
  }

  return (
    <div>

      <div>
        <p>Eu sou a pagina Create Trips</p>
      </div>

      <button onClick={goToBackAdm}>VoltarPainelAdm</button>

    </div>
  );
}