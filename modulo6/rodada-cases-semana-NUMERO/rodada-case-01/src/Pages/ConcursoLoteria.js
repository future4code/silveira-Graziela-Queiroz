import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../Constants/url';
import axios from 'axios';
// import CardMegaSena from '../Components/CardMegaSena';
//import {useParams} from 'react-router-dom'

const ConcursoLoteria = () => {
  const [result, setResult] = useState([]);
  const [concursos, setConcursos] = useState([]);
  const [concursosId, setConcursosId] = useState([]);


  const getLoterias = () => {
    axios.get(`${BASE_URL}/loterias`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getConcursos = () => {
    axios.get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setConcursos(res.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const getconcursosById = () => {
    axios.get(`${BASE_URL}/concursos/2359`)
      .then((res) => {
        console.log(res.data)
        setConcursosId(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  // useEffect  serve para que a função gerloterias seja chamada, toda vez que o usuario entrar na pagina feed eu vou conseguir chamar a função gerloterias.
  useEffect(() => {
    getLoterias();
    getConcursos();
    getconcursosById();
  }, []);

  // map traz o nome do concurso
  const loterias = result.map((lot) => {
    return (
      <option key={lot.id}>{lot.nome}</option>
    )
  });

  // map traz o concurso pelo id ( loteria e id  ex; MEGA-SENA CONCURSO "01")
  const concurso = concursos.map((conc) => {
    return (
      <p>{conc.concursoId}</p>
    )
  });

  // Traz o concurso pelo Id
  const idConcurso = concursosId.filter((lot) => {
    return (
      <p>{lot.numeros}</p>
    )
  });


  return (
    <div>
      <select>{loterias}</select>

      <div>
        {idConcurso}
      </div>
    </div>
  )

}


export default ConcursoLoteria
