import React from 'react';
import styled from 'styled-components';

const Form2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
class Etapa2 extends React.Component {

    render() {
        return (
            <Form2>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <p>5.Qual curso?</p>
                <input></input>

                <p>2. Qual a unidade de ensino?</p>
                <input></input>

            </Form2>
        );
    }
}

export default Etapa2;