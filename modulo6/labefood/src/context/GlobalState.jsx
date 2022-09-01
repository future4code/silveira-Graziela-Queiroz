import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/url";

const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantDetail, setRestaurantDetail] = useState([]);
    const [cardapio, setCardapio] = useState([]);
    const [buttonAdd, setButtonAdd] = useState(false)// criando para o button
    // const [address, setAddress] = useState({}); //Criando o estado para Editar o Endereço recebe um objeto 
    const [profile, setProfile] = useState({}); // Pegando o perfil já existente, para  poder.
    const [order, setOrder] = useState([]);
    const [history, setHistory] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([])
    const [restaurant, setRestaurant] = useState({})
    const [categoryRestaurant, setCategoryRestaurant] = useState([])

    const token = window.localStorage.getItem("token");
    const headers = {
        headers: {
            auth: token
        }
    }
    
    const getRestaurants = () => { // pega todos os restaurants
        axios.get(`${BASE_URL}/restaurants`, headers)
            .then((res) => {
                setRestaurants(res.data.restaurants)
                setCategoryRestaurant(res.data.restaurants)
            })
            .catch((err) => {
                alert("Erro!!", err);
            });
    }

    const getRestaurantDetail = (id) => {
        axios
            .get(`${BASE_URL}/restaurants/${id}`, headers)
            .then((res) => {
                setRestaurantDetail(res.data.restaurant)
                setCardapio(res.data.restaurant.products)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const addToCart = (product, quantity, newRestaurant) => {
        console.log(newRestaurant.id, restaurant.id)
        if (newRestaurant.id === restaurant.id) {
            console.log("car", cart)
            setCart([...cart, { ...product, quantity }])
        } else {
            setCart([{ ...product, quantity }])
            setRestaurant(newRestaurant)
        }
    }

    const removeCart = (id) => {
        const index = cart.findIndex((products) => products.id === id)
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }

    // const getAllAddress = () => {
    //     axios
    //         .get(`${BASE_URL}/profile/address`, headers)
    //         .then((res) => {
    //             setAddress(res.data.address);
    //         })
    //         .catch((erro) => {
    //             console.log(erro)
    //         })
    // }

    const editAddress = (body) => {
        axios.put(`${BASE_URL}/address`, body, headers)
            .then((resp) => {
                localStorage.setItem('token', resp.data.token)
                alert("Endereço cadastrado")
                console.log(resp.data)
            })
            .catch((erro) => {
                alert(erro.data)
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

    const placeOrder = (restaurantId, body) => {
        axios
            .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, headers)
            .then((res) => {
                setProduct(res.data)
                setQuantity(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const activeOrder = () => {
        axios
            .get(`${BASE_URL}/active-order`, headers)
            .then((res) => {
                setOrder(res.data.order)
                const expires = res.data.order.expiresAt
                setTimeout(() => {
                }, expires - new Date().getTime())
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const orderHistory = () => {
        axios
            .get(`${BASE_URL}/profile`, headers)
            .then((res) => {
                setHistory(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const states = { restaurants, restaurantDetail, cardapio, buttonAdd, profile, product, order, history, cart, restaurant, categoryRestaurant };
    const requests = { getRestaurants, getRestaurantDetail, getProfile, placeOrder, activeOrder, orderHistory, upDateProfile, addToCart, removeCart, editAddress };
    const setters = { setRestaurants, setRestaurantDetail, setCardapio, setButtonAdd, setProfile, setProduct, setOrder, setHistory, setCart, requests, setRestaurant, setCategoryRestaurant };
    const values = { token, headers }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};
export default GlobalState;