import { CardGenre } from "./styled";
import { useNavigate } from "react-router-dom";

const CardButtonMovie = (props) => {


    const navigate = useNavigate()

        const irParaDetalhes = (id) =>{
          navigate (`/detalheDosFilmes/${id}`)
        }
      
      

    return (// Como o card precisa ficar clicavel, aqui acontece a mudançaGenero, esse onClick permite  o usuario clicar selecionar o genero e tirar ele de selecao.

        <div>
        <CardGenre onClick={()=>props.mudancaGenero(props.id)}>{props.genre}</CardGenre>
        </div>
    );
};
export default CardButtonMovie;

// card generos de filmes