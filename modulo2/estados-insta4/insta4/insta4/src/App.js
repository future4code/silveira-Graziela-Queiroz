import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import imgpost from './img/post2.jpg';
import imgpost2 from './img/post3.jpg';
import fotoperfil1 from './img/post4.jpg';
import fotoperfil2 from './img/post5.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FormularioDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FormularioInput = styled.input`
  height: 50px;
  width: 300px;
  background: lavender;
  margin: 5px;
  font-weight: bold;
  font-size: 20px
`
const FormularioButton = styled.button`
  width: 200px;
  height: 35px;
  margin: 15px;
  margin-bottom: 25px;
  background: lightblue;
  font-weight: bold;
  font-size: 20px
`

class App extends React.Component {

  state = {
    post: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: "natalia",
        fotoUsuario: fotoperfil1,
        fotoPost: imgpost2
      },
      {
        nomeUsuario: "ariana",
        fotoUsuario: fotoperfil2,
        fotoPost: imgpost
      }
    ],

    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost: ""
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost
    };

    // Copia array de post e adiciona uma post no final
    const novoPosts = [...this.state.post, novoPost];

    // Define o estado "post" como a variavel "novoPosts"
    this.setState({ post: novoPosts });

    //limpar input
    this.setState({valorInputNome: "", valorInputFoto: "", valorInputPost: ""})
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value})
  }

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value})
  }

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value})
  }
  
  render() {
    const listaDePessoas = this.state.post.map((pessoa) => {
      return (
        <Post
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <FormularioDiv>
          <FormularioInput
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
            />
            <FormularioInput
            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto perfil"}
            />
            <FormularioInput
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Foto post"}
            />
           <FormularioButton onClick={this.adicionaPost}>Adicionar</FormularioButton>
        </FormularioDiv>

        <div>
          {listaDePessoas}
        </div>
       
      </MainContainer>
    );
  }
}

export default App;







