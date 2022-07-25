import * as jwt from "jsonwebtoken"
//import { AuthenticationData } from "../types";
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = "5min"

export default class Authenticator {
    generateToken = (input: ): string => {
        const token = jwt.sign({
                payload
        },
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        );     
      return token
    }

    getTokenData = (token: string) => {

     const tokenData = jwt.verify(
        token,process.env.JWT_KEY as string
     )
      return tokenData as AuthenticationData
    }
    
}

// FUNÇÃO GERA O TOKEN DO USUARIO
              





