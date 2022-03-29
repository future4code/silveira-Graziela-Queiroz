import React from 'react';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const ContainerMain = styled.div`

`

const ConteudoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Botao = styled.button`
  margin:40px;
  padding:10px
`

class App extends React.Component {

  state = {
    etapa: 1,
  };

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }



  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default: 
        return <Etapa1 />
    }
  }

  render() {
    return (
      <ContainerMain>
        <ConteudoDiv>
          {this.renderizaEtapa()}
          {this.state.etapa !== 4 ?  <Botao onClick={this.irParaProximaEtapa}>Proxima etapa</Botao> : <p></p>}

        </ConteudoDiv>

      </ContainerMain >
    );
  }
}

export default App;