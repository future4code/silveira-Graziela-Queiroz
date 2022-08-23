import React, { useContext, useEffect } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import { InputsContainer, ScreenContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { goToRestaurant } from "../../routes/Coordinator";

const EditAddress = () => {
    const { states, requests } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.getItem('token') !== null ? requests.getAllAddress() : goToRestaurant(navigate)
    }, []);

    const { form, inputChange, clear } = useForm({
        neighbourhood: states.address.neighbourhood,
        number: states.address.number,
        city: states.address.city,
        apartament: states.address.complement,
        state: states.address.state,
        street: states.address.street,
    });


    console.log("AJUDA DEUS", form)
    const onSubmitEditAddress = (event) => {
        event.preventDefault();
        requests.editAddress(form);
        clear();
        // navegação para a pagina de profile page.
    };
 //*********** */
  // NO USE EFFECT , FALTA ATUALIZAR E TRAZER AS INFORMAÇÕES QUE JÁ ESTÁO CADASTRADA NO EDITAR  E FAZER AS ALTERAÇÕES
 // ******************
    //Dentro do submit precisa passar rota para navegar e função que seta o estado
    return (
        <ScreenContainer>
            <Typography variant="h6" sx={{ color: "black" }}>
                Editar meu endereço:
            </Typography>
            <InputsContainer>
                <form onSubmit={onSubmitEditAddress}>
                    <TextField
                        name="street"
                        value={form.street}
                        onChange={inputChange}
                        placeholder={"Logradouro"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        type="text"
                    />
                    <TextField
                        name="number"
                        value={form.number}
                        onChange={inputChange}
                        placeholder={"Numero"}
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
                        placeholder={"Complemento"}
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
                        placeholder={"Bairro"}
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
                        placeholder={"Cidade"}
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
                        placeholder={"Estado"}
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