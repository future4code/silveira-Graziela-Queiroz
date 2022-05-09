import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const LoginPage = () => {
  const {form, onChange, cleanFields} = useForm({ email: "", password: "" })

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
    console.log("voltou")
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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={postLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={form.email}
              onChange={onChange}
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={form.password}
              onChange={onChange}
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Button
              onClick={goBack}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Voltar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}