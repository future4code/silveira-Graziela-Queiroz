import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../img/astromatch.png"
import styled from "styled-components";

const ContainerMatches = styled.div`
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
const HeaderMatches = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
`
const HeaderImgMatch = styled.img`
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`
const MatchesCard = styled.li`
    position: relative;
    height: 70px;
    padding: 10px;
    display: flex;
    list-style: none;
    width: 100%;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    box-sizing: border-box;
`
const MatchesImg = styled.img`
    height: 100%;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`
const MatchesUl = styled.ul`
    padding: 0px 10px;
`
const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/graziela-queiroz-silveira/matches"

export default function TelaMatches(props) {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios
            .get(url)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                alert("Erro!")
            })
    }

    const listMatches = matches.map((match) => {
        return (
            <MatchesCard key={match.id}>
                <MatchesImg src={match.photo} alt={match.name}/>
                <p>{match.name}</p>
            </MatchesCard>
        );
    })

    console.log(listMatches)
    return (
        <ContainerMatches>
             <HeaderMatches>
                <HeaderImgMatch src={Logo} alt="Logo Astromatch" />
                <button onClick={() => { props.paginaAnterior("TelaProfile") }}>Voltar</button>
            </HeaderMatches>
            <MatchesUl>
                {listMatches}
            </MatchesUl>
            
        </ContainerMatches>
    )
} 