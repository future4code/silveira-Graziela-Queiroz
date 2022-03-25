import './App.css';
import React from 'react';
import Mensagem from './components/Mensagem/Mensagem';








class App extends React.Component {

  state = {
    msg:[

      {

      }
    ],
      valorInputNome:"",
      valorInputMensagem:""
  }

  adicionarMensagem = () => {
    const novaMensagem = {
      nome:this.state.valorInputNome,
      mensagem:this.state.valorInputMensagem,
    };
    const novasMensagens = [...this.state.msg];

    this.setState({ msg: novasMensagens });

    this.setState({valorInputNome: "", valorInputMensagem: ""})
  };
     
  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value})
  }
    
  onChangeInputNome = (event) => {
    this.setState({ valorInputMensagem: event.target.value})
  }

  render() {
    const listPeople = this.state.msg.map((person) => {
      return (
        <Mensagem
          nomeUsuario={person.nome}
          fotoUsuario={person.mensagem}
          
        />
      );
    });
   
    return (
      <div>
      <div>
        <div
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
          />
          <div
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem}
          placeholder={"Mensagem"}
          />
         <div onClick={this.adicionarMensagem}>Adicionar</div>
      </div>

      <div>
        {listPeople}
      </div>
     
    </div>
    );
  }
  
}

export default App;
