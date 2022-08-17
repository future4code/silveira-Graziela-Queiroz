import { TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ContainerCategory, ContainerRestaurant, InputsContainer, Line, ScreenContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import CardCategory from "../../components/CardCategory/CardCategory";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import Footer from "../../components/footer/Footer"

const Restaurant = () => {
    const navigate = useNavigate();
    const { states, setters, values, requests } = useContext(GlobalStateContext)
    const { getRestaurants, getRestaurantDetail } = requests;
    const [filterRestaurants, setFilterRestaurants] = useState("");
    const [filterfood, setFilterFood] = useState(false);
    const [category, setCategory] = useState(false);
    const [collor, setcollor] = useState('#FF9500')
 


    useEffect(() => {
        localStorage.getItem('token') !== null ? getRestaurants() : navigate("/login")
    }, [])

    useEffect(() => {
        getRestaurantDetail()
    }, []);

    useEffect(() => {
        setCategory((state) => (category ? "#e32636" : "#ff9500"));
    }, [category]);

    const mapCategory = states.restaurants?.map((cat) => {
        return (
            <CardCategory
                onClick={() => { setCategory((state) => !state) }}
                key={cat.id}
                category={cat.category}
            />
        )
    })

    const mapRestaurant = states.restaurants?.map((rest) => {
        
        return (
            <CardRestaurant
                key={rest.id}
                logoUrl={rest.logoUrl}
                name={rest.name}
                deliveryTime={rest.deliveryTime}
                shipping={rest.shipping}
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
            <ContainerCategory>{mapCategory}</ContainerCategory>
            <div>{mapRestaurant}</div>
            <Footer/>
        </ScreenContainer>
    )
}
export default Restaurant;
