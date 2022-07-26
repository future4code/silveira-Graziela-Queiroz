import { CardGenre } from "./Styled";

const CardButtonMovie = (props) => {
    return (
      <div>
        <CardGenre>{props.genre}</CardGenre>
      </div>
    );
};

// card generos de filmes