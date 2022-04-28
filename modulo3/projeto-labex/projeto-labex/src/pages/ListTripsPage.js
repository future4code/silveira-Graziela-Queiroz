// import { ListTripPage } from './pages/ListTripsPage'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ListTripsPage = () => {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate(-1)
  }

  const goApplicationPage = () => {
    navigate("/trips/application")
  }

  return (
    <div>

      <div>
        <p>"Eu sou a pagina List Trips"</p>
      </div>


      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goApplicationPage}>Inscrever-se</button>

    </div>
  );

}  
