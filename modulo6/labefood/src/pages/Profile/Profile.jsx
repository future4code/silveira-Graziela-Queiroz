import { IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import { BoxAddress, ContainerAddress, HistoryContainer, InputsContainer, Perfil, ScreenContainer, Adrress, BoxHistory } from "./styled";
import EditIcon from "@mui/icons-material/Edit";
import useProtectedPage from "../../hooks/useProtectedPage";
import Footerr from "../../components/footer/Footerr";
import { goToEditAddress, goToEditProfile } from "../../routes/Coordinator";
import Header from "../../components/Header/Header";
import { FooterFooter } from "../../components/footer/styled";

export default function Profile() {
    useProtectedPage()
    const { states, requests } = useContext(GlobalStateContext);
    const navigate = useNavigate();

    useEffect(() => {
        requests.getProfile()
        //requests.getOrderHistory()
    }, []);

    console.log("profile", states.profile)
    return (
        <ScreenContainer>
            <Header
                title={"Meu perfil"}
                padding={"15px"}
            />
            <InputsContainer>
                <Perfil>
                    <p style={{textTransform: 'capitalize'}}>{states.profile.user && states.profile.user.name}</p>
                    <p>{states.profile.user && states.profile.user.email}</p>
                    <p>{states.profile.user && states.profile.user.cpf}</p>
                </Perfil>
                <IconButton
                    onClick={() => goToEditProfile(navigate)}
                    sx={{ color: "black", bottom: "25px" }}
                >
                    <EditIcon sx={{ margin: '20px' }} />
               </IconButton>
            </InputsContainer>

            <BoxAddress>
                <Typography variant="h6" color="primary" sx={{ color: "#8E8E93", height: 20, fontSize: 16, fontWeight: 'bold', marginRight: '20px', marginLeft: '20px', marginTop: '15px' }}>
                    Endereço Cadastrado
                </Typography>
                <ContainerAddress>
                    <Adrress>
                        <p style={{textTransform: 'capitalize', margin: 0}}>{states.profile.user && states.profile.user.address}</p>
                    </Adrress>
                    <IconButton
                        onClick={() => goToEditAddress(navigate)}
                        sx={{ color: "black", bottom: "25px" }}
                    >
                        <EditIcon sx={{ margin: '20px' }}/>
                    </IconButton>
                </ContainerAddress>
            </BoxAddress>
            
            <BoxHistory>
                <Typography varivant="h6" sx={{ color: "black", fontSize: 16, fontWeight: 'bold', marginRight: '20px', marginLeft: '20px', marginTop: '15px', borderBottom: '1px, solid black' }}>
                    Histórico de pedidos
                </Typography>
                <HistoryContainer>
                    <p style={{ disply: 'flex', justifyContent: 'center' }}>Você não realizou nenhum pedido</p>
                </HistoryContainer>
            </BoxHistory>
           
            <FooterFooter />
        </ScreenContainer>
    )



}