import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useParams } from "react-router-dom";
import Header from '../../components/header/Header';
import CardActor from '../../components/cardActor/CardActor';
import { ContainerCardActor, ContainerSinopse, DivGeral } from './style';
import { HeaderStyled } from '../../components/header/styled';

const DetailMovie = () => {
  const [detailMovie, setDetailMovie] = useState([]);
  const [actorMovie, setActorMovie] = useState([]);

  const params = useParams();

  const getDetailMovie = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${params.filmes}?api_key=ee906153f1e34c7932d8e497d2ebe284`)//Endpoint que retorna os detalhes de cada filmes
      .then((res) => {
        setDetailMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Endpoint que retorna os atores
  const getActorMovie = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${params.filmes}/credits?api_key=ee906153f1e34c7932d8e497d2ebe284`)//Endpoint que retorna os detalhes de cada filmes
      .then((res) => {
        setActorMovie(res.data);
        console.log('aTORES', res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getDetailMovie();
    getActorMovie();
  }, []);

  const mapActor = actorMovie.cast?.map((acto) => {
    if(acto.order < 10 ){
      return (
        <CardActor
          key={acto.id}
          profile_path={<img component="img" height="240" src={`https://image.tmdb.org/t/p/original/${acto.profile_path}`} alt="Poster" />}
          name={acto.name}
          character={acto.character}
        />
      )
    }
  });

  return (
    <DivGeral>
      <ContainerSinopse>
        <HeaderStyled>
        Titulo: {detailMovie.original_title}
        Data do filme:{detailMovie.release_date}
        <img component="img" height="240" src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`} alt="Poster" />
        {/* Média: {detailMovie.vote_average} */}
        Sinopse: {detailMovie.overview}
        </HeaderStyled>
      </ContainerSinopse>
      <ContainerCardActor>
        {mapActor}
      </ContainerCardActor>
     
    </DivGeral>
  )
}



export default DetailMovie;