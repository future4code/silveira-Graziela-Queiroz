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
          headers: { auth: token }
        })
      .then((response) => {
        console.log(response.data.trips)
        setTrips(response.data.trips)
      })
      .catch((error) => {
        alert('Deu erro!!!', error.response)
      });
  }, [navigate]);

  const deletTrip = (id) => {
    const token = localStorage.getItem('token')
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/trips/${id}`,
        { headers: { auth: token }
        })
      .then((response) => {
        console.log("Deletado com sucesso", response.data)
        setTrips(response.data.trips)
      })
      .catch((error) => {
        console.log('Não foi possivel deletar a viagem, tente novamente!!!', error.response)
      });
  };

  const goToCreateListPage = () => {
    navigate("/admin/trips/create")
  }
  const goToLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  const goToBack = () => {
    navigate(-1)
  }

  const goToDetailsTripPage = (id) => {
    navigate(`/admin/trips/${id}`)
  }

  const admTrips = trips.map((trip) => {
    return (
      <div key={trip.id} onClick={() => { goToDetailsTripPage(trip.id)}}>
        <p>{trip.name}</p>
        <button onClick={() => {deletTrip(trip.id)}}>Excluir</button>
      </div>
    );
  })
    
  return (
    <div>
      <h1>Eu sou a pagina Admin home</h1>
     
      <div>{admTrips}</div>

      <button onClick={goToCreateListPage}>Criar Viagem</button>
      <button onClick={goToLogout}>Logout</button>
      <button onClick={goToBack}>Voltar</button>

    </div>
  );

}