import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Form, ContainerInfoUser, ContainerMapInfo, DivButton, DivGeral, H1, Img } from "./styled";
import Button from '@mui/material/Button';
import axios from "axios";
import { BASE_URL } from "../../constants/url/url";
import CardUser from "../../components/Card/CardUser";

const Chama = () => {
    const [user, setUser] = useState([])
    const [single, setSingle] = useState("") // estado somente para pegar um unico usuario.

    const getUser = async () => {  // endpoint  retorna lista de usuarios
        await axios
            .get(`${BASE_URL}/${single}`)
            .then((res) => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getUser()
    }, [single]);

    // console.log(getAllUser)
    //   const onChangeInput = (e) => { // recebe a informação digitada
    //     setInput(e.target.value)
    //   }

    const handleChange = (e) => { // envia a informação digitada
        setSingle(e.target.value)
    }

    const handleSubmit = (e) => { // envia a informação digitada
        e.preventDefault();
        console.log('clicou')
    }

   console.log('USUARIO', single)

    return (
        <DivGeral>
            <ContainerInfoUser>
                <div>
                    <Img height="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMFdsUl9b1zLVBxNNnJPyovDPinngoRGbLw&usqp=CAU" alt="logo GitHub" />
                </div>
                <H1>Projeto Chama</H1>
                <Form onSubmit={handleSubmit}>
                    <TextField style={{ background: '#dcdcdc', widht: "250px" }} label="Nome do usuário usado no GitHub" variant="filled"
                        type="text"
                        value={single}
                        onChange={handleChange}
                    />
                    {/* <Button style={{ width: "200px", height: "55px" }} variant="contained" type="submit" >Enviar</Button> */}
                    <input type="submit" value="Enviar" />
                </Form>
            </ContainerInfoUser>
            <ContainerMapInfo>
                <p>Este é o map de pegar os usuarios</p>

                <CardUser
                    key={user.id}
                    avatar={user.avatar_url}
                    bio={user.bio}
                    email={user.email}
                    name={user.name} >
                </CardUser >
            </ContainerMapInfo>
            <DivButton>
                <Button style={{ background: '#808080' }} color="primary" variant="contained">Ir para página de detalhes</Button>
            </DivButton>

        </DivGeral>
    );
};
export default Chama;