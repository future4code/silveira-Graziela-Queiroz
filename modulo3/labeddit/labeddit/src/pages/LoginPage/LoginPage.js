import React from 'react'
import{Button} from "material-ui/core/Button"
import{ScreenContainer,logoImage, InputsContainer}from "./styled"
import useForm from '../../hooks/useForm'
// import logo from "../../assets/"

const LoginPage = () => {
   const[form,onChange,clear] = useForm({email:"",password:""})
  const onSubmitForm = () => {

  }
  return (
    <ScreenContainer>
      <logoImage src={logo}/>
      <h1>LoginPage</h1>
      <InputsContainer>
          <form onSubmit={onSubmitForm}>
            <TextField
               name={"email"}
                value={form.email}
                onChange={onChange}
            />  
            <Text  
          </form>

      </InputsContainer>
      {/* <Button variant="contained" color="primary">
       Continuar
      </Button>
      <Button variant="contained" color="secondary">
       Crie uma conta!
      </Button> */}

    </ScreenContainer>
  )
}

export default LoginPage