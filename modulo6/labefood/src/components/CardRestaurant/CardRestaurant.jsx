import React from "react"
import { useNavigate } from 'react-router-dom'
import { CardP, P, CardStyleRestaurant, Img, DivP  } from "./styled";


const CardRestaurant= (props) => {
    const navigate = useNavigate()

    const goToDetail = (id) => {
      navigate(`/detailRestaurant/${id}`);
    }
  
    return (
        <CardStyleRestaurant onClick={()=> goToDetail(props.id)}>
          <Img src={props.logoUrl} alt="logo"/>
          
          <CardP>
            <div>
              <P>{props.name}</P>
            </div>
            
            <DivP>
              <P>{props.deliveryTime} min</P>
              <P> Frete: R${props.shipping}</P>
            </DivP>
            
          </CardP>
        </CardStyleRestaurant>
    );
  };
  export default CardRestaurant;
  