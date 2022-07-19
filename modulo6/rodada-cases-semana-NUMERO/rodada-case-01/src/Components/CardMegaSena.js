import React from "react"
import { CardConcursos} from "./styled"


const CardMegaSena = (props) => {
    return (
        <div >
           <CardConcursos>{props.number}</CardConcursos>
        </div>
    )

}
export default CardMegaSena;