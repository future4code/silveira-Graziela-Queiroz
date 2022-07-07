import { UserDatabase } from "../data/UserDataBase";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";


export class PostBusiness {
    constructor(
        private postDatabase: postDatabase ,
        private idGenerator: IdGenerator ,
        private hashManager: HashManager ,
        private authenticator: Authenticator
    ) { }

    createPost = async (input: createPost) => {
        //Para criar um usuário: validação, conferir se existe, criar um id, hashear o password, criar o usuário no banco, criar e retornar o token.
        try{
            //VALIDAÇÃO!!!
            const {token, photo, description, tipo } = input
            let {data_criacao} = input

            
            if (!token) {
                throw new Error("Insira um token válido!")
            }
            const userTokenData = this
            
    
            
            // CONFERIR SE O USUÁRIO EXISTE: 
            const userEmail = await this.userData.findByEmail(email)
            if (userEmail) {
                throw new Error("O email informado já existe!")
            }
    
            //CRIAR ID 
            const postid = this.idGenerator.generateId()
            //const newPost=new Post
            //HASHEAR PASSWORD 
            const hashearPassword = this.hashManager.createHash(password)
    
            //CRIAR USUÁRIO E INSERIR ELE NO BANCO 
            const createUser = new User(
                postId,
                photo,
                description,
                creationDate,
                type,
                userTokenData.id 
                
            )
    
            await this.userData.insert(createUser)
    
            //CRIAR TOKEN PASSANDO ID COMO PARÂMETRO
            const token = this.authenticator.generateToken({ id, email })
    
            return token
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
     //========================================================================
    }
     getpostById = 


     if (!token) {
        throw new Error("Insira um token válido!")
    }                                                                                                                             
















}