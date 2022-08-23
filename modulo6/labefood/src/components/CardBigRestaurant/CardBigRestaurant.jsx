import React, { useContext } from "react"
import GlobalStateContext from "../../context/GlobalStateContext";
import { CardP, P, Img, CardBigStyle, Price, Services,RestaurantD,ContainerButton, ButtonAdd  } from "./styled";



const CardBigRestaurant = (props) => {
   // const [modal, setModal] = useState(false);
  // const [addButton, setAddButton] = useState(true);

  const { states, setters, requests } = useContext(GlobalStateContext);

  const onClickButtonAdd = () => {
    states.setButtonAdd()
  } 



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
        <ButtonAdd onClick={(onClickButtonAdd)}>Adicionar</ButtonAdd>
       
        </Price>
     
      </CardP>

    </CardBigStyle>
  );
};
export default CardBigRestaurant;
