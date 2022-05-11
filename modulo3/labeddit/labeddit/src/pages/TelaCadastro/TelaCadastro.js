import React from "react";
import useUnProtectedPage from '../../hooks/useUnProtectedPage';
// import logo from '../../assets/logo.png'
// import { ScreenContainer } from './'
import { CadastroForm } from './CadastroForm'
// import { LogoImage } from './styled'



const TelaCadastro = () => {
    useUnProtectedPage ()
    return (
        <div>
         
            {/* <LogoImage src={logo} /> */}
            {/* <SignUpForm /> */}
        </div>
    )

}

export default TelaCadastro