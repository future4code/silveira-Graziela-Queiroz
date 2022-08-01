import { CardGenre } from "./styled";
import React, { useEffect, useState } from "react"


const CardButtonMovie = (props) => {
    const [toogle, setToogle] = useState(true);
    const [cor, setCor] = useState("#D18000");

    useEffect(() => {
        setCor((state) => (toogle ? "#FFFFFF" : "#D18000"));
    }, [toogle]);

    return (// Como o card precisa ficar clicavel, aqui acontece a mudançaGenero, esse onClick permite  o usuario clicar selecionar o genero e tirar ele de selecao.
        <div>
            <CardGenre
                onClick={() => {
                    setToogle((state) => !state);
                    props.mudancaGenero(props.id)
                }}
                style={{ backgroundColor: cor }}>
                {props.genre}
            </CardGenre>
        </div>
    );
};
export default CardButtonMovie;

// card generos de filmes