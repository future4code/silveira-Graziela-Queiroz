import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import axios from 'axios';
import { base_url, BASE_URL, BASE_URL2 } from '../constants/url';
import CardMovie from '../components/cardMovie/CardMovie'

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [list, setList] = useState([]);
    //const [moviesId, setMoviesId] = useState([]);

    const getMovie = async () => {
        await axios.get(`${BASE_URL2}`) // retorna os filmes 
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                console.log('erro', err)
            })
    };

    // const getDetailMovie = async ()=> {
    //   await axios
    //   .get(`${BASE_URL2}`)//Endpoint que retorna os detalhes
    //     .then((res) => {
    //       setMovie(res.data);
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }

    // const getGenreMovie = async () => {
    //   await axios
    //     .get(`${base_url}`)//Endpoint que retorna os lista generos dos filmes
    //     .then((res) => {
    //       setListMovie(res.data);
    //       // console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };

    useEffect(() => {
        getMovie();
        //getMoviesId();
    }, []);

    console.log(movies)

    const filmes = movies.results?.map((filme) => {
        return(
            <CardMovie 
                key={filme.id} 
                movie={filme.title} 
                foto={filme.poster_path}
                date={filme.release_date}
            >
            </CardMovie>
        )
    })

    return (
        <div>
            <Header />
            <div> 
                <p>filmes</p>
            </div>
            <div>
                 {filmes}
            </div>
           
        </div>
    );
};

export default Movie;