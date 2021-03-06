import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateID } from "../services/GenerateID";
import { HashManager } from "../services/HashManager";
import { authenticationData, ROLE_TYPE } from "../types";
//import {moment} from "moment" 

export class UserController {

    public createUser = async (req: Request, res: Response) => {
        try {
            // - inclui a coluna role no body da requisição
            const { nome, email, password, role } = req.body

            //validaçoes para fazer o cadastro
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
           
            const senhaCripto = new HashManager().createHash(password) // - Criação de hash da senha
            const id: string = new GenerateID().id() // gerando ID automaticamente

            // - criar nova instância de User, Obs. precisa da mesma estrutura do banco
            const newUser = new User(id, nome, email, senhaCripto, role)

            const userDB = new UserDatabase()
            await userDB.createUser(newUser)

            const user = await userDB.getUserByEmail(email)
            if (user) {
                res.statusCode = 400
                throw new Error("Usuário já existe")
            }

            const payload: authenticationData = {
                id: newUser.getId(),
                role: newUser.getRole()
            }

            const token = new Authenticator().generateToken(payload)

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

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 400
                throw new Error("Dados não confere, passe o email e senha")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserByEmail(email)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            //  - Comparação de hash da senha
            const passwordIsCorrect = new HashManager().compareHash(password, user.getPassword())

            if (!passwordIsCorrect) {
                res.statusCode = 400
                throw new Error("credenciais inválidas")
            }

            //  - criar nova instância de Authenticator passando agora o role junto com o id do usuário para geração do token
            const token = new Authenticator().generateToken({
                id: user!.getId(),
                role: user!.getRole()
            })

            res.status(200).send({
                message: "Usuário logado com sucesso",
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.send({ message: error.message })
            }
        }
    }

    public getUserProfile = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token) as authenticationData

            if (!token) {
                res.statusCode = 401
                throw new Error("token inválido ")
            }
            //  Verificação de role, se role for diferente de normal, retorna erro de acesso negado
            if (tokenData.role !== ROLE_TYPE.NORMAL) {
                res.statusCode = 403
                throw new Error("Não autorizado, role inválido, precisa ser normal")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserById(tokenData.id)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            //  Envio de dados do usuário, agora com o role
            res.status(200).send(user)

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.send({ message: error.message })
            }
        }
    }

    public getUserProfileId = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error("token inválido ")
            }
            if (!id) {
                res.statusCode = 400
                throw new Error(" não existe este ID")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserById(id)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            //  Envio de dados do usuário, agora com o role
            res.status(200).send(user)

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.send({ message: error.message })
            }
        }
    }

}