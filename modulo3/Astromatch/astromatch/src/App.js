import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import TelaProfile from "./components/TelaProfile/TelaProfile";
import TelaMatches from "./components/TelaMatches/TelaMatches";

const AppContainer = styled.div`
   box-sizing: border-box;
`;

const Btn = styled.button`
position: fixed;
    bottom: 5px;
    right: 5px;
`

export default function App() {
  const [tela, setTela] = useState("TelaProfile");

  const mudarTela = () => {
    switch (tela) {
      case "TelaProfile":
        return <TelaProfile proximaPagina={proximaPagina} paginaAnterior={paginaAnterior} resetar={zerarApp}/>
      case "TelaMatches":
        return <TelaMatches proximaPagina={proximaPagina} paginaAnterior={paginaAnterior}/>
      default:
        return <TelaProfile></TelaProfile>;
    }
  };
  const proximaPagina = () => {
    setTela("TelaMatches");
  };

  const paginaAnterior = () => {
    setTela("TelaProfile");
  };

  const zerarApp = async () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/graziela-queiroz-silveira/clear";

    try {
      const res = await axios.put(url, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res);
      alert("Sua lista foi inicializada! Faça novamente");
    } catch (err) {
      alert("Erro! Desculpe, tente novamente.");
    }
  };

  return (
      <AppContainer>
        {mudarTela()}
        <Btn onClick={() => { zerarApp() }}>Limpar Matches</Btn>
      </AppContainer>
  );
}