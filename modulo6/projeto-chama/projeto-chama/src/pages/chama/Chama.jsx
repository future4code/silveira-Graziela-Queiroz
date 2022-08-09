import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { Form, ContainerInfoUser, ContainerImgForm, ContainerMapInfo, DivLogo, DivButton, DivGeral, Img, P } from "./styled";
import Button from '@mui/material/Button';
import CardUser from "../../components/Card/CardUser";
import { useNavigate } from "react-router-dom";
import { irParaDetail } from "../../routes/Coordinator";
import GlobalStateContext from "../../context/GlobalStateContext";

const Chama = () => {
    const navigate = useNavigate();
    const { states, setters, requests } = useContext(GlobalStateContext)


    const handleChange = (e) => { // recebe a informação digitada
        setters.setInput(e.target.value)
    }

    const handleSubmit = (e) => { // envia a informação digitada
        e.preventDefault();
        requests.getUserSingle(e.target.userGitHub.value)
        setters.setInput("")
        setters.setHistorico([...states.historico, states.input])
    }

    return (
        <DivGeral>
            <ContainerInfoUser>
                <DivButton>
                    <Button onClick={() => irParaDetail(navigate)} style={{ background: '#808080' }} color="primary" variant="contained">Ir para página de histórico</Button>
                </DivButton>
                <ContainerImgForm>
                    <DivLogo>
                        <Img height="150px" src="https://rafadev.com.br/wp-content/uploads/2021/01/3-razoes-para-comecar-a-utilizar-o-github.jpg" alt="logo GitHub" />
                    </DivLogo>
                    {/* <H1>Chama</H1> */}

                    <Form onSubmit={handleSubmit}>
                        <TextField style={{ background: '#dcdcdc', width: 350 }}
                            name={"userGitHub"}
                            onChange={handleChange}
                            value={states.input}
                            type="text"
                            label="Nome do usuário GitHub"
                            variant="filled"
                        />
                        <Button type="submit" // propriedade que permite o envio das informações(type=submit sempre usa junto)
                            style={{ width: 200, height: 56 }}
                            variant="contained"
                        >Enviar
                        </Button>
                    </Form>
                </ContainerImgForm>
            </ContainerInfoUser>

            <ContainerMapInfo>
                <P>Informações do usuário GitHub</P>
                    <CardUser
                        key={states.inputStore.id}
                        avatar_url={states.inputStore.avatar_url}
                        bio={states.inputStore.bio}
                        email={states.inputStore.email}
                        name={states.inputStore.name}
                        login={states.inputStore.login} >
                    </CardUser >
            </ContainerMapInfo>
        </DivGeral>
    );
};
export default Chama;