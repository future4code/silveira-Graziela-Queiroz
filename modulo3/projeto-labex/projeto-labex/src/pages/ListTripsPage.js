// import { ListTripPage } from './pages/ListTripsPage'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const ListTripsPage = () => {
  const [trips, setTrips] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/trips',
      )
      .then((response) => {
        console.log(response.data.trips)
        setTrips(response.data.trips)
      })
      .catch((error) => {
        console.log('Deu erro!!!', error.response)
      });
  }, [navigate]);

  const goToHomePage = () => {
    navigate(-1)
  }

  const goApplicationPage = () => {
    navigate("/trips/application")
  }

  const listTrips = trips.map((trip) => {
    return (
      <div key={trip.id}>
        <p>Name:{trip.name}</p>
        <p>Descriçao:{trip.description}</p>
        <p>Planeta:{trip.planet}</p>
        <p>Duração em dias:{trip.durationindays}</p>
        <p>Data:{trip.date}</p>
      </div>
    );
  })

  return (
    <div>

      <div>
        <p>"Eu sou a pagina List Trips"</p>
      </div>

      <div>
          {listTrips}
      </div>

      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goApplicationPage}>Inscrever-se</button>

    </div>
  );

}  
