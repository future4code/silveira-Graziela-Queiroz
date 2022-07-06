import { authenticationData } from "../types/authData";
import { sign, verify } from "jsonwebtoken"

export class Authenticator {

    generateToken = (payload: authenticationData): string => {
        const token = sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: process.env.JWT_EXPIRES_IN as string }
        )

        return token
    }

    getTokenData = (token: string): authenticationData => {
        const payload = verify(
            token,
            process.env.JWT_KEY as string
        )

        return payload as authenticationData
    }
}












