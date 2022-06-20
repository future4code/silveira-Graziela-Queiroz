// import express from "express";
import { Console } from "console";
import cors from "cors";
import express, { Request, Response } from "express";
import { CreateProgram } from "typescript";
import { users } from './data'


const app = express();

app.use(express.json());
app.use(cors());



//Exercicio 1

app.get("/users", (req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        if (users.length > 0) { // se existir uma lista de usuario? (users)
            res.status(200).send(users)// retorna a lista pra mim 
        } else { //se não cai no error
            codeError = 404
            throw new Error('Lista de usuário não encontrada')
        }

    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }



})
//a) metodo GET
//B) entidade / users

//Exercicio 2

app.get("/users/:type", (req: Request, res: Response) => {
    let codeError: number = 400;

    try {
        const type = req.params.type
        const filtrar = users.filter((user) => {
            if (user.type === type) {
                return user
            }
        })

        if (!type) {
            codeError = 404
            throw new Error('É preciso digitar algum parametro')

        }
        if (!filtrar.length) {
            codeError = 404
            throw new Error('Lista de usuário não encontrada')
        }
        res.status(200).send(filtrar)

    } catch (error: any) {
        res.status(codeError).send({ message: error.message })

    }

})

// exercicio 3

// app.get("/createuser", (req: Request, res: Response) => {
//     let codeError: number = 400;
//     try {
//         const name = (req.query.name) as string
//         const filtrarUsuario: createuser | undefined = users.find(user => user.name === name)
//         if (!filtrarUsuario) {
//             codeError = 404
//             throw new Error('Usuário não encontrado por favor digite um nome de usuário!')
//         }
//         res.status(200).send(filtrarUsuario)
//     } catch (error: any) {
//         res.status(codeError).send({ message: error.message })
//     }
// })
//exercicio 4

// app.put("/users1", (req: Request, res: Response) => {
//     let codeError: number = 400;
//     try {
//         const { id, name, email, type, age } = req.body
//         if (!id || !name || !email || !type || !age) {
//             let errorCode = 422
//             throw new Error('Por favor verifique se os campos foram preenchidos corretamente')
//         }
//         const newUser: users1 = {
//             id,
//             name,
//             email,
//             type,
//             age
//         }






app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});