import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { useForm } from "../hooks/useForm";

const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantDetail, setRestaurantDetail] = useState([]);


    const token = window.localStorage.getItem("token");
    const headers = {
        headers: {
            auth: token
        }
    }

    const getRestaurants = async () => {
        await axios.get(`${BASE_URL}/restaurants`, headers )
            .then((res) => {
                setRestaurants(res.data.restaurants)
                console.log(res.data.restaurants)

            })
            .catch((err) => {
                alert("Erro!!");
            });
    }

    const getRestaurantDetail = (id) => {
        axios
            .get(`${BASE_URL}/restaurants/${1}`, headers)
            .then((res) => {
                console.log('DETALHE', res.data.restaurantDetail)
                setRestaurantDetail(res.data.restaurant)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const states = { restaurants, restaurantDetail };
    const setters = { setRestaurants, setRestaurantDetail };
    const requests = { getRestaurants, getRestaurantDetail };
    const values = { token, headers }


    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};
export default GlobalState;