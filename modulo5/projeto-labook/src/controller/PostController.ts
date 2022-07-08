import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { postInput } from "../types/postInput"

export class PostController{

    constructor(
        private postBussiness: PostBusiness
    ) { }

    createPost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const { photo, description, type } = req.body;

            const input: postInput = {
                photo,
                description,
                type,
                token
            }
            const newPost = await this.postBussiness.createPost(input)
        
            res.status(201).send({
                message: "Post criado com sucesso !!",
                newPost
            })

        } catch (error: any) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message })
            } else {
                res.status(500).send("Erro no login")
            }
        }
    }

     getPostById = async ( req: Request, res:Response) => {
        try {
            const token = req.headers.authotization as string
            const postId = req.params.id

            const post = await this.postBussiness.getPostById(postId)

           res.status(200).send({post})

        } catch (error:any) {
            if ( res.statusCode === 200){
                res.status(500).send({message: error.message})
            } else {
                res.status(res.statusCode).send({message: error.sqlMessage || error.message})
            }
        }
    }

}


