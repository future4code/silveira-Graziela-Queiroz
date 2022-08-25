import React, { useContext, useState } from "react"
import GlobalStateContext from "../../context/GlobalStateContext";
import ModalSelectQuantity from "../ModalSelectQuantity/ModalSelectQuantity";
import { CardP, P, Img, CardBigStyle, Price, Services, RestaurantD, ContainerButton, ButtonAdd } from "./styled";



const CardBigRestaurant = (props) => {
  const [modal, setModal] = useState(false);// mostra o modal ou não, sendo booleano.
  
  const { states, setters, requests } = useContext(GlobalStateContext);


  return (
    <CardBigStyle >
      <Img src={props.photoUrl} alt="logo" />
      <CardP>
        <RestaurantD>
          <P>{props.name}</P>
        </RestaurantD>
        <Services>
          <P>{props.description}</P>
        </Services>
        <Price>
          <P>Preco: R$ {props.price}</P>
          <ButtonAdd onClick={() => setModal(true)}>
            Adicionar
          </ButtonAdd>

        </Price>
        // chamei o modal aqui
        <ModalSelectQuantity open={modal} setOpen={setModal} />
      </CardP>

    </CardBigStyle>
  );
};
export default CardBigRestaurant;
