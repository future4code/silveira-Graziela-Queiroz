import { UserDatabase } from "../data/UserDatabase";
import { User, UserInput } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { signupinputDTO } from "../types/signupDTO";

export default class UserBusiness {

    signUp = async (input: signupinputDTO) => {
        // validação
        try {
            const { name, email, password } = user

            if (!name || !email || !password) {
                throw new Error("campos inválidos")
            }
        // conferir se o usuario existe 
          const  registeredUser = await this.userData.findByEmail(email)
            if ( registeredUser) {
                throw new Error("Email já cadastrado")
            }

            if (password.length < 6) {
                throw new Error("Password must be at least 6 characters")
            }

            if (!email.includes("@")) {
                throw new Error("Invalid email, must contain @")
            }

            const id = new IdGenerator().generate()

            const cypherPassword = new HashManager().createHash(password)

            const newUser = new User(id, name, email, cypherPassword, role)

            const userDB = new UserDatabase()
            await userDB.createUser(newUser)

            const token = new Authenticator().generateToken({ id, role })

            return token
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
}