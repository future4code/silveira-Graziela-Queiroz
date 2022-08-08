import { DivGeral, ContainerHistorico,H1, DivButton } from "./styled";
import React from "react";
import { Button } from "@mui/material";
import { voltar } from "../../routes/Coordinator";
import {useNavigate} from "react-router-dom"



const ChamaDetail = () => {
    const navigate = useNavigate();

    return (
        <DivGeral>
            <ContainerHistorico>
                <H1>Lista de Historico </H1>
                {/* {chamar o card} */}
            </ContainerHistorico>
            <DivButton>
                <Button onClick={() => voltar(navigate)}  style={{ background: '#808080' }} color="primary" variant="contained">voltar para a pagina inicial</Button>
            </DivButton>
        </DivGeral>
    );
};
export default ChamaDetail;