import React from 'react';
import styled from 'styled-components';

const Cardsdiv = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`;

const Cardsimg = styled.img`
    width: 30px;
    margin-right: 10px;
`;

function ImagemButton(props) {
    return (
        < Cardsdiv className="image-button-container">
            < Cardsimg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ Cardsdiv>

    )
}

export default ImagemButton;