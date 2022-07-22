import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../Constants/url';
import axios from 'axios';
import CardMegaSena from '../Components/CardMegaSena/CardMegaSena';
import { DivCard, DivColor, DivGeral, DivCinza, P, Select,Footer } from './styled';


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
    const filterConcursos = concursos.length > 0 && concursos.filter((concurso) => {
      return concurso.loteriaId === Number(valueSelect)
    })
    if (filterConcursos[0]) {
      await axios.get(`${BASE_URL}/concursos/${Number(filterConcursos[0].concursoId)}`)
        .then((res) => {
          setConcursosId(res.data)
        })
        .catch((err) => {
          console.log(err)
        });
    }
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
      <option key={lot.id} value={lot.id}> {lot.nome} </option >
    )
  });

  const onChangeHandler = (e) => {
    setValueSelect(e.target.value)
  }

  // Traz o concurso pelo Id( loteria e id  ex; MEGA-SENA CONCURSO "01")
  const numerosSorteio = concursosId.numeros?.map((number, index) => {
    return (
      <CardMegaSena key={index} number={number}></CardMegaSena>
    )
  });

  // logica para aparecer o nome da loteria,toda vez que selecionado.
 // Se o numero for === loteriaid && o concursoid for diferente de null.
 //Retorna uma tag P com o nome da loteria.(O primeiro concurso inicia com zero, poi isso é ! diferente de null.)
  const nomeLoteria = result.map((loteria) => {
    if (Number(valueSelect) === loteria.id && concursosId.id != null) {
      return (
        <P key={loteria.id}>
          {loteria.nome}
        </P>
      )
    }
  })

  return (
    <DivGeral>
      <DivColor loteria={valueSelect}>
        <Select name='valueSelect' onChange={onChangeHandler} value={valueSelect}>
          <option value="" disabled>Escolha uma loteria</option>
          {loterias}
        </Select>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAABmJLR0QA/wD/AP+gvaeTAAAFEElEQVR4nO2bS2wVVRjHf98tpbRFjICigNqqECMLWbAwaNSoqAhIoonGF8ZEZesjMUYJkrjAxwI0LghGg4hvVETUAIHqBqrRBSGgqJAaLFSD5SGvttC/i3PnOr29tfeemc5pir+kycxtvv/5n+/OmXvmO2eMFJFUDUwAxgGHgRYzO5mC5kXAWKAd2JtUc0CQNEvSx5JOqicnJH0habaH5nRJH0o6UqR5WtIGSfdJqhqI/lRqdLyktSqPzZLOL0NzpKT3y9TcIunyLPral9mJklrKNBuxV9Jl/6E5RtK2CjUPSroyy75HZusk7azQbMROSaNKaA6TtMlTs03ShKyTsMjTbMQLJTTnJ9R8y7c/5pGAs4FWoN63UeAEMNHM2vOaOeA3YGICzW5gipn9VGlgzqOxGSRLAEAtMCt2Pp1kCQDXlzm+gZVyvU9DJbimj+Mk3OAT5JOEMT4NlSB+IxufkuZonyCfJIzwaagEZ8WOkw6vCC9vPkn41aehjPDyNqzUh5JqgbtwY/UKoAY4CPwADPc0mAUdkp4DrgLOBU4BPwPNwLtmdqhfBUkm6TFJfyX8zS6Hb2LtvpFBe8ckLZZUU9zvXMxIPbAeWILnDWaQUwc8DTSr6BkmB4XH1Y9wc4ChzlTgK7lJH/DvlfA4MDOIpTBMBV6MTnKSxgLPhvMTjIclTQF3JdwJ9HqqOwOoAh4Al4TbwnoJymxwSWgMbCQkjeCScE5gIyGpkzQ8B/wR2klADplZZw7YFdpJQHaBGw6fBDYSktXgkrAO2BfWSxCOA6sAcmbWAcwP6ycIC82sDfLTZjNbh3twOlP4FFganRSeIs3sCWAxrmo7lHkbuNvMTkcf9KgsmdkzuELKloyNZcEOYI6ZzTOzrvg/elWWzGwrcLXcctktuFnVBNxcO01+jB1/T8+aYxoI2A+0AE1mti1l/f8ZcpRchpNkuHvDrcDFuE0XabM9fzNG0pP5ttKmHbe81wRsNLNTZUVJmitpdwaFz6wLrW2SHpH7gnsQL7RWSVoBrAEuSfgNDEbGAcuB9XJF5QJRodVwv58PZu8tc2YAX0oqrFZFV8JDwD1BLIXhWmBBdJLLXxovh/MTjKckFSpLdzA0F1v6oxqYBy4Jt4f1EpS54JIwObCRkEwCl4SxgY2EZKSkmhxwILSTgBw1s44c8EtoJwHZDW44fB7YSEg+A5eENZyZQ6ITWAmu0HoYWBjWTxBeNbPCcABYBqwIZid7tgKLopOo2izgUeCdMJ4yZRMw08yORR/Eq81dZnY/cC+wJ4C5gaYNtyPn5vwtoECpQut7kj4AbgKuw23hqwKOAt/hdrQuKI4bJLwJfIurio3C9W8nbgvfOjPrLBVUch+jmXUDG/J/PZC0tHfEoOE8M1uOK56Ujc+O1gaPmKxo8AnyScJxn4ZKEN9deiQlTS9vPklIa1PH77Hj1pQ0//QJ8knCZp+GStDUx3ESNvoE+bz+Uw/sJdlep8PAhWb2d17TcLtGJiXQ7AImm1lLpYEVXwn5ScbzlcYV8VKUgLymSD51X+aTAG8kDZe01XMRpDle7o5pmqTVnpq7JaX1Rk5FiRgtaXuFZndI6vNVH0n1kr6uUHOfpEuz7Hux6VGSlkvq7sdot6RVkvpdfpdULWmJpM4yErBW0gVZ9LVfJE2T9Jqk1iKT+yW9Lmmah+YkSa9I2lOkeUDSSkk3DkRfUkHSCEmNkkamqFkrqSFNzTj/AN2OZzrIbRdAAAAAAElFTkSuQmCC" alt="logo"/>
        <div>{nomeLoteria}</div>
        <p >Concurso: <b>{concursosId.id}</b></p>
      </DivColor>
      <DivCinza>
        <DivCard>
          {numerosSorteio}
        </DivCard>
        <Footer> Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a Caixa.</Footer>
      </DivCinza>
    </DivGeral>
  )
}

export default ConcursoLoteria
