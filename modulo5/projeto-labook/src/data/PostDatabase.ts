import { BaseDatabase } from "./BaseDatabase";


export class PostDatabase extends BaseDatabase {

    postUser = async (postUser: string) => {
        try {
            const queryresult = await PostDatabase.connection()
                .select("*")
                .from(PostDatabase.tableName)
                .where({ postUser })

            return queryresult[0]

        } catch (error: any) {
            throw new Error("Erro ao Criar usuário no banco")
        }
    }
}

