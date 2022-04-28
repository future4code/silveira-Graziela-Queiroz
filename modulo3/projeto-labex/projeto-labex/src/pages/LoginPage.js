import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import useForm from "./hooks/useForm";

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const goToListPage = () => {
    navigate(-1)
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  };

  const postLogin = (event) => {
    // event.preventDefault()
    navigate("/admin/trips/list")

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/login"
    const body = {
      email: email,
      password: password
    };
    

    axios.post(url, body)
      .then((res) => {
        console.log('Sucesso !!!: ', res.data.token);
        localStorage.setItem('token', res.data.token);
        navigate("/admin/trips/list")
      })
      .catch((error) => {
        console.log('Erro no Login', error.response)
      }, [navigate])
  };

  // const goToAdmPage = () => {
  //   navigate("/admin/trips/list")
  // }

  return (

    <div>
      <div>
        <p>Eu sou a pagina Login</p>
      </div>
      <form onSubmit={goToListPage}>
        <form>
          onSubmit =
        </form>
        <input placeholder='email'
          type="email"
          value={email}
          onChange={onChangeEmail}
          // required
          // type="email"
          // pattern={"^.{5,}"}
          // title={"Sua senha deve conter no minimo 5 caracteres"}
         />
        <input placeholder='password'
          type="password"
          value={password}
          onChange={onChangePassword}
          // required
        />
        <button >Voltar</button>
        <button onClick={postLogin}>Entrar</button>
      </form>

    </div>
  );

}