import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';
import { BASE_URL2 } from '../../constants/url';
import CardMovie from '../../components/cardMovie/CardMovie'
import { ContainerCardMovie, DivGeral } from './styled';

function Movie() {
    const [movies, setMovies] = useState([]);
    const [generos, setGeneros] = useState([]) // criei estado generos

    const getMovie = async () => {
        await axios.get(`${BASE_URL2}`) // retorna os filmes 
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                alert(err.response.data.status_message); // tratamento de erro ( Resposta do endpoint)
            });
    };

    useEffect(() => {
        getMovie();
    }, []);

    const filmes = movies.results?.filter((filme) => {
        if (generos.length === 0) {
            return filme
        } else {
            return generos.every((genero) => {//Every filtro retorna uma lista onde o usuário vai clicar 
                console.log('OH GOD', genero)
                return filme.genre_ids.includes(genero)
            })
        }
    })
    .map((filme) => {
        return (
            <CardMovie
                id={filme.id}
                key={filme.id}
                foto={
                    <img
                        component="img"
                        height="240"
                        src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                        alt="Poster" />}
                movie={filme.title}
                date={filme.release_date}
            />
        )
    });

    console.log('filmes', filmes)

    return (
        <DivGeral>
            <Header setGeneros={setGeneros} generos={generos} />

            <ContainerCardMovie>
                {filmes}
            </ContainerCardMovie>

        </DivGeral>
    );
}

export default Movie;