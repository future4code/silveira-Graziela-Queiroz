import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { SignUpContainer } from './Styled'
import { TextField } from '@material-ui/core'
import Botao from '../../components/Botao'
//import TelaCadastroForm from './TelaCadastro'
import { signUp } from '../../services/users/users'

const CadastroForm = () => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })
    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate)

        return (
            <SignUpContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"username"}
                        variante="outlined"
                        fullWidth
                        margin="normal"
                        required
                        autoFocus
                        type={"username"}
                    />
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variante="outlined"
                        fullWidth
                        margin="normal"
                        required
                        autoFocus
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"password"}
                        variante="outlined"
                        fullWidth
                        margin="normal"
                        required
                        type={"password"}
                    />
                    <Botao
                        nome={'Cadastrar'}
                        tipo={"submit"}
                        cor={"primary"}
                    />
                </form>
            </SignUpContainer>
        );
    }
};

export default CadastroForm
