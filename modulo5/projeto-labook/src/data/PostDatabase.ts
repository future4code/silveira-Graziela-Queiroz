import { Post } from "../model/Post";
import { postId } from "../types/postId";
import { postInput } from "../types/postInput";
import { BaseDatabase } from "./BaseDatabase";


export class PostDatabase extends BaseDatabase {

    private static TABLE_NAME = "labook_posts";

    insertPost = async (post: Post) => {
        try {
            await BaseDatabase.connection()
                .insert(post)
                .into(PostDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error("Erro ao Criar usuário no banco")
        }
    }

    // Buscar um post por id
    getPostById = async (id: string): Promise<Post | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(PostDatabase.TABLE_NAME)
                .where({ id })

            return result[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

