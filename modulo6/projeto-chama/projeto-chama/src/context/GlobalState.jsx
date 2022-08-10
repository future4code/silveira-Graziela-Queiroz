import { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/url/url";

const GlobalState = (props) => {
    const [user, setUser] = useState([])
    const [input, setInput] = useState("") // estado somente para pegar um unico usuario.
    const [inputStore, setInputStore] = useState("")
    const [historico, setHistorico] = useState([]) // criou um estado

    const getUser = async () => {  // endpoint  retorna lista de usuarios
        await axios
            .get(`${BASE_URL}`)
            .then((res) => {
                 console.log(res.data)
                 setUser(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getUserSingle = async (name) => {  // endpoint  retorna um unico usuario
        await axios
            .get(`${BASE_URL}/${name}`) // não quer que renderize, só quando clicar no botao enviar
            .then((res) => {
                setInputStore(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    useEffect(() => {
        getUser()
    }, []);

  const states = { user, input, inputStore, historico};// declarando states, setters e requests
  const setters = {setUser, setInput, setInputStore, setHistorico};
  const requests = {getUser, getUserSingle};
  

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>{props.children}</GlobalStateContext.Provider>
    );
};

export default GlobalState