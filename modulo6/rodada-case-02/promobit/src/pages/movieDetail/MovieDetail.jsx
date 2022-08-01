import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useParams } from "react-router-dom";
import CardActor from '../../components/cardActor/CardActor';
import { ContainerCardActor, ContainerSinopse, DivGeral, DivInfos, DivPoster, Img, HeaderStyle, Titulo, InfosFilme, Avaliacao, Sinopse, Psinops, ContainerElenco, ElencoP, DivTrailer, VetorDetail, Vetor1, ContainerRecommendations, ImgTrailer } from './styled';
import CardMovie from '../../components/cardMovie/CardMovie';
import { ImageAspectRatioRounded } from '@mui/icons-material';


const DetailMovie = () => {
  const [detailMovie, setDetailMovie] = useState([]);
  const [actorMovie, setActorMovie] = useState([]);
  const [recommendationsMovie, setRecommendationsMovie] = useState([]);

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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Endpoint que retorna os filmes recomendados
  const getRecommendationsMovie = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${params.filmes}/recommendations?api_key=ee906153f1e34c7932d8e497d2ebe284`)//Endpoint que retorna os detalhes de cada filmes
      .then((res) => {
        setRecommendationsMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getDetailMovie();
    getActorMovie();
    getRecommendationsMovie();
  }, []);

  const mapActor = actorMovie.cast?.map((acto) => {
    if (acto.order < 10) {
      return (
        <CardActor
          key={acto.id}
          profile_path={<img component="img" width="155px" height="222px" src={`https://image.tmdb.org/t/p/original/${acto.profile_path}`} alt="Poster" />}
          name={acto.name}
          character={acto.character}
        />
      )
    }
  });

  const mapGenreDetail = detailMovie.genres?.map((genres) => {
    return (
      <p key={genres.id}> {genres.name}, </p>)
  })

  const mapRecommendations = recommendationsMovie.results?.map((recom, index) => {
    if (index < 6) {
      return (
        <CardMovie key={recom.id}
          foto={<img
            component="img"
            height="240"
            src={`https://image.tmdb.org/t/p/original/${recom.poster_path}`}
            alt="Poster" />}
          movie={recom.title}
          date={recom.release_date}
        />
      )
    }
  })

  return (
    <DivGeral>
      <VetorDetail>
        <Vetor1>TMDB</Vetor1>
      </VetorDetail>
      <ContainerSinopse>
        <HeaderStyle>
          <DivPoster>
            {<Img component="img" src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`} alt="Poster" />}
          </DivPoster>

          <DivInfos>
            <Titulo>{detailMovie.original_title}</Titulo>
            <InfosFilme> {detailMovie.release_date} - {mapGenreDetail} - {detailMovie.runtime} min</InfosFilme>

            <Avaliacao> Avaliação dos Usuarios: {detailMovie.vote_average}</Avaliacao>

            <Sinopse>
              <Psinops>Sinopse</Psinops>
              {detailMovie.overview}
            </Sinopse>

          </DivInfos>
        </HeaderStyle>
      </ContainerSinopse>

      <ContainerElenco>
        <ElencoP>Elenco original</ElencoP>
        <ContainerCardActor>
          {mapActor}
        </ContainerCardActor>
      </ContainerElenco>

      <DivTrailer>
        <ElencoP>Trailer</ElencoP>
        <img component="img" width="900px" src={`https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}`} alt="Poster" ></img>
      </DivTrailer>

      <DivTrailer>
        <ElencoP>Recomendações</ElencoP>
        <ContainerRecommendations>
          {mapRecommendations}
        </ContainerRecommendations>
      </DivTrailer>
    </DivGeral>
  )
}

export default DetailMovie;