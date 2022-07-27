import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useParams } from "react-router-dom";
import Header from '../../components/header/Header';

const DetailMovie = () => {
    const [detailMovie, setDetailMovie] = useState([]);
    // const navigate = useNavigate();

    const params = useParams();
    console.log('parans', params.filmes)

    const getDetailMovie = async ()=> {
        await axios
        .get(`https://api.themoviedb.org/3/movie/${params.filmes}?api_key=ee906153f1e34c7932d8e497d2ebe284`)//Endpoint que retorna os detalhes de cada filmes
          .then((res) => {
            setDetailMovie(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      useEffect(() => {
        getDetailMovie();
    }, []);
    
//    const mapDetailMovie = detailMovie.results?.map((id) =>{

//    })

    return (
        <div>
            <Header/>
            <p>Eu sou a pagina DetailMovie</p>
        </div>
    )
}
export default DetailMovie;