import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { login } from "../types/login";
import { SignUp } from "../types/SignUp";


export class UserController {

    constructor(
        private userBussiness: UserBusiness
    ) { }

    signUp = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body;
            const input: SignUp = {
                name,
                email,
                password
            }
            const token = await this.userBussiness.signUp(input)

            res.status(201).send({
                message: "Usuario criado com sucesso !!",
                token
            })

        } catch (error: any) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message })
            } else {
                res.status(500).send("Erro no signup")
            }
        }
    }


    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const input: login = {
                email,
                password
            }
            const token = await this.userBussiness.login(input)

            res.status(201).send({
                message: "Usuario logado com sucesso !!",
                token
            })

        } catch (error: any) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message })
            } else {
                res.status(500).send("Erro no login")
            }
        }
    }

    
}
