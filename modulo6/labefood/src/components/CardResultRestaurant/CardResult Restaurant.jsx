import React from "react";
import { Address, CardP, CardStyleDetail, Category, Img, Restaurant, Services } from "./styled";

const CardResultRestaurant = (props) => {

 //   Este é o card Grande do inicio da page Detail
  return (
    <CardStyleDetail>
      <Img src={props.logoUrl} alt="logo" />
      <CardP>
        <Restaurant>
          <p>{props.name}</p>
        </Restaurant>
        < Category>{props.category}</ Category>
        <Services>
          <p> Tempo de Entrega: {props.deliveryTime} min</p>
          <p>Frete: R$ {props.shipping},00</p>
        </Services>
        <Address>
          <p>{props.address}</p>
        </Address>
      </CardP>
    </CardStyleDetail>
  );
};


export default CardResultRestaurant;