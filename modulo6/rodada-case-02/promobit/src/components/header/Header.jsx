import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants/url";
import { HeaderStyled, H1, DivGenres, P, Vetor } from "./styled";
import CardMovieButton from '../ButtonGenreMovie/CardMovieButton';
//import { useNavigate } from 'react-router-dom'


function Header({ setGeneros, generos }) { // ao invés de usar props, passa o estado por parametro.

  const [genreList, setGenreList] = useState([]);

  const getGenreMovie = async () => {
    await axios
      .get(`${base_url}`) //Endpoint que retorna os lista generos dos filmes
      .then((res) => {
        setGenreList(res.data);
      })
      .catch((err) => {
        alert(err.response.data.status_message); // tratamento de erro ( Resposta do endpoint)
      });
  };

  useEffect(() => {
    getGenreMovie();
  }, []);

  const mudancaGenero = (id) => {// funcao mudanca de genero
    const index = generos.indexOf(id) // metodo indexOf elemento 
    const newGeneros = [...generos] // copia do array retornando um novo array.
    if (index === -1) {
      newGeneros.push(id)// adiciona um elemento em uma lista
    } else {
      newGeneros.splice(index, 1)// splice se clicar novamente ele tira.
    }
    setGeneros(newGeneros)
  }

  const genres = genreList.genres?.map((gener) => {
    return (
      <CardMovieButton
        mudancaGenero={mudancaGenero}// passando genero dentro do CardMovieButton como props.
        key={gener.id}
        id={gener.id}
        genre={gener.name}
      />
    );
  });

  return (
    <HeaderStyled >
      <Vetor>TMDB</Vetor>
      <H1>Milhões de filmes, séries e pessoas para descobrir. Explore já!</H1>
      <P>FILTRE POR:</P>
      <DivGenres>
        {genres}
      </DivGenres>
    </HeaderStyled>
  );
}
export default Header;