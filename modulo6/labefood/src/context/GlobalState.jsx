import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/url";

const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantDetail, setRestaurantDetail] = useState([]);
    const [cardapio, setCardapio] = useState([]);
    const [buttonAdd, setButtonAdd] = useState(false)// criando para o button
    const [address, setAddress] = useState({}); //Criando o estado para Editar o Endereço recebe um objeto 
    const [profile, setProfile] = useState({}); // Pegando o perfil já existente, para  poder.
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([]);
    const [history, setHistory] = useState([])

    const token = window.localStorage.getItem("token");
    const headers = {
        headers: {
            auth: token
        }
    }

    const getAllAddress = () => {
        axios
            .get(`${BASE_URL}/profile/address`, headers)
            .then((res) => {
                setAddress(res.data.address);
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

     
    const editAddress = (body) => {
        axios.put(`${BASE_URL}/address`, body, headers)
            .then((resp) => {
                localStorage.setItem('token', resp.data.token)
                alert("Endereço cadastrado")
                console.log(resp)
            })
            .catch((erro) => {
                alert(erro.data.message)
            })
    }
    
    const getRestaurants = () => { // pega todos os restaurants
        axios.get(`${BASE_URL}/restaurants`, headers)
            .then((res) => {
                setRestaurants(res.data.restaurants)
            })
            .catch((err) => {
                alert("Erro!!");
            });
    }

    const getRestaurantDetail = (id) => {
        axios
            .get(`${BASE_URL}/restaurants/${id}`, headers)
            .then((res) => {
                console.log(res)
                setRestaurantDetail(res.data.restaurant)
                setCardapio(res.data.restaurant.products)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getEditProfile = () => { // falta adicionar dentro de setters getEditProfile
        axios
            .get(`${BASE_URL}/profile`, headers)
            .then((res) => {
                console.log(res)
                setProfile(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const placeOrder = () => { 
        axios
            .get(`${BASE_URL}/restaurants/${id}`, headers)
            .then((res) => {
                console.log(res)
                setCart(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const activeOrder = () => { // falta adicionar dentro de setters getEditProfile
        axios
            .get(`${BASE_URL}/profile`, headers)
            .then((res) => {
                console.log(res)
                setOrder(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const orderHistory = () => { // falta adicionar dentro de setters getEditProfile
        axios
            .get(`${BASE_URL}/profile`, headers)
            .then((res) => {
                console.log(res)
                setOrderHistory(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const states = { restaurants, restaurantDetail, cardapio, buttonAdd, address, profile, cart, order, history };
    const setters = { setRestaurants, setRestaurantDetail, setCardapio, setButtonAdd, setAddress, setProfile, setCart,setOrder, setHistory };
    const requests = { getRestaurants, getRestaurantDetail, getAllAddress, editAddress, getEditProfile, placeOrder, activeOrder, orderHistory };
    const values = { token, headers }


    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};
export default GlobalState;