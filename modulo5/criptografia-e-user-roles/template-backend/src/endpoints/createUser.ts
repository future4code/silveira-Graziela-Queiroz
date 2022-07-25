// import { HashManager } from "../services/HashManager";
import connection from '../data/connection'
import { Request, Response } from "express";
import { IdGenerator } from "../service/IdGenerator";
import { AuthenticationData, user } from "../types";
import Authenticator from '../service/Authenticator';
//import { hasUncaughtExceptionCaptureCallback } from "process";


export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { email, password } = req.body

        if (email.indexOf("@") === -1 || !email) {
            res.statusCode = 422
            throw new Error("Preencha os campos corretamente")
        }
        if (!password || password.lenght <6){
            throw new Error("Invalid password")
        }

        const [user] = await connection('user')
            .where({ email })

        if (user) {
            res.statusCode = 409
            throw new Error('Email já cadastrado')
        }


        const id: string = new IdGenerator().generateId()

        const hashManager:HashManager = new HashManager ()

        const senhaCriptografada = hashManager.createHash(password)

        const newUser: user = { id, email, password:senhaCriptografada }

        await connection('user')
            .insert(newUser)

        const payload: AuthenticationData = {
            id: newUser.id
        }

        const token = new Authenticator().generateToken(payload)

        res.status(201).send({ token })

    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}


  