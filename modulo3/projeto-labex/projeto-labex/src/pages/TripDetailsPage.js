import React from 'react';
import { useNavigate } from 'react-router-dom';

export const TripDetailsPage = () => {

  const navigate = useNavigate()

  const goToDetailsPage = () => {
    navigate(-1)
  }

  return (
    <div>
      <div>
        <p>Eu sou a pagina Trips Details</p>
      </div>

      <button onClick={goToDetailsPage}>VoltarPainelAdm</button>

    </div>
  );
}