import { TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { InputsContainer, Line, ScreenContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import CardCategory from "../../components/CardCategory/CardCategory";

const Restaurant = () => {
    const navigate = useNavigate();
    const { states, setters, values, requests } = useContext(GlobalStateContext)
    const { getRestaurants } = requests;
    const [filterRestaurants, setFilterRestaurants] = useState("");
    const [filterfood, setFilterFood] = useState(false);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        localStorage.getItem('token') !== null ? getRestaurants() : navigate("/login")
    }, [])


    const mapCategory = states.restaurants?.map((cat) => {
        return (
            <CardCategory 
                key={cat.id}
                category={cat.category}
            /> 
        )
    })

    return (
        <ScreenContainer>
            <Typography>Rappi4</Typography>
            <Line />
            <InputsContainer>
                <TextField
                    variant='outlined'
                    color='primary'
                    fullWidth
                    type="text"
                    margin='normal'
                    label='Restaurante'
                    placeholder="Restaurante"
                    value={filterRestaurants}
                    onChange={(event) => setFilterRestaurants(event.target.value)}
                    sx={{ position: 'relative', bottom: '15px', width: '95vw' }}
                />
            </InputsContainer>
            <div style={{display: 'flex'}}>{mapCategory}</div>
        </ScreenContainer>
    )
}
export default Restaurant;
