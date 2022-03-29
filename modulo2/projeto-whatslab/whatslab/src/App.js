import './App.css';
import React from 'react';
import Mensagem from './components/Mensagem/Mensagem';
import styled from 'styled-components';

const WhatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  margin: 20px 450px;
  height: 850px;
}
`

const WhatsMsg = styled.div`
  position: initial;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`
const WhatsForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 20px;

  `

const WhatsInput = styled.input`
  display: flex;
  align-items: center;
  height: 30px;
  margin: 10px;
  padding-botton: 20px;
  `
const WhatsInputMsg = styled.input`
  display: flex;
  align-items: center;
  height: 30px;
  width: 250px;
  margin: 10px;
  padding-botton: 20px;
  
  `


class App extends React.Component {

  state = {
    msg: [
      {
        nome: "graziela",
        mensagem: "blablabvla"
      },
      {
        nome: "graziela",
        mensagem: "sdfgsdfgsgds"
      }
      
    ],
    valorInputNome: "",
    valorInputMensagem: ""
  }

  adicionarMensagem = () => {
    const novaMensagem = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    };
    const novasMensagens = [...this.state.msg, novaMensagem];

    this.setState({ msg: novasMensagens });

    this.setState({ valorInputNome: "", valorInputMensagem: "" })
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value })
  }

  render() {
    const listaMsg = this.state.msg.map((msg) => {
      return (
        <Mensagem
          key={msg.mensagem}
          nome={msg.nome}
          mensagem={msg.mensagem}
        />
      );
    });

    return (
      <WhatsContainer>
        <WhatsMsg>
          {listaMsg}
        </WhatsMsg>

        <WhatsForm>
          <WhatsInput
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <WhatsInputMsg
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.adicionarMensagem}>Enviar</button>
        </WhatsForm>

      </WhatsContainer>
    );
  }

}

export default App;
