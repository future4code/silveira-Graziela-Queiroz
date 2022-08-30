import React from "react";
import { CardStyleCategory } from "./styled";


const CardCategory = (props) => {
    return(
        <CardStyleCategory onClick={props.onClick}>
            <p>{props.category}</p>
        </CardStyleCategory>
    );
};

export default CardCategory;