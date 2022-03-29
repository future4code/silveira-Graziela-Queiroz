import React from 'react';
import styled from 'styled-components';

const Form4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Final extends React.Component {

    render() {
        return (
            <Form4>
                <h1> O FORMULÁRIO ACABOU</h1>

                <p>Muito obrigado por participar! Entraremos em contato!</p>
                
            </Form4>
        );
    }
}

export default Final;