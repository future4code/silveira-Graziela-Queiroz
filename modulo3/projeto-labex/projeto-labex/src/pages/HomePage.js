import React from 'react';
// import axios from 'axios';
// import Home from './pages/HomePage'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

//   const GlobalStyle = createGlobalStyle`
//   * {
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
// }
//   `
//   const H1 = styled.div`
//   display: block;
//   font-size: 6em;
//   color: #FA007D;
//   margin-left: 80px;
//   text-shadow: #0602FC 0.1em 0.1em 0.3em;
//   padding: 50px;
//   `
//   const Container = styled.div ` 
   
//   width: 100%;
//   height: 100vh;
//    `
//   const BtnAdm = styled.div`
//   margin-bottom: 15px;
//   height: 40px;
//   padding: 0px 20px;
//   border-radius: 20px;
//   border: none;
//   color: white;
//   font-size: 16px;
//   background-color: slategray;
//   min-width: 100px;
  // `
export const HomePage = () => {
  const navigate = useNavigate()


  const goToTripPage = () => {
    navigate("/trips/list")
  }

  const goToAdmPage = () => {
    navigate("/login")
  }
  const pudim = () => {
     navigate("/coxinha")
  }

  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://s3.amazonaws.com/rtvc-assets-misenal.tv/ms-public/imagenes/ComidaAstronautas.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{backgroundColor: "#4077af"}}>
        <Box
          sx={{
            my: 20,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Typography component="h1" variant="h2" sx={{color: "orangered"}}>
            LabeX
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <Button
            color="warning"
              onClick={goToTripPage}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              VER Viagens
            </Button>
            <Button
            color="error"
              onClick={goToAdmPage}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              AREA ADMINISTRATIVA
            </Button>
            <Button
            color="error"
            onClick={pudim}
            >
            Laranja
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
    // <Container>
    //   <GlobalStyle/>
    //   <H1>labeX</H1>
    //   <BtnAdm onClick={goToTripPage}>Ver Viagens</BtnAdm>
    //   <BtnAdm onClick={goToAdmPage}>Area Administrativa</BtnAdm>
    // </Container>
  );

}