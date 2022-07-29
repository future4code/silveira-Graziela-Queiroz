//import { PropaneRounded } from '@mui/icons-material';
import React from 'react'
import { CardStyleMovie, P } from './styled';
import { useNavigate } from 'react-router-dom'

const CardMovie = (props) => {
  const navigate = useNavigate()
  
  const irParaDetalhes = (id) => {
    navigate(`/detalheDosFilmes/${id}`)
}

  return (
      <CardStyleMovie onClick={()=>irParaDetalhes(props.id)}>
        {props.foto}
        <P>{props.movie}</P>
        <P>{props.date}</P>
      </CardStyleMovie>
  );
};
export default CardMovie;


// Este é o card dos filmes
