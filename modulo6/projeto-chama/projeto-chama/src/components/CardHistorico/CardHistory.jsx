import React from "react"
import { CardUserStyled, ButtonHistorico } from "./style";

const CardHistory = (props) => {
    return (
        <div>
            <CardUserStyled>
                <ButtonHistorico onClick={()=>props.pesquisaDnv(props.name)}> <p>{props.historico}</p>Clique aqui para ver este perfil novamente</ButtonHistorico>
            </CardUserStyled>
        </div>
    );
};

export default CardHistory