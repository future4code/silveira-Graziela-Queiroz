import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const TripDetailsPage = () => {
  const [trip, setTrip] = useState([])
  const [candidate, setcandidate] = useState([])

  const navigate = useNavigate()
  useProtectedPage()

  useEffect((id) => {
    const token = localStorage.getItem('token')
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/trip/${id}`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log('Deu erro!!!', error.response)
      });
  }, []);

  const putCandidate = (tripId, candidateId) => {
    // event.preventDefault()
    const token = localStorage.getItem('token')
    const body = { approve: true }
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/trips/${tripId}/candidates/${candidateId}/decide`,
        body,
        {
          headers: { auth: token }
        })
      .then((response) => {
        console.log("Aceito com sucesso", response.data)
        setcandidate(response.data.trip.candidates)
      })
      .catch((error) => {
        console.log('erro!!!', error.response)
      });
  };

  const candidatesList = candidate.map((candidate) => {
    return (
      <div key={candidate.id}>
        <p>{candidate.name}</p>
        <p>{candidate.profession}</p>
        <p>{candidate.age}</p>
        <p>{candidate.country}</p>
        <p>{candidate.applicationText}</p>
        <button onClick={putCandidate}>Aprovar</button>
        <button onClick={putCandidate}>Reprovar</button>
      </div>
    );
  })

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <h1>Trips Details</h1>
      <div>
        <p>{trip.name}</p>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>
      </div>

      <button onClick={goBack}>Voltar</button>

      <h2>Candidatos Pendentes</h2>
      <div>{candidatesList}</div>
    </div>
  );
}
