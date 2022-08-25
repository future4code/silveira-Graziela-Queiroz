import { IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import { BoxAddress, ContainerAddress, HistoryContainer, InputsContainer, Line, LineHeader, Perfil, ScreenContainer } from "./styled";
import EditIcon from "@mui/icons-material/Edit";


export default function Profile() {

    const { states, requests } = useContext
        (GlobalStateContext);
    const navigate = useNavigate();

    useEffect(() => {
        //FAZER ENDPOINTS NO GLOBAL DE GET PROFILE E GET ORDER HISTORY E PASSAR AQUI!!!
        //requests.getProfile()
        //requests.getOrderHistory()
    }, []);

    return (
        <ScreenContainer>
            <Typography variant="h6" sx={{ color: "black" }}>
                Meu Perfil
            </Typography>
            <LineHeader />
            <br></br>
            <InputsContainer>
                <Perfil>
                    <p>{ }</p>
                    <p>{ }</p>
                    <p>{ }</p>
                </Perfil>
                <IconButton
                    onClick={""}
                    color="primary"
                    sx={{ color: "black", bottom: "25px" }}
                />
                <EditIcon />
            </InputsContainer>

            <BoxAddress>
                <Typography variant="h6" color="primary" sx={{ color: "#8E8E93" , height:"20px"}}>
                    Endereço Cadastrado
                </Typography>
                <ContainerAddress>
                    <div>
                        <p>{""}</p>
                    </div>
                    <IconButton
                        onClick={""}
                        sx={{ color: "black", position: "relative", bottom: "25px" }}
                    >
                        <EditIcon />
                    </IconButton>
                </ContainerAddress>
            </BoxAddress>
            <Typography varivant="h6" sx={{ color: "black" }}>
                Histórico de pedidos:
                    <Line />
                <HistoryContainer>
                    <h4>Você não realizou nenhum pedido</h4>
                </HistoryContainer>
            </Typography>
        </ScreenContainer>
    )



}