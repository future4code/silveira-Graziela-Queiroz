import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import {createPost} from "../Controller/PostController"

export class PostController{

    constructor(
        private postBussiness: PostBusiness
    ) { }

createPost = async (req: Request, res: Response) => {
    try {

        const token =req.headers.authorization as  string

        const { photo, description, creationDate, type } = req.body;
// o mesmo do type create post
        const input: createPost = {
            photo,
            description,
            creationDate,
            type,
            token
        }
        const newinput = await this.postBussiness.createPost(input)
       
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

getPostId = async ( req: Request ,) => {
    try {
        const token = 
        const postId = req.
        





    } catch (error) {
        
    }
}
