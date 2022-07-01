import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { GenerateID } from "../services/GenerateID";
import { HashManager } from "../services/HashManager";
import { authenticationData } from "../types";
import { Recipe } from "../model/Recipe";
import { RecipeDatabase } from "../data/RecipeDatabase";
//import {moment} from "moment" 


export class RecipeController {

    public createRecipe = async (req: Request, res: Response) => {
        try {
            //const data_de_criacao = moment().format("YYY/MM/DD")
            const token = req.headers.authorization as string

            const { titulo, descricao, modo_de_preparo, data_de_criacao, cadastro_id} = req.body

            if (!titulo || !descricao || !modo_de_preparo) {
                res.statusCode = 422
                throw new Error("Por Favor preencha os campos corretamente")
            }

            if (!token) {
                res.statusCode = 401
                throw new Error("token inválido ")
            }

            const authenticator = new Authenticator()

            // const tokenData = authenticator.getTokenData(token) as authenticationData
            // //const userDB = new UserDatabase()

            // const recipe = await new RecipeDatabase().createRecipe(RecipeDatabase)

            const id: string = new GenerateID().id()

            // - criar nova instância de User, Obs. precisa da mesma estrutura do banco
            const newRecipe = new Recipe(id, titulo, descricao, modo_de_preparo, data_de_criacao, cadastro_id)

            const recipeDB = new RecipeDatabase()

            await recipeDB.createRecipe(newRecipe)

            res.status(200).send({
                message: "Receita criada com sucesso",
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.send({ message: error.message })
            }

        }
    }


    // public recipeId = async (req: Request, res: Response) => {
    //     try {
    //         const id = req.params.id
    //         const token = req.headers.authorization as string

    //         const { titulo, descricao, modo_de_preparo } = req.body

    //         if (!titulo || !descricao || !modo_de_preparo) {
    //             res.statusCode = 422
    //             throw new Error("Por Favor preencha os campos corretamente")
    //         }

    //         if (!tokenData) {
    //             res.statusCode = 401
    //             throw new Error("token inválido ")
    //         }

    //         if (!id) {
    //             res.statusCode = 401
    //             throw new Error("id inválido ")
    //         }
    //         const authenticator = new Authenticator()
    //         const tokenData = authenticator.getTokenData(token) as authenticationData
    //         const recipeDB = new RecipeDatabase()

    //         const userId = await recipeDB.getByRecipe(id)
    //         res.status(200).send({
    //             id: userid.id,
    //             titulo: userid.titulo,
    //             descricao,
    //             modo_de_preparo:
    //                 data_de_criacao: new Date(),
    //             criadorID: 
    //     })

    //         const recipe = await new RecipeDatabase().createRecipe(RecipeDatabase)


    //     } catch (error: any) {
    //         if (res.statusCode === 200) {
    //             res.status(500).send({ message: error.message })
    //         } else {
    //             res.send({ message: error.message })
    //         }

    //     }
    // }

}