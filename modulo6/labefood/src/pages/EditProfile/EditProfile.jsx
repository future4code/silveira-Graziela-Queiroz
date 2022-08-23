import { Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { InputsContainer, ScreenContainer } from "./styled";

function EditProfile() {

    const { states, requests } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const { form, inputChange, clear } = useForm({
        name: "",
        email: "",
        cpf: ""
    });
    const onSubmitEditProfile = (event) => {
        event.preventDefault();
        // requests.editProfile(form);// *********** FAZER ESTE ENDPOINT NO ESTADO GLOBAL
        clear();
      
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
