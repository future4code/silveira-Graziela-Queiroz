import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Form, ContainerInfoUser, ContainerMapInfo, DivButton, DivGeral, H1, Img } from "./styled";
import Button from '@mui/material/Button';
import axios from "axios";
import { BASE_URL } from "../../constants/url/url";
import CardUser from "../../components/Card/CardUser";
import { useNavigate } from "react-router-dom";
import { irParaDetail } from "../../routes/Coordinator";

const Chama = () => {
    const [user, setUser] = useState([])
    const [input, setInput] = useState("") // estado somente para pegar um unico usuario.
    const [inputStore, setInputStore] = useState("")
    const [historico, setHistorico] = useState([]) // criou um estado

    const navigate = useNavigate();
    
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

    const getUserSingle = async () => {  // endpoint  retorna um unico usuario
        await axios
            .get(`${BASE_URL}/${input}`) // não quer que renderize, só quando clicar no botao enviar
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

    const handleChange = (e) => { // recebe a informação digitada
        setInput(e.target.value)
    }

    const handleSubmit = (e) => { // envia a informação digitada
        e.preventDefault();
        getUserSingle()
        setInput("")
        setHistorico([...historico, input])//COLOCAR NO ESTADO GLOBAL, PARA APARECER DENTRO DO CARD DE DETALHES AS INFORMAÇÕES
    }
 
    console.log('inpustore', inputStore)


    return (
        <DivGeral>
            <ContainerInfoUser>
                <div>
                    <Img height="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMFdsUl9b1zLVBxNNnJPyovDPinngoRGbLw&usqp=CAU" alt="logo GitHub" />
                </div>
                <H1>Chama</H1>

                <Form onSubmit={handleSubmit}>
                    <TextField style={{ background: '#dcdcdc', widht: "250px" }} label="Nome do usuário usado no GitHub" variant="filled"
                        type="text"
                        value={ input }
                        onChange={handleChange}
                    />
                    <Button 
                    type="submit" // propriedade que permite o envio das informações(type=submit sempre usa junto)
                    style={{ width: "200px", height: "55px" }} 
                    variant="contained"
                    >Enviar
                    </Button>
                </Form>
            </ContainerInfoUser>

            <ContainerMapInfo>
                <p>Informações do usuario do GitHub</p>

                <CardUser
                    key={inputStore.id}
                    avatar_url={inputStore.avatar_url}
                    bio={inputStore.bio}
                    email={inputStore.id}
                    name={inputStore.repos_url}
                    login={inputStore.login} >
                </CardUser >
            </ContainerMapInfo>
            <DivButton>
                <Button onClick={() => irParaDetail(navigate)} style={{ background: '#808080' }} color="primary" variant="contained">Ir para página de detalhes</Button>
            </DivButton>

        </DivGeral>
    );
};
export default Chama;