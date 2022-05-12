import React from 'react'
import { ScreenContainer, LoginContainer, SignUpContainer } from './styled'
// import logo from "../../assets/"
import Botao from '../../components/Botao'
import { useNavigate } from 'react-router-dom'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
import LoginForm from './LoginForm'
import { goToCadastro } from '../../routes/coordinator'

const LoginPage = ({buttonHeader, setButtonHeader}) => {
  useUnProtectedPage()
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <h1>LoginPage</h1>
      <LoginContainer>
        <LoginForm buttonHeader={buttonHeader} setButtonHeader={setButtonHeader}/>
      </LoginContainer>
      <SignUpContainer>
        <Botao
          nome={'Crie uma conta'}
          type={"submit"}
          cor={"secondary"}
          funcao={goToCadastro}
          parametro={navigate}
        />
      </SignUpContainer>
    </ScreenContainer>
  )
}

export default LoginPage