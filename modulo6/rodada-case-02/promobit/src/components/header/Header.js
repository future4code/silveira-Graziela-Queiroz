import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants/url";
import { HeaderStyled, H1, DivGenres, P } from "./styled";
import CardMovieButton from '../ButtonGenreMovie/CardMovieButton';
//import { useNavigate } from 'react-router-dom'


function Header(props) {
  const [genreList, setGenreList] = useState([]);

  //const navigate = useNavigate();


  const getGenreMovie = async () => {
    await axios
      .get(`${base_url}`) //Endpoint que retorna os lista generos dos filmes
      .then((res) => {
        setGenreList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => { 
    getGenreMovie();
  }, []);

  // const irParaDetalhes = (id) => {
  //   navigate(`/detalheDosFilmes/${id}`)
  // }

  const genres = genreList.genres?.map((gener) => {
    return (
      <CardMovieButton
        //onClick={() => irParaDetalhes(props.id)}
        genre={gener.name}
      />
    );
  });

  return (
    <HeaderStyled >
      <H1>Milhões de filmes, séries e pessoas para descobrir. Explore já!</H1>
      <P>FILTRE POR:</P>
      <DivGenres>
        {genres}
      </DivGenres>
    </HeaderStyled>
  );
}
export default Header;