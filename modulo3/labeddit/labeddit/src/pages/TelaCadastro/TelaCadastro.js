import React from "react";
import CadastroForm from './CadastroForm'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
// import { LogoImage } from './styled'

const TelaCadastro = () => {
    useUnProtectedPage()
   
    return (
        <div>
            <CadastroForm/>
        </div>
    )
}

export default TelaCadastro