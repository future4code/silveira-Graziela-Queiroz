import React from 'react'
import { ScreenContainer, LoginContainer } from "./styled"
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import LoginForm from "./LoginForm"
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { login } from "./service/users"

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" });

    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(form);
        login(form, clear, navigate);
    };
return (
    <ScreenContainer>
        <h1>LoginForm</h1>
        <LoginContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"name"}
                    variante="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type={"name"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variante={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />
                <Button
                    nome={' Crie uma conta'}
                    type={"submit"}
                    cor={"pink"}
                />
            </form>
        </LoginContainer>
    </ScreenContainer>
    );
};

export default LoginForm