import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerHeader, Title } from './styled'


export default function Header({title}) {
    const navigate = useNavigate()
    const logOut = () => { // função de logout limpa token e direciona para a pagina login.
        window.localStorage.clear('token')
        navigate('/')
    }

    return (
        <ContainerHeader> // posso estilizar pelo container
            <Title>{title}</Title>
                <img 
                width="20px" 
                src="https://raw.githubusercontent.com/future4code/Silveira-labe-food1/master/src/assets/iconelogout.png"
                onClick={logOut}
                />
        </ContainerHeader>
    )
}

