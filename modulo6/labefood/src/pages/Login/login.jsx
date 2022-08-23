import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { goToRestaurant, goToSignup } from "../../routes/Coordinator";
import { InputsContainer, ScreenContainer } from "../Signup/styled";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { LogoImage, P } from "./styled";

const Login = () => {

  const [passwordLogin, setPasswordLogin] = useState('password');
  const { form, InputChange, clear , setForm} = useForm({
    email: "",
    password: ""
  })

  let navigate = useNavigate();

  const loginForm = (e) => {
    e.preventDefault();// PreventDefault: ELE VAI ESPERAR VC DIGITAR TODA A INFORMAÇÃO, DEPOIS VAI SER ENVIADA.
    const bodyForm = form
     axios
      .post(`${BASE_URL}/login`, bodyForm)
      .then((res) => {
        localStorage.setItem('token', res.data.token);

        if (res.data.user.hasAddress === false) {
          alert(
            `${res.data.user.name}, you do not have an account. We will redirect you...`
          );
          goToSignup(navigate);
        } else {
          alert("Welcome!")
          goToRestaurant(navigate);
        }

        clear();
        setForm(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const password = () => {
    if (passwordLogin === 'password') {
      setPasswordLogin('text')
    } else {
      passwordLogin('password')
    }
  }

  // Aqui informo as variaveis do useForm e informa os campos a serem preenchidos nesta page Login

  return (
    <ScreenContainer>
      <LogoImage src={"https://raw.githubusercontent.com/future4code/Silveira-labe-food1/master/src/assets/Logo.png"}/>
      <Typography sx={{ color: "black", fontWeight: "bold" }}>Entrar</Typography>
      <InputsContainer>
        <form onSubmit={loginForm}>
          <TextField
            name="email"
            value={form.email}
            onChange={InputChange}
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"E-mail"}
            required
          />
          <TextField
            placeholder="Senha"
            name="password"
            value={form.password}
            onChange={InputChange}
            type="password"
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Senha"}
            required
            minLength="6"
          />
          {(passwordLogin === 'password') ?
            <VisibilityOffIcon className="eye" onClick={password} />
            :
            <VisibilityIcon className="eye" onClick={password} />
          }

          <Button variant='contained' type="submit" sx={{ color: 'black' }} fullWidth onClick={() => (navigate)}>Entrar</Button>
        </form>

        <Button fullWidth onClick={() => goToSignup(navigate)} sx={{ color: 'black' }}>
          <P><strong>Não possui cadastro? Clique aqui.</strong></P>
        </Button>
      </InputsContainer>

    </ScreenContainer>

  );
};
export default Login;
