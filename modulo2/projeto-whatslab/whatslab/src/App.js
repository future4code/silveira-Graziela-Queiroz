import './App.css';
import React from 'react';
import Mensagem from './components/Mensagem/Mensagem';








class App extends React.Component {

  state = {
    msg: [
    
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
          nome={msg.nome}
          mensagem={msg.mensagem}

        />
      );
    });

    return (
      <div>
        <div>
          {listaMsg}
        </div>

        <div>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.adicionarMensagem}>Enviar</button>
        </div>

      </div>
    );
  }

}

export default App;
