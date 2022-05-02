import { useNavigate } from 'react-router-dom';
import React from 'react';
import useForm from "../hooks/useForm";
import axios from 'axios'
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import paises from './json/paises.json'

const theme = createTheme();

export const ApplicationFormPage = () => {
    const [tripId, setTripId] = useState("");

    const [trips, setTrips] = useState([]);
    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    });

    useEffect(() => {
        getTrip()
    }, [])
    const getTrip = () => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/trips`
            )
            .then((response) => {
                setTrips(response.data.trips)
            })
            .catch((error) => {
                console.log('Deu erro!!!', error.response)
            });
    }

    const applyToTrip = (event) => {
        event.preventDefault()

        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios
            .post(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/graziela-queiroz-silveira/trips/${tripId}/apply`, body
            )
            .then((response) => {
                console.log("cadastro com sucesso", response.data)
                cleanFields();
            })
            .catch((error) => {
                alert('Deu erro!!!', error.response)
            });
    };

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const tripsList = trips && trips.map((trip) => {
        return (
            <MenuItem key={trip.id} value={trip.id}>
                <ListItemText primary={trip.name} />
            </MenuItem>
        );
    })

    const paiseList =  paises && paises.map((pais) => {
        return(
            <MenuItem key={pais.id} value={pais.name}>
                <ListItemText primary={pais.name} />
            </MenuItem>
        );
    })

    const onChangeSelect = (event) => {
        setTripId(event.target.value)
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography component="h1" variant="h4">
                        Inscreva para uma viagem
                    </Typography>
                    <Box component="form" noValidate onSubmit={applyToTrip} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <InputLabel>Escolha uma viagem</InputLabel>
                                <Select
                                    name="tripId"
                                    value={tripId}
                                    onChange={onChangeSelect}
                                    label="teste"
                                    required
                                >
                                    <MenuItem value=''>
                                        <ListItemText primary={'Escolha uma viagem'} />
                                    </MenuItem>
                                    {tripsList}
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="name"
                                    value={form.name}
                                    onChange={onChange}
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nome"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={form.age}
                                    onChange={onChange}
                                    required
                                    fullWidth
                                    id="age"
                                    label="Idade"
                                    name="age"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={form.applicationText}
                                    onChange={onChange}
                                    required
                                    fullWidth
                                    id="applicationText"
                                    label="Texto Candidatura"
                                    name="applicationText"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="profession"
                                    value={form.profession}
                                    onChange={onChange}
                                    required
                                    fullWidth
                                    label="Profissao"
                                    id="profession"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel>Selecione um pais</InputLabel>
                                <Select
                                    name="country"
                                    value={form.country}
                                    onChange={onChange}
                                    required
                                >
                                    <MenuItem  value={"Selecione um pais"}> 
                                        <ListItemText primary={'Selecione um pais'}/>
                                    </MenuItem>
                                    {paiseList}
                                </Select>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 1 }}
                        >
                            Enviar
                        </Button>
                        <Button
                            onClick={goBack}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                        >
                            Voltar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}