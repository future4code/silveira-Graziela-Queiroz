import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { login } from "../types/login";
import { SignUp } from "../types/SignUp";

export class UserController {

    constructor(
        private userBussiness: UserBusiness
    ){}

   //O método constructor obriga quem chamar o UserController há criar a instância
   // só no controller só ele vai ter rest e req

    signUp = async (req: Request, res: Response) => {
        try {
        
            const { name, email, password } = req.body;

            //Estruturação do objeto que seria o mesmo acima.(Tratamento dos dados acima)  
            const input: SignUp  ={
                name,
                email,
                password
            } 
            //signupInput é um objeto que vai tranferir informações dentro do código entre as camadas. 
            //UserController precisa do UserBusiness vai usar UserData
            const token = await this.userBussiness.signUp(input)

            res.status(201).send({
                 message: "Usuario criado com sucesso !!", 
                 token 
            })

        } catch (error: any) {
            if (error instanceof Error) {
                res.status(400).send({ message:error.message })
            } else {
                res.status(500).send( "Erro no signup" )
            }
        }
    }


    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
           
            const input: login  ={
                email,
                password
            } 
    
            const token = await this.userBussiness.login(email, password)
            
            res.status(201).send({ 
                message: "Usuario logado com sucesso !!", 
                token 
            })
            
        } catch (error: any) {
            if (error instanceof Error) {
                res.status(400).send({message:error.message })
            } else {
                res.status(500).send( "Erro no login" )
            }
        }
    }

    

}

