import React, { useState } from "react";
import { TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { InputsContainer, Logo, ScreenContainer } from "./styled";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { goToAddress } from "../../routes/Coordinator";
import { BASE_URL } from "../../constants/url";
import Rappi4 from '../../assets/Rappi4.png'
import Header from "../../components/Header/Header";

const Signup = () => {
  const navigate = useNavigate();
  const [recordPassword, setRecordPassword] = useState("");
  const { form, InputChange, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onChangeConfirmPassword = (e) => {
    setRecordPassword(e.target.value);
  };

  const signup = (e) => {
    e.preventDefault();
    if (form.password === recordPassword) {
      axios.post(`${BASE_URL}/signup`, form)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          alert("Usuario criado!");
          clear();
          goToAddress(navigate);
        })
        .catch((err) => {
          alert("Erro ao criar usuário!")
        })
    }
    else {
      alert("Senhas divergentes")
    }
  };

  return (
    <ScreenContainer>
      <Header back= {true}/>
      <Logo src={Rappi4} width={"150px"} />
      <Typography sx={{ color: 'black', marginTop: 15, fontWeight: 'bold' }}>Cadastrar</Typography>
      <InputsContainer>
        <form onSubmit={signup}>
          <TextField
            placeholder="Nome e sobrenome"
            name="name"
            value={form.name}
            onChange={InputChange}
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"dense"}
            label={"Nome e sobrenome"}
            required
          />
          <TextField
            placeholder="email@email.com"
            name="email"
            value={form.email}
            onChange={InputChange}
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"dense"}
            label={"E-mail"}
            required
          />
          <TextField
            placeholder="000.000.000-00"
            name="cpf"
            value={form.cpf}
            onChange={InputChange}
            type="number"
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"dense"}
            label={"CPF"}
            inputProps={{
              inputMode: "numeric",
              pattern:
                "[0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2}|[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}",
            }}
            title="Digite o cpf sem . e -"
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
            margin={"dense"}
            label={"Senha"}
            required
            minLength="8"
          />
          <TextField
            placeholder="Confirme a senha"
            name="password"
            value={recordPassword}
            onChange={onChangeConfirmPassword}
            type="password"
            required
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"dense"}
            label={"Confirme sua senha"}
            minLength="8"
          />
          <Button type="submit" variant='contained' fullWidth color={"primary"} sx={{ color: 'black', marginTop: 15 }}>
            Criar
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
};
export default Signup;
