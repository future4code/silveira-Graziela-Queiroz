import { Recipe } from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    private static tableName = "recipe";

    public createRecipe = async (recipe: Recipe): Promise<void> => {
        try {

            await BaseDatabase.connection()
                .insert({
                    id: recipe.id,
                    titulo: recipe.titulo,
                    descricao: recipe.descricao,
                    data_de_criacao: recipe.data_de_criacao,
                    cadastro_id: recipe.cadastro_id
                })
                .into(RecipeDatabase.tableName)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getUserRecipe = async (id: string): Promise<Recipe | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(RecipeDatabase.tableName)
                .where({ id })
            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getUserRecipeId = async (id: string): Promise<Recipe | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(RecipeDatabase.tableName)
                .where({ id })
            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}