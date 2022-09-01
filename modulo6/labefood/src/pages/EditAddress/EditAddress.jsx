import React, { useContext, useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import { InputsContainer, ScreenContainer } from "./styled";
import { goToProfile, goToRestaurant } from "../../routes/Coordinator";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage"
import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";

const EditAddress = () => {

    useProtectedPage()
    const { requests } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const token = window.localStorage.getItem("token");
    const headers = {
        headers: {
            auth: token,
        },
    };

    const { form, inputChange, clear, setForm } = useForm({
        neighbourhood: "",
        number: "",
        city: "",
        complement: "",
        state: "",
        street: "",
    });

    const getAllAddress = () => {
        axios
            .get(`${BASE_URL}/profile/address`, headers)
            .then((res) => {
                setForm({
                    neighbourhood: res.data.address.neighbourhood,
                    number: res.data.address.number,
                    city: res.data.address.city,
                    complement: res.data.address.complement,
                    state: res.data.address.state,
                    street: res.data.address.street
                });
            })
            .catch((erro) => {
                console.log(erro.response);
            });
    };

    
    const onSubmitEditAddress = (event) => {
        event.preventDefault();
        requests.editAddress(form);
        goToProfile(navigate);
        clear();
    };
    
    useEffect(() => {
        getAllAddress();
    }, []);

    return (
        <ScreenContainer>
            <Header back={true} />
            <Typography variant="h6" sx={{ color: "black" }}>
                Editar meu endereço:
            </Typography>
            <InputsContainer>
                <form onSubmit={onSubmitEditAddress}>
                    <TextField
                        name="street"
                        value={form.street}
                        onChange={inputChange}
                        placeholder="Rua / Av."
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        type="text"
                    />
                    <TextField
                        name="number"
                        value={form.number}
                        onChange={inputChange}
                        placeholder="Número"
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"dense"}
                        type="number"
                    />
                    <TextField
                        name="complement"
                        value={form.complement}
                        onChange={inputChange}
                        placeholder="Complemento"
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"dense"}
                        type={"text"}
                    />
                    <TextField
                        name="neighbourhood"
                        value={form.neighbourhood}
                        onChange={inputChange}
                        placeholder="Bairro"
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"dense"}
                        type={"text"}
                    />
                    <TextField
                        name="city"
                        value={form.city}
                        onChange={inputChange}
                        placeholder="Cidade"
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"dense"}
                        type={"text"}
                    />
                    <TextField
                        name="state"
                        value={form.state}
                        onChange={inputChange}
                        placeholder="Estado"
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"dense"}
                        type={"text"}
                    />

                    <Button type="submit" variant='contained' fullWidth color={"primary"}>
                        Salvar
                    </Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
    )

};

export default EditAddress;