import { UserDatabase } from "../data/UserDataBase";
import { User } from "../model/User";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { SignUp } from "../types/SignUp";

export class UserBusiness {

    constructor(
        private userData: UserDatabase ,
        private idGenerator: IdGenerator ,
        private hashManager: HashManager ,
        private authenticator: Authenticator
    ) { }

     signUp = async (input: SignUp) => {
        //Para criar um usuário: validação, conferir se existe, criar um id, hashear o password, criar o usuário no banco, criar e retornar o token.
        try{
            //VALIDAÇÃO!!!
            const { name, email, password } = input
    
            if (!email || !name || !password) {
                throw new Error("Por gentileza preencha os campos acima corretamente!")
            }
    
            if (email.indexOf("@") === -1) {
                throw new Error("Email Inválido!")
            }
    
            if (password.length < 6) {
                throw new Error("Password precisa ter no mínimo 6 caracteres!")
            }
            // CONFERIR SE O USUÁRIO EXISTE: 
            const userEmail = await this.userData.findByEmail(email)
            if (userEmail) {
                throw new Error("O email informado já existe!")
            }
    
            //CRIAR ID 
            const id = this.idGenerator.generateId()
    
            //HASHEAR PASSWORD 
            const hashearPassword = this.hashManager.createHash(password)
    
            //CRIAR USUÁRIO E INSERIR ELE NO BANCO 
            const createUser = new User(
                id,
                name,
                email,
                hashearPassword
            )
    
            await this.userData.insert(createUser)
    
            //CRIAR TOKEN PASSANDO ID COMO PARÂMETRO
            const token = this.authenticator.generateToken({ id, email })
    
            //RETORNA O TOKEN 
            return token
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
     //========================================================================
    }

    login = async (email: string, password: string) => {
        try {

            if (!email  || !password) {
                throw new Error("Por gentileza preencha os campos acima corretamente!")
            }

            const userData = await this.userData.findByEmail(email)
            if (!userData) {
                throw new Error("Usuario não encontrado")
            }

            const confereSenha = this.hashManager.compareHash(password, userData.getPassword())
            if (!confereSenha) {
                throw new Error("Senha invalida")
            }

            //CRIAR TOKEN PASSANDO ID COMO PARÂMETRO
            const token = this.authenticator.generateToken({ id: userData.getId(), email: userData.getEmail() })

            return token

        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


}    