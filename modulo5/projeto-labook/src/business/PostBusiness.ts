import { PostDatabase } from "../data/PostDatabase";
import { Post } from "../model/Post";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { postId } from "../types/postId";
import { postInput } from "../types/postInput";

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase ,
        private idGenerator: IdGenerator ,
        private authenticator: Authenticator
    ) { }

    createPost = async (input: postInput) => {
        try{
            const { token, photo, description, type } = input
            const userTokenData = this.authenticator.getTokenData(token)
            const postId = this.idGenerator.generateId()
            let createDate

            if (!token) {
                throw new Error("Insira um token !")
            }
            
            if (!userTokenData) {
                throw new Error(" token inválido !")
            }
            
            if (!photo || !description || !type){
                throw new Error("Por favor preencha todos os campos no body!")
            }
            
            if (!createDate){
                createDate = new Date ()
            }

            const createPost = new Post(
                postId,
                photo,
                description,
                createDate,
                type,
                userTokenData.id   
            )

            await this.postDatabase.insertPost(createPost)
    
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
     
    }

    getPostById = async (postId: string) => {
        try{
            // const postTokenData = this.authenticator.getTokenData(token)

            // if (!token) {
            //     throw new Error("insira um token !")
            // }
            // if (!postTokenData) {
            //     throw new Error(" token inválido !")
            // }
            if (!postId) {
                throw new Error("insira o id do post !")
            }

            const post = await this.postDatabase.getPostById(postId)

            if (!post){
                throw new Error("Não existe nenhum post com esse ID!")
            }

            return post

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
     
    }


}