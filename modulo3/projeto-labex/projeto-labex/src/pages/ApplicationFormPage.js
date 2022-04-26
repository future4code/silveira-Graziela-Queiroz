// import styled from 'styled-components'
// import ApplicationFormPage from './pages/ApplicationFormPage'
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const ApplicationFormPage = () => {

    const navigate = useNavigate()

    const goToListPage = () => {
        navigate(-1)
    }

    return (
        <div>
            <div>
                <p>Eu sou a pagina Form Trips</p>
            </div>
            <button onClick={goToListPage}>Voltar</button>

        </div>
    );

}