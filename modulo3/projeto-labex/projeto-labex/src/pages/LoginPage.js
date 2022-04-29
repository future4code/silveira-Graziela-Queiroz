import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';

export const LoginPage = () => {
  const {form, onChange, cleanFields} = useForm({ email: "", password: "" })

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const postLogin = (event) => {
    navigate("/admin/trips/list")
    event.preventDefault();
   
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/login", form)
      .then((res) => {
        console.log('Sucesso !!!: ', res.data);
        localStorage.setItem('token', res.data.token);
        navigate("/admin/trips/list")
      })
      .catch((error) => {
        console.log('Erro no Login', error.response)
      }, [])
      cleanFields()
  };

  return (
    <div>
        <h1>Eu sou a pagina Login</h1>
  
      <form onSubmit={postLogin}>
        <input
          name='email'
          type="email"
          value={form.email}
          onChange={onChange}
          required
          placeholder={"E-mail"}
        />
        <input
          name='password'
          type="password"
          value={form.password}
          onChange={onChange}
          required
          placeholder={"Senha"}
        />
        <button>Entrar</button>
        <button onChange={goBack}>Voltar</button>
      </form>

    </div>
  );
}