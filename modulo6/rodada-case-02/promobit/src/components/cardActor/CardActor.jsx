import React from 'react'
import { CardStyledActor, P } from './styled';

const CardActor = (props) => {
  return (
      <CardStyledActor>
        <P>{props.profile_path}</P>
        <P>{props.name}</P>
        <P>{props.character}</P>
      </CardStyledActor>
  );
};

export default CardActor;


// Este é o card dos filmes