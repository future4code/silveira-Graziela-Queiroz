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
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <div>
                    <p>1.Qual o seu nome?</p>
                    <input value=""></input>
                </div>
                <div>
                    <p>2. Qual sua idade? </p>
                    <input value=""></input>
                </div>
                <div>
                    <p>3.Qual seu email?</p>
                    <input value=""></input>
                </div>
                <div>
                    <p>4.Qual a sua escolaridade?</p>
                    <input value=""></input>
                    <select>
                        <option value="Ensino médio incompleto">Ensino medio incompleto</option>
                        <option value="Ensino médio completo">Ensino medio completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                        <option value="Ensino superior completo">Ensino superior completo</option>
                    </select>
                </div>
            </Form1>
        );
    }
}

export default Etapa1;
