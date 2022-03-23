import React from 'react';
import styled from 'styled-components';

const SmallcardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
 `;

const Smallcardimg = styled.img `
     width: 30px;
     margin-right: 10px;
     border-radius: 50%;
 `;

const Smallcarddiv = styled.div `
     display: flex;
     flex-direction: row;
     justify-items: flex-start;
 `;

const Smallcardp = styled.p`
    font-weight: bold;
`;

function CardPequeno(props) {
    return (
    <div>
        <SmallcardContainer className="smallcard-container" >
                <Smallcardimg src={ props.imagem } />
                <Smallcarddiv>
                    <Smallcardp>Email: &nbsp;</Smallcardp> <p> { props.email }</p>
                </Smallcarddiv>
        </SmallcardContainer>

        <SmallcardContainer className="smallcard-container2" >
            <Smallcardimg src={ props.imagem2 } />
            <Smallcarddiv>
                <Smallcardp>Endereço: &nbsp;</Smallcardp> <p> { props.endereco }</p>
            </Smallcarddiv>
        </SmallcardContainer>
    </div>
    )
}

export default CardPequeno;