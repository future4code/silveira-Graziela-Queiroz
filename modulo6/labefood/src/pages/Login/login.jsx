import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { goToSignup } from "../../routes/Coordinator";
import { InputsContainer, ScreenContainer } from "../Signup/styled";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

const Login = () => {
  let navigate = useNavigate();
  
  const {form,InputChange,clear} = useForm({
  
    email: "",
    password:""
  })

  // Aqui informo as variaveis do useForm e informa os campos a serem preenchidos nesta page Login

  const loginForm = (event) => {
    event.preventDefault();// PreventDefault: ELE VAII ESPERAR VC DIGITAR TODA A INFORMAÇÃO, DEPOIS VAI SER ENVIADA.
    const bodyForm = form

    

    // AQUI COMEÇA A REQUISICAO
  }


  return (
    <ScreenContainer>

      <Typography sx={{ color: "black", "margin-top": "15px", fontWeight: "bold" }}>Entrar</Typography>
      <InputsContainer>
        <form>
          <TextField
            name="email"
            value={form.email}
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
            type="password"
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Senha"}
            required
            minLength="8"
          />
          <Button variant='contained' type="submit" sx={{ color: 'black' }} fullWidth onClick={() => (navigate)}>Entrar</Button>
        </form>
        
        <Button fullWidth onClick={() => goToSignup(navigate)} sx={{ color: 'black' }}><strong>Não possui cadastro? Clique aqui.</strong></Button>

      </InputsContainer>

    </ScreenContainer>

  );
};
export default Login;
