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
            const token = req.headers.authorization as string
            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token) as authenticationData

            const { titulo, descricao } = req.body

            if (!titulo || !descricao ) {
                res.statusCode = 422
                throw new Error("Por Favor preencha os campos corretamente")
            }

            if (!token) {
                res.statusCode = 401
                throw new Error("token inválido ")
            }

            const id: string = new GenerateID().id()
            const data_de_criacao = new Date()
            const cadastro_id = tokenData.id

            // - criar nova instância de User, Obs. precisa da mesma estrutura do banco
            const newRecipe = new Recipe(id, titulo, descricao, data_de_criacao, cadastro_id)

            await new RecipeDatabase().createRecipe(newRecipe)

            res.status(200).send({
                message: "Receita criada com sucesso",
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.send({ message: error.message })
            }

        }
    }


    public getRecipeId = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error("token inválido ")
            }
            if (!id) {
                res.statusCode = 401
                throw new Error("id inválido ")
            }

            const recipeDB = new RecipeDatabase()
            const recipe = await recipeDB.getUserRecipeId(id)

            if (!recipe) {
                res.statusCode = 400
                throw new Error("Receita não existe")
            }

            res.status(200).send(recipe)

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.send({ message: error.message })
            }
        }
    }

}