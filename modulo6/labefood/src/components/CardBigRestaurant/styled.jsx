import styled from "styled-components";

export const CardBigStyle = styled.div`// card pequeno principais
  display: flex;
  flex-direction: initial;
  width: auto;
  height: auto;
  border: 4px;
  margin: 20px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #8E8E93;
  font-family: 'Roboto', sans-serif;
`;

export const Img = styled.img`
  width: 150px;
  height: 115px;
`;

// export const DivP = styled.div`
//   display: flex;
//   justify-content: space-between;

// `;

export const P = styled.p`
  font-size: 16px;
  margin: 3px;
  padding:5px;
`;


export const CardP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
  padding: 10px;
  margin-bottom: 10px;
  color: #D1D1D6;
  font-size: 16px;

`;

export const RestaurantD = styled.div`
 color: #e86e5a;
`;

export const Services = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  color: black;
  font-weight: bold;
`;

// botão adicionar faz as duas coisas adicionar e remover


//Estilização do Modal! 

export const ButtonAdd = styled.button`
  border-radius: 15px 0px 15px 0px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #000000;
 
 
`;

// export const ButtonRem = styled.button`
//   border-radius: 15px 0px 15px 0px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   cursor: pointer;
//   background-color: white;
//   color: #e86e5a;
//   border: 2px solid #e86e5a;
//   width: 25%;
//   height: 25%;
//   position: absolute;
//   bottom: 0;
//   right: 0;
// `;