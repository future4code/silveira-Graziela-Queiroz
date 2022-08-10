import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';
import CardMovie from '../../components/cardMovie/CardMovie'
import { ContainerCardMovie, ContainerPagination, ContainerVetor, DivGeral, Vetor } from './styled';
import Pagination from '@mui/material/Pagination';

function Movie() {
    const [movies, setMovies] = useState([]);
    const [generos, setGeneros] = useState([]) // criei estado generos
    const [page, setPage] = useState(1);

    const mudarPage = (event, value) => {
        setPage(value);
    };

    const getMovie = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/popular/?api_key=ee906153f1e34c7932d8e497d2ebe284&page=${page}`) // retorna os filmes 
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                alert(err.response.data.status_message); // tratamento de erro ( Resposta do endpoint)
            });
    };

    useEffect(() => {
        getMovie();
    }, [page]);

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

    return (
        <DivGeral>
            <ContainerVetor>
                <Vetor>TMDB</Vetor>
            </ContainerVetor>
            <Header setGeneros={setGeneros} generos={generos} />
            <ContainerCardMovie>
                {filmes}
            </ContainerCardMovie>
            <ContainerPagination> 
                <Pagination count={10} page={page} onChange={mudarPage} />
            </ContainerPagination>
           
        </DivGeral>
    );
}

export default Movie;