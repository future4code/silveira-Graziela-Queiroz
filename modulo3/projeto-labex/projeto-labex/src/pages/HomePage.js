import styled from 'styled-components';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
// import axios from 'axios';
// import Home from './pages/HomePage'
import { useNavigate } from 'react-router-dom';

  const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
  `
  const H1 = styled.div`
  display: block;
  font-size: 6em;
  color: #FA007D;
  margin-left: 80px;
  text-shadow: #0602FC 0.1em 0.1em 0.3em;
  padding: 50px;
  `
  const Container = styled.div ` 
   
  width: 100%;
  height: 100vh;
   `
  const BtnAdm = styled.div`
  margin-bottom: 15px;
  height: 40px;
  padding: 0px 20px;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 16px;
  background-color: slategray;
  min-width: 100px;
  `
export const HomePage = () => {
  const navigate = useNavigate()


  const goToTripPage = () => {
    navigate("/trips/list")
  }

  const goToAdmPage = () => {
    navigate("/login")
  }

  return (
    <Container>
      <GlobalStyle/>
      <H1>labeX</H1>
      <BtnAdm onClick={goToTripPage}>Ver Viagens</BtnAdm>
      <BtnAdm onClick={goToAdmPage}>Area Administrativa</BtnAdm>
    </Container>
  );

}