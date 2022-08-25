import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { goToProfile } from "../../routes/Coordinator";
import { InputsContainer, ScreenContainer } from "./styled";

function EditProfile() {

    const { states, requests } = useContext(GlobalStateContext)
    const navigate = useNavigate();


    const { form, inputChange, clear } = useForm({
        name: "",
        email: "",
        cpf: ""
    });

    useEffect(() => {
        requests.getEditProfile(form)
    })


    const onSubmitEditProfile = (event) => {
        event.preventDefault();
        requests.editProfile(form);
        clear();
        goToProfile();

    };

    return (
        <ScreenContainer>
            <Typography >
                Editar Perfil
            </Typography>
            <InputsContainer>
                <form onSubmit={onSubmitEditProfile}>
                    <TextField
                        placeholder="Nome"
                        name="name"
                        value={form.name}
                        onChange={inputChange}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        type="text"
                        label={"Nome e Sobrenome"}
                    />
                    <TextField
                        placeholder="email@email.com"
                        name="email"
                        value={form.email}
                        onChange={inputChange}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        type="text"
                        label={"E-mail"}

                    />
                    <TextField
                        placeholder="000.000.000-00"
                        name="cpf"
                        value={form.cpf}
                        onChange={inputChange}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        type="text"
                        label={"CPF"}
                        pattern={
                            "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"
                        }
                        minLength="11"
                    />
                    <Button type="submit" variant='contained' fullWidth color={"primary"}>
                        Salvar
                    </Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
    );
}

export default EditProfile;
