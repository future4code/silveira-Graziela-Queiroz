import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateTripPage = () => {

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