// import styled from 'styled-components'
// import { createGlobalStyle } from 'styled-components';
import React from 'react';
// import axios from 'axios';
// import Home from './pages/HomePage'
import { useNavigate } from 'react-router-dom';
// const GlobalStyle = createGlobalStyle` 
//   * {    
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     outline: 0;
//   }


export const HomePage = () => {
  const navigate = useNavigate()


  const goToTripPage = () => {
    navigate("/trips/list")
  }

  const goToAdmPage = () => {
    navigate("/login")
  }

  return (
    <div>
      <p>Essa é a HomePage</p>


      <button onClick={goToTripPage}>Ver Viagens</button>
      <button onClick={goToAdmPage}>Area Administrativa</button>

    </div>
  );

}