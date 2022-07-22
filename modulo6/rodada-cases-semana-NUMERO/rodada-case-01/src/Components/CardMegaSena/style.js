import styled from 'styled-components';


export const CardStyledNumber = styled.div `
    width: 5.5vw;
    height: 5.5vw;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat,sans-serif;;
    font-style: normal;
    font-weight: 700;
    font-size: 1.688rem;
    line-height: 33px;

    @media(max-width: 800px) {   
        width: 9vw;
        height: 9vw;
        font-size:20px;
        line-height: 0px;
    }
`


