import React from 'react';
import styled from 'styled-components';

const Form1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Etapa1 extends React.Component {

    render() {
        return (
            <Form1>
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <p>1.Qual o seu nome?</p>
                <input></input>

                <p>2. Qual sua idade? </p>
                <input></input>

                <p>Qual seu email?</p>
                <input></input>

                <p>Qual a sua escolaridade?</p>
                <input></input>

            </Form1>
        );
    }
}

export default Etapa1;
