import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { useEffect } from 'react';
import axios from 'axios';
// import { LoginPage } from './LoginPage';

export const TripDetailsPage = () => {
  // const { } = useParams();
  const navigate = useNavigate()
  useProtectedPage()

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/trip/KicRCqhD03gBet7bv3xQ',
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

  const goToDetailsPage = () => {
    navigate(-1)
  }

  return (
    <div>
      <div>
        <p>Eu sou a pagina Trips Details</p>
      </div>

      <button onClick={goToDetailsPage}>Voltar</button>

    </div>
  );
}
