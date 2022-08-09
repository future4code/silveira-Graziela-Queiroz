import React from "react"
import { CardUserStyled, DivInfos, Pinfos } from "./styled";

const CardUser = ({user, avatar_url, bio, email, name, login}) => {// Card do usuario
  return (
    <div>
      <CardUserStyled>
        <p style={{margin: 20}}>{user}
          {avatar_url?(
            <img height="180px" src={avatar_url} alt="avatar"></img>
          ):(<></>)}</p>
          <DivInfos>
            <Pinfos>Nome: {name}</Pinfos>
            <Pinfos>GitHub: {login}</Pinfos>
            <Pinfos>Biografia: {bio}</Pinfos>
            <Pinfos>Email: {email}</Pinfos>
          </DivInfos>
       </CardUserStyled>
    </div>
  );
};

export default CardUser

