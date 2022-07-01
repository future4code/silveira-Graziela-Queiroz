import { Recipe } from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    private static tableName = "recipe";

    public getUserRecipe = async (id: string): Promise<Recipe | undefined> => {
        const result = await BaseDatabase.connection()
            .select("*")
            .from("recipe")
            .where({ id })
        return result[0]
    }

    public getUserRecipeId = async (id: string): Promise<Recipe | undefined> => {
        const result = await BaseDatabase.connection()
            .select("*")
            .from("recipe")
            .where({ id })
        return result[0]
    }

    public createRecipe = async (recipe: Recipe): Promise<void> => {
        try {

            await BaseDatabase.connection()
                .insert({
                     id: recipe.id,
                     titulo: recipe.titulo,
                     descricao: recipe.descricao,
                     modo_de_preparo: recipe.modo_de_preparo,
                     data_de_criacao: recipe.data_de_criacao,
                     cadastro_id: recipe.cadastro_id,
                })
                .into(RecipeDatabase.tableName)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}