import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export const useProtectedPage = () => { //usar par as telas que irão ser protegidas)
    const history = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token === null) {
            console.log('Não está logado')//(redirecionaparatelalogin)
            history('/login')
        }

    }, [history])
}