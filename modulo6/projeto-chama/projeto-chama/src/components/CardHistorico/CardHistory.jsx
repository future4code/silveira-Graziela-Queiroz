import React from "react"
import { CardUserStyled, ButtonHistorico, CardP } from "./style";

const CardHistory = (props) => {
    return (
        <div>
            <CardUserStyled>
                <ButtonHistorico onClick={()=>props.pesquisaDnv(props.name)}>
                     <p>{props.historico}</p>
                     <CardP> Clique aqui para ver este perfil novamente</CardP>
                     </ButtonHistorico>
            </CardUserStyled>
        </div>
    );
};

export default CardHistory