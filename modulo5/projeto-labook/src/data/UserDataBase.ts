import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = "labook_user";

    insert = async (user: User) => {
        try {
            await BaseDatabase.connection()
                .insert(user)
                .into(UserDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco")
        }
    }

    findByEmail = async (email: string) => {
        try {
            const queryresult = await UserDatabase.connection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({ email })

            return queryresult[0]

        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco")
        }
    }
}
