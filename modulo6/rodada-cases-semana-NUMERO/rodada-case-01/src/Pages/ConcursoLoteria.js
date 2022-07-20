import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../Constants/url';
import axios from 'axios';
import CardMegaSena from '../Components/CardMegaSena/CardMegaSena';

// cria os estados a serem usados para armazenar a requisição.
const ConcursoLoteria = () => {
  const [result, setResult] = useState([]);
  const [concursos, setConcursos] = useState([]);
  const [concursosId, setConcursosId] = useState([]);
  const [valueSelect, setValueSelect] = useState([])

  // requisições abaixo
  const getLoterias = async () => {
    await axios.get(`${BASE_URL}/loterias`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getConcursos = async () => {
    await axios.get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setConcursos(res.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const getConcursosById = async () => {
    // const filterConcursos = concursos.length > 0 && concursos.filter((concurso) => {
    //   return concurso.loteriaId === Number(valueSelect)
    // })
    // if (filterConcursos[0]) {
      // await axios.get(`${BASE_URL}/concursos/${Number(filterConcursos[0].concursoId)}`)
      await axios.get(`${BASE_URL}/concursos/${Number(concurso.concursoId)}`)

        .then((res) => {
          setConcursosId(res.data)
        })
        .catch((err) => {
          console.log(err)
        });
    // }
  }

  // useEffect  serve para que a função seja chamada toda vez que o usuario entrar na pagina.(getloteria,getconcursos,getconcursoById)
  useEffect(() => {
    getLoterias();
    getConcursos();
  }, []);

  useEffect(() => {
    getConcursosById();
  }, [valueSelect]);

  // map traz o nome do concurso
  const loterias = result.map((lot) => {
    return (
      <option key={lot.id} value={lot.id}> {lot.nome} </option>
    )
  });

  const onChangeHandler = (e) => {
    setValueSelect(e.target.value)
  }

  const concurso = concursos?.find(el => el.loteriaId == valueSelect)

  // Traz o concurso pelo Id( loteria e id  ex; MEGA-SENA CONCURSO "01")
  const numerosSorteio = concursosId.numeros?.map((number, index) => {
    return(
      <CardMegaSena key={index} number={number}></CardMegaSena>
    )
  });

  return (
    <div>
      <select name='valueSelect' onChange={onChangeHandler} value={valueSelect}>
        <option value="" disabled>Escolha uma loteria</option>
        {loterias}
      </select>
      <div>
        {numerosSorteio}
      </div>
    </div>
  )

}


export default ConcursoLoteria
