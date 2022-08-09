import { DivGeral, ContainerHistorico, H1, DivButton, ContainerHeader, Header } from "./styled";
import React, { useContext } from "react";
import { Button } from "@mui/material";
import { voltar } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom"
import GlobalStateContext from "../../context/GlobalStateContext";
import CardHistorico from "../../components/CardHistorico/CardHistory";

const ChamaDetail = () => {
    const { states, setters, requests } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const pesquisaDnv = (name) => { // envia a informação digitada
        setters.setInput(name)
        requests.getUserSingle(name)
        voltar(navigate)
    }

    const historicos =  states.historico?.map((hist) => {
        return (
            <CardHistorico
                key={hist.id}
                historico={hist}
                pesquisaDnv={pesquisaDnv}
                name={hist}
            />
        )
    })
    
    return (
        <DivGeral>
              <ContainerHeader>
                <Header>
                    <DivButton>
                        <Button onClick={() => voltar(navigate)} style={{ background: '#808080' }} color="primary" variant="contained">voltar para a pagina inicial</Button>
                    </DivButton>

                    <H1>Lista de Histórico</H1>
                </Header>
              </ContainerHeader>
            <ContainerHistorico>
                {historicos}
            </ContainerHistorico>
        </DivGeral>
    );
};
export default ChamaDetail;