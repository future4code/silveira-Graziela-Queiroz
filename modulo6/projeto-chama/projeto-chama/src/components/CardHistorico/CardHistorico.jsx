import React from "react"
// import { CardUserStyled } from "./styled";

const CardHistorico = () => {// CardHistorico
    return (
        <div>
            <CardUserStyled>
                <ol>
                    <li>{props.historico}</li>
                    <button>Clique aqui para ver este perfil novamente</button>
                </ol>

            </CardUserStyled>
        </div>
    );
};

export default CardHistorico