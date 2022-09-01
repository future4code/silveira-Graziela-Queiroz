import React, { useContext, useEffect, useState } from "react";
import { TextField, Typography } from "@mui/material";
import { ContainerCategory, ContainerImg, ContainerRestaurant, Img, InputsContainer, Line, Menu, MenuItem, ScreenContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import CardCategory from "../../components/CardCategory/CardCategory";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import { goToDetailRestaurant, goToLogin } from "../../routes/Coordinator";
import Footerr from "../../components/footer/Footerr";
import Header from "../../components/Header/Header";

const Restaurant = () => {
    const navigate = useNavigate();
    const { states, requests } = useContext(GlobalStateContext)
    const [inputText, setInputText] = useState("")
    const [buttonCategory, setButtonCategory] = useState("")


    const restaurantsFilter = states.restaurants.filter((restaurant) =>
        inputText ? restaurant.name.toLowerCase().includes(inputText.toLocaleLowerCase()) : true
    ).filter((restaurant) =>
            buttonCategory ? restaurant.category.toLowerCase().includes(buttonCategory.toLowerCase()) : true
        ).map((rest) => {
            return (
                <CardRestaurant
                    key={rest.id}
                    logoUrl={rest.logoUrl}
                    name={rest.name}
                    deliveryTime={rest.deliveryTime}
                    shipping={rest.shipping}
                    onClick={() => goToDetailRestaurant(navigate, rest.id)}
                />
            )
        })


    // useEffect(() => {
    //     localStorage.getItem('token') !== null ? requests.getRestaurants() : goToLogin(navigate);
    // }, []);

    // useEffect(() => {
    //     setters.setCategoryRestaurant((state) => (states.categoryRestaurant ? "#e32636" : "#ff9500"));
    // }, [states.categoryRestaurant]);

        // const categoryFilter = (res) =>{
    //     const array = []
    //     res && res.map((cat) =>{
    //       array.push(cat.category)
    //     })
    //     const itemDuplicate = [...new Set(array)]
    //     setCategoryRestaurant(itemDuplicate)
    // }

    useEffect(() => {
        requests.getRestaurants();
        requests.activeOrder();
    }, []);

    const onChangeInputText = (event) => {
        setInputText(event.target.value);
    };

    return (
        <ScreenContainer>
            <Header
                title={"Rappi4"}
                padding={"15px"}
            />
            <InputsContainer>
                <TextField
                    variant='outlined'
                    color='primary'
                    fullWidth
                    type="text"
                    margin='normal'
                    label='Restaurante'
                    placeholder="Restaurante"
                    value={inputText}
                    onChange={onChangeInputText}
                    sx={{ position: 'relative', bottom: '15px', width: '95vw' }}
                />
                <Menu>
                    <MenuItem onClick={() => setButtonCategory("")}>
                    Todos
                    </MenuItem>
                    {states.categoryRestaurant.map((category) => {
                        return (
                            <CardCategory
                                key={category.id}
                                select={false}
                                onClick={() => setButtonCategory(category.category)}
                                category={category.category}
                            >
                            {category}
                        </CardCategory>)
                    })}
                </Menu>
            </InputsContainer>
            <div>{restaurantsFilter}</div>
            {/* {order && <Order restaurantName={order.restaurantName} totalPrice={order.totalPrice}/>} */}
            <Footerr />
        </ScreenContainer>
    )
}
export default Restaurant;
