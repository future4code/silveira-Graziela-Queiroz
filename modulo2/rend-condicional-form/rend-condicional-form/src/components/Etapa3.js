import React from 'react';
import styled from 'styled-components';

const Form3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Etapa3 extends React.Component {

    render() {
        return (
            <Form3>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

                <p>5.Por que você não terminou um curso de graduação?</p>
                <input></input>

                <p> Você fez algum curso complementar? option=(["Nenhum","Curso técnico","Curso de ingles"]) </p>
                <input></input>

            </Form3>
        );
    }
}

export default Etapa3;