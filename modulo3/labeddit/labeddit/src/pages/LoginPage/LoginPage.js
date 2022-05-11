import React from 'react'
import { ScreenContainer, LoginContainer, SignUpContainer } from './styled'
// import logo from "../../assets/"
import TextField from '@material-ui/core/TextField'
import Botao from '../../components/Botao'
import useForm from '../../hooks/useForm'
import { login } from '../../services/users/users'
import { useNavigate } from 'react-router-dom'
// import axios from "axios"
// import {BASE_URL} from "../constants/urls"
// import useUnProtectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = () => {
  const [form, onChange, clear] = useForm({ name: "", password: "" })
  const navigate = useNavigate();
  //  useUnProtectedPage()
   
  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form);
    login(form, clear, navigate)
  }

  return (
    <ScreenContainer>
      <h1>LoginPage</h1>
      <LoginContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"name"}
            variante="outlined"
            fullWidth
            margin="normal"
            required
            type={"name"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variante={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Botao
            nome={'Continuar'}
            tipo={"submit"}
            cor={"primary"}
          />
        </form>
      </LoginContainer>
      <SignUpContainer>
        <Botao
          nome={' Crie uma conta!!'}
          type={"submit"}
          cor={"secondary"}
        />
      </SignUpContainer>
    </ScreenContainer>
  )
}

export default LoginPage