// import { ListTripPage } from './pages/ListTripsPage'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const ContainerTrips = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
`

export const ListTripsPage = () => {
  const [trips, setTrips] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/trips',
      )
      .then((response) => {
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
      <Card sx={{ display: 'flex', justifyContent: 'center' }} >
        <CardContent key={trip.id} sx={{ marginBottom: 2, border: 2, maxWidth: 350 }}>
          <Typography variant="body2">Name: {trip.name}</Typography>
          <Typography variant="body2">Descriçao: {trip.description}</Typography>
          <Typography variant="body2">Planeta: {trip.planet}</Typography>
          <Typography variant="body2">Duração em dias: {trip.durationindays}</Typography>
          <Typography variant="body2">Data: {trip.date}</Typography>
        </CardContent>
      </Card >
    );
  })

  return (
    <ContainerTrips>
      <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1 }}>
        Lista de Viagens
      </Typography>

      <Button fullWidth variant="contained" sx={{ mt: 1.5, mb: 1, maxWidth: 350 }}onClick={goToHomePage}>Voltar</Button>
      <Button fullWidth variant="contained" sx={{ mt: 1.5, mb: 3, maxWidth: 350}}onClick={goApplicationPage}>Inscrever-se</Button>

      {listTrips}

    </ContainerTrips>
  );

}  
