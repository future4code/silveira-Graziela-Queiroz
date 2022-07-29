import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';
import { base_url, BASE_URL, BASE_URL2 } from '../../constants/url';
import CardMovie from '../../components/cardMovie/CardMovie'
import { ContainerCardMovie, DivGenres, DivGeral } from './style';
//import { useNavigate } from 'react-router-dom';
import CardMovieButton from '../../components/ButtonGenreMovie/CardMovieButton';

function Movie() {
    const [movies, setMovies] = useState([]);
    const [generos, setGeneros] = useState([]) // criei estado generos


    const getMovie = async () => {
        await axios.get(`${BASE_URL2}`) // retorna os filmes 
            .then((res) => {
                setMovies(res.data);
                //console.log(res.data)
            })
            .catch((err) => {
            alert(err.response.data.status_message); // tratamento de erro ( Resposta do endpoint)
            });
    };

    useEffect(() => {
        getMovie();
    }, []); 

    //  const generoFilter = generos?.filter((generos)=>{
    //   return generos.name === "genres"
    //  })
     

    const filmes = movies.results?.map((filme) => {
        return (
            <CardMovie
                id={filme.id}
                key={filme.id}
                foto={<img component="img" 
                height="240" 
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt="Poster" />}
                movie={filme.title}
                date={filme.release_date} 
            />
        );
    });

    return (
        <DivGeral>
            <Header />

            <ContainerCardMovie>
                {filmes}
            </ContainerCardMovie>

        </DivGeral>
    );
}

export default Movie;