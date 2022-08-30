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
    const [order, setOrder] = useState([]);
    const [history, setHistory] = useState([]);
    
    const [quantity, setQuantity] = useState([]);
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([])
    const [restaurant, setRestaurant] = useState({})

    const token = window.localStorage.getItem("token");
    const headers = {
        headers: {
            auth: token
        }
    }

    const addToCart = (product, quantity, newRestaurant) =>{
        console.log(newRestaurant.id, restaurant.id)
        if(newRestaurant.id === restaurant.id){
            console.log("car", cart)
            setCart([ ...cart, { ...product, quantity }])
        }else{
            setCart([{ ...product, quantity }])
            setRestaurant(newRestaurant)
        }
    }

    const removeCart = (id) =>{
        const index = cart.findIndex((products) => products.id === id)
        const newCart = [ ...cart ]
        newCart.splice(index, 1)
        setCart(newCart)
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
                alert(erro.data)
            })
    }
    
    const upDateProfile = (body) => {
        axios.put(`${BASE_URL}/profile`, body, headers)
            .then((resp) => {
                alert("Alteraçoes salvas!!")
                console.log("editou", resp.data)
            })
            .catch((erro) => {
                alert(erro.data)
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

    const getProfile = () => {
        axios
          .get(`${BASE_URL}/profile`, headers)
          .then((res) => {
            console.log(res);
            setProfile(res.data);
          })
          .catch((err) => {
            console.log(err.response);
          });
      };

    const placeOrder = (restaurantId, body) => { 
        axios
            .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, headers)
            .then((res) => {
                console.log(res)
                setProduct(res.data)
                setQuantity(res.data)
            })
            .catch((err) => {
                console.log(err);
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
                setHistory(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const states = { restaurants, restaurantDetail, cardapio, buttonAdd, address, profile, product, order, history, cart, restaurants };
    const requests = { getRestaurants, getRestaurantDetail, getAllAddress, editAddress, getProfile,placeOrder, activeOrder, orderHistory, upDateProfile, addToCart, removeCart };
    const setters = { setRestaurants, setRestaurantDetail, setCardapio, setButtonAdd, setAddress, setProfile, setProduct,setOrder, setHistory, setCart, requests, setRestaurant  };
    const values = { token, headers }


    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};
export default GlobalState;