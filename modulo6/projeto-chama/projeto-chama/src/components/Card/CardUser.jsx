import React from "react"
import { CardUserStyled } from "./styled";

const CardUser = (props) => {// Card do usuario
  return (
    <div>
      <CardUserStyled>
        {props.avatar_url}
        {props.bio}
        {props.email}
        {props.name}
      </CardUserStyled>
    </div>
  );
};

export default CardUser

