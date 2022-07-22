import styled from "styled-components";


const getBackground = (loteria) => {
    switch (loteria) {
        case "0":
            return "#6DF29C"
        case "1":
            return "#7D6BF2"
        case "2":
            return "#D979C9"
        case "3":
            return "#F2955E"
        case "4":
            return "#58A673"
        case "5":
            return "#BFAA84"
        default:
            return "#6DF29C"
    }
}

export const DivGeral = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background: rgb(239, 239, 239);
    font-family: Montserrat,sans-serif;;
`;

// somente div verde da mega-sena
export const DivColor = styled.div`
    background: radial-gradient(20% 100% at right, #EFEFEF 50%, ${(p) => getBackground(p.loteria)} 50.1%);
    background-color:${(p) => getBackground(p.loteria)};
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

// seletor da mega-sena
export const Select = styled.select`
    width: 210px;
    height: 36px;
    border: aliceblue;
    border-radius: 15px;
    padding: 10px;
    text-transform: uppercase;
    font-family: Montserrat,sans-serif;
`;
// largura da area laranja (div)
export const P = styled.p`
    margin: 0;
    font-size: 25px;
    font-weight: 700;
    text-align: left;
    color: whitesmoke;
    padding: 70px;
    text-transform: uppercase;
`;

// somente area cinza
export const DivCinza = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: 100vh;
`;
// div só das bolinhas
export const DivCard = styled.div`
    width: 100%;
    height: 6.9375vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

// @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
// 	/* aqui colocamos o CSS para celulares */
// }



