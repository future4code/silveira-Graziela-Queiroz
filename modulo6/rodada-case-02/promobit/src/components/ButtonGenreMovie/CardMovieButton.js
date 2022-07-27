import { CardGenre } from "./styled";

const CardButtonMovie = (props) => {
    return (
        <div>
        <CardGenre>{props.genre}</CardGenre>
        </div>
    );
};
export default CardButtonMovie;

// card generos de filmes