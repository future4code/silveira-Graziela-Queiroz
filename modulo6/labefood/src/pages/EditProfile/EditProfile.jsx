import React, { useContext, useEffect } from "react";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { goToProfile } from "../../routes/Coordinator";
import { InputsContainer, ScreenContainer } from "./styled";

function EditProfile() {
    // useProtectedPage()
    const { requests } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const token = window.localStorage.getItem("token");
    const headers = {
        headers: {
            auth: token,
        },
    };

    const { form, inputChange, clear, setForm } = useForm({
        name: "",
        email: "",
        cpf: "",
    });

    const getProfile = () => {
        axios
            .get(`${BASE_URL}/profile`, headers)
            .then((res) => {
                console.log(res);
                setForm({
                    name: res.data.user.name,
                    email: res.data.user.email,
                    cpf: res.data.user.cpf
                });
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    useEffect(() => {
        getProfile();
        // requests.upDateProfile();
    }, []);


    const onSubmitEditProfile = (event) => {
        event.preventDefault();
        requests.upDateProfile(form);
        clear();
        goToProfile();
    };

    return (
        <ScreenContainer>
            <Typography variant="h6" sx={{ color: "black" }}>
                Editar Perfil
            </Typography>
            <InputsContainer>
                <form onSubmit={onSubmitEditProfile}>
                    <TextField
                        name="name"
                        value={form.name} // retornando na tela para edição
                        onChange={inputChange}
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"normal"}
                    />
                    <TextField
                        name="email"
                        value={form.email}
                        onChange={inputChange}
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"normal"}
                    />
                    <TextField
                        name="cpf"
                        value={form.cpf}
                        onChange={inputChange}
                        type="text"
                        variant={"outlined"}
                        color={"primary"}
                        fullWidth
                        margin={"normal"}
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
