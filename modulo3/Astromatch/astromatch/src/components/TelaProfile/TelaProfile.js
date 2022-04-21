import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Logo from "../img/astromatch.png"
import "./TelaProfile.css"

const logo2 = "https://get.pxhere.com/photo/network-people-business-icon-social-friend-technology-concept-management-net-leader-corporation-marketing-community-society-team-connection-organization-communication-networking-crowd-company-connect-line-art-line-circle-clip-art-symbol-graphics-1625055.jpg";

const BoxContainer = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
const HeaderMain = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
`
const HeaderImg = styled.img`
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`
const HeaderImg2 = styled.img`
    width: 2.25rem;
    height: 2.25rem;  
`
const ContainerProfile = styled.div`
    padding: 20px 20px 0px;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    justify-content: flex-end;
`
const ImgProfile = styled.img`
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    height: 430px;
    animation: 0.5s ease 0s 1 normal forwards running none;
    display: flex;
    align-items: center;
`
const TextProfile = styled.div`
    height: 30%;
    position: absolute;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px;
`
const NameProfile = styled.div`
    font-weight: bold;
    font-size: 24px;
    max-height: 25%;
`    

const url =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/graziela-queiroz-silveira/person"; 
const url2 =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/graziela-queiroz-silveira/choose-person";

export default function TelaProfile(props) {
    const [perfil, setPerfil] = useState({});

    useEffect(() => {
        getEscolhaUmPerfil()
    }, [])

    const getEscolhaUmPerfil = () => {
        axios
            .get(url)
            .then((res) => {
                setPerfil(res.data.profile)
            })
            .catch((err) => {
                alert("Erro!")
            })
    }

    const escolhePerfil = (boolean) => {
        const headers = {
            "Content-Type": "application/json"
        }
        const body =
        {
            "id": perfil.id,
            "choice": boolean
        }
        axios
            .post(url2, body, headers)
            .then((res) => {
                getEscolhaUmPerfil()
            })
            .catch((err) => {
                alert("Puxa! Erro...")
            })

    }

    return (
        <BoxContainer>
            <Container>
                <HeaderMain>
                    <HeaderImg src={Logo} alt="Logo Astromatch" />
                    <HeaderImg2 src={logo2} onClick={() => { props.proximaPagina("TelaMatches") }} />
                </HeaderMain>
                <ContainerProfile>
                    <ImgProfile src={perfil.photo} alt={perfil.name} />
                    <TextProfile>
                        <NameProfile>
                            <p>{perfil.name}, {perfil.age}</p>
                            
                        </NameProfile>
                         <p>{perfil.bio}</p>
                    </TextProfile>

                </ContainerProfile>
                <div className="divCurtir">
                    <button className="ncurtir" onClick={() => escolhePerfil(false)}>X</button>
                    <button className="curtir" onClick={() => escolhePerfil(true)}>♥️</button>
                </div>
            </Container>
        </BoxContainer>
    );
}