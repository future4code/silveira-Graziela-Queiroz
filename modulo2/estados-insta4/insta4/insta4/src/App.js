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

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'natalia'}
          fotoUsuario={fotoperfil1}
          fotoPost={imgpost2}
        />
        
        <Post
          nomeUsuario={'ariana'}
          fotoUsuario={fotoperfil2}
          fotoPost={imgpost}
        />

      </MainContainer>
    );
  }
}

export default App;
