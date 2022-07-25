import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const Laranja = () => {
  const navigate = useNavigate()


  const goToTripPage = () => {
    navigate("/trips/list")
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
            Titulo
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <Button
            color="warning"
              onClick={goToTripPage}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Celular
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