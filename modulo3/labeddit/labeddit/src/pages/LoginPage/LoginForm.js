import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import { useNavigate } from 'react-router-dom';
import Botao from '../../components/Botao'
import { login } from '../../services/users/users';

const LoginForm = ({buttonHeader, setButtonHeader}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" });

    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        event.preventDefault();
        login(form, clear, navigate, setButtonHeader);
        console.log("logou");
    }

    return (
        <form onSubmit={onSubmitForm}>
            <TextField
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"email"}
                variante="outlined"
                fullWidth
                margin="normal"
                required
                type={"email"}
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
            <Botao
                nome={'Continuar'}
                tipo={"submit"}
                cor={"primary"}
            />
        </form>
    );
};

export default LoginForm