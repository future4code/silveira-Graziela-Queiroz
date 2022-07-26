import React from 'react'
import { CardStyleMovie } from './style';

const CardMovie = (props) => {
  return (
    <div>
      <CardStyleMovie>
        {props.movie}
        {props.foto}
        {props.date}
      </CardStyleMovie>
    </div>
  );
};
export default CardMovie;


// Este é o card dos filmes
