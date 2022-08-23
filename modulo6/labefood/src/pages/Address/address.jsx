import { Button, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStateContext from '../../context/GlobalStateContext';
import useForm from '../../hooks/useForm';
import { goToRestaurant } from '../../routes/Coordinator';
import { InputsContainer, ScreenContainer } from './styled';
import { addAdress } from "../../context/GlobalState"
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

const Address = () => {
    const token = window.localStorage.getItem("token");

    const navigate = useNavigate();

    const { form, InputChange, clear } = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: "",
    });

    const putAddress = () => {
        axios.put(`${BASE_URL}/address`, form, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                alert("Endereço cadastrado com sucesso!");
                clear(form);
                goToRestaurant(navigate);
            })
            .catch((err) => {
                console.log(err)
                alert("Erro ao  cadastrar endereço!")

            })
    };

    // const getAddress = async (setForm) => {
    //         await axios
    //             .get(`${BASE_URL}/profile/address`, header)
    //             .then((res) => {

    //                 setAddress(res.data);
    //                 setForm({
    //                     neighbourhood: res.data.address.neighbourhood,
    //                     number: res.data.adress.number,
    //                     city: res.data.address.number,
    //                     apartament: res.data.address.apartament,
    //                     state: res.data.address.state,
    //                     street: res.data.address.street,
    //                 })
    //             })
    //             .catch((err) => {
    //                 alert("Crie seu cadastro!!")
    //             });
    // }

    const onSubmitAddress = (event) => {
        event.preventDefault();
        putAddress(form);

    };

    return (
        <ScreenContainer>
            <Typography sx={{ color: "black", fontWeight: "bold" }}>
                Endereço
            </Typography>
            <InputsContainer>
                <form onSubmit={onSubmitAddress}>
                    <TextField
                        name="street"
                        value={form.street}
                        onChange={InputChange}
                        placeholder="Rua / Av."
                        label={"Logradouro"}
                        // color={"primary"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type="text"
                    />
                    <TextField
                        name="number"
                        value={form.number}
                        onChange={InputChange}
                        placeholder="Número"
                        label={"Número"}
                        variant={"outlined"}
                        //color={"primary"}
                        fullWidth
                        margin={"dense"}
                        required
                        type="number"
                    />
                    <TextField
                        name="complement"
                        value={form.complement}
                        onChange={InputChange}
                        placeholder="Complemento"
                        label={"Complemento"}
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"text"}
                    />
                    <TextField
                        name="neighbourhood"
                        value={form.neighbourhood}
                        onChange={InputChange}
                        placeholder="Bairro"
                        label={"Bairro"}
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"text"}
                    />
                    <TextField
                        name="city"
                        value={form.city}
                        onChange={InputChange}
                        placeholder="Cidade"
                        label={"Cidade"}
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"text"}
                    />
                    <TextField
                        name="state"
                        value={form.state}
                        onChange={InputChange}
                        placeholder="Estado"
                        label={"Estado"}
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"text"}
                    />
                    <Button type="submit" variant='contained' fullWidth color={"primary"} sx={{ marginTop: 10 }}>Salvar Endereço</Button>

                </form>
            </InputsContainer>




        </ScreenContainer>
    );

};
export default Address;