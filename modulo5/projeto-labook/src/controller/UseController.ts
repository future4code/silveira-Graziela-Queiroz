import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { SignupInputDTO } from "../types/signupInputDTO";

export default class UserController {

    constructor(
        private userBussiness:UserBusiness
    ){}


    signUp = async (req: Request, res: Response) => {
         
        const { name, email, password } = req.body;
            
        const input: signupInputDTO  ={
            name,
            email,
            password
            
        } 

        try {
            const token = await this.userBussiness.signUp(input)
             res.status(201).send({ message: "Usuario criado com sucesso !!", token })
            
        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

}

// const userBusiness = new UserBusiness()
//             const token = await userBusiness.signUp(user)
