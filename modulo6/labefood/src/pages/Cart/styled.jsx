import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: auto; 
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 16px;
`

export const BoxAddress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #efeff4;
`
export const DivAdrress = styled.div`
  margin: 0 20px 0 20px;
`
export const BoxAddressRestaurant = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`


// export const BoxRestaurante = styled.div`
//   width: 100%;
//   height: 15vh;
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//  color: #e86e5a;
//   margin-bottom: 20px;
//   font-size: 15px;
//   padding: 10px 0 0 30px;
// `;
export const Frete = styled.div`
font-weight: bold;
text-align: right;
margin-right: 15px;
`

export const Subtotal = styled.div`
 display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 10px;
margin-left: 10px;
`

// export const SubValor = styled.div`
// color:#E86E5A;
// padding: 5px;
// font-weight: bold;
// `

export const Pay = styled.h4`
  font-size: 20px;
  margin-left: 5px;
`

export const Line = styled.div`
    border: none;
    height: 1px;
    background-color: #333; 
`

export const Form = styled.div`
    padding: 5px;
    margin-top: -20px;
    margin-left: 5px;
`