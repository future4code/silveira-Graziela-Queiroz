// import styled from 'styled-components'
// import { AdminHomePage } from './pages/AdminHomePage'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const AdminHomePage = () => {
  const [trips, setTrips] = useState([])

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
        console.log(response.data.trips)
        setTrips(response.data.trips)
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

  const admTrips = trips.map((trip) => {
    return (
      <div key={trip.id}>

        <p>{trip.name}</p>
        <p>{trip.planet}</p>
        <p>{trip.date}</p>
      </div>
    );

  })

  return (
    <div>

      <div>
        <p>Eu sou a pagina Admin home</p>
      </div>
      <div> {admTrips}</div>
      <button onClick={goToCreateListPage}>Criar Viagem</button>
      <button onClick={goToLogout}>VoltarHome</button>
      <button onClick={goToBack}>VoltarLogin</button>
      <button onClick={goToDetailsTripPage}>Detalhe Viagem</button>

    </div>
  );

}