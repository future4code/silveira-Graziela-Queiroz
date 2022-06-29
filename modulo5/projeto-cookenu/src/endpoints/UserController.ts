import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateID } from "../services/GenerateID";
import { HashManager } from "../services/HashManager";
import { authenticationData, ROLE_TYPE } from "../types";


export class UserController {

    public createUser = async (req: Request, res: Response) => {
        try {
            // - inclui a coluna role no body da requisição
            const { nome, email, password, role } = req.body

            if (!nome || !email || !password || !role) {
                res.statusCode = 422
                throw new Error("Dados não confere, passe nome, email, password e role")
            }
            
            if (email.indexOf("@") === -1) {
                res.statusCode = 400
                throw new Error("Email não confere, acrescente @")
            }
            
            if (password.length < 6) {
                res.statusCode = 400
                throw new Error("A Senha deve conter no minimo 6 caracteres")
            }

            if (role !== "normal" && role !== "admin") {
                res.statusCode = 400
                throw new Error("Role inválida, insira normal ou admin")
            }

            const id: string = new GenerateID().id()

            // - Criação de hash da senha
            const senhaCripto = new HashManager().createHash(password)

            // - criar nova instância de User, Obs. precisa da mesma estrutura do banco
            const newUser = new User(id, nome, email, senhaCripto, role)

            const userDB = new UserDatabase()

            await userDB.createUser(newUser)

            const payload:authenticationData = {
                id: newUser.getId(),
                role:newUser.getRole()
            }
            const token = new Authenticator().generateToken(payload)

            const user = await userDB.getUserByEmail(email)
            
            if (user) {
                res.statusCode = 400
                throw new Error("Usuário já existe")
            }

            res.status(200).send({
                message: "Usuário logado com sucesso",
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal Server error" })
            } 
            else {
               res.send({ message: error.message })
            }
        }
    }
}
