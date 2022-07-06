import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    private static tableName = "labook_user";

    insert = async (user: User) => {
        try {
            await BaseDatabase.connection()
                .insert(user)
                .into(UserDatabase.tableName)

        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco")
        }
    }

    findByEmail = async (email: string): Promise<User | undefined> => {
        try {
            const queryresult = await UserDatabase.connection()
            .select("*")
            .from(UserDatabase.tableName)
            .where({ email })

            return queryresult[0]

        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco")
        }
    }

//     // Criar post
//     createUser = async (login: string): Promise<void> => {
//         try {
//             const queryresult =  login = await UserDatabase 
//             .connection(this.tableName)
//             .select()
//             .where({ login })

//             return queryresult[0]
                
//         } catch (error: any) {
//             throw new Error(error.sqlMessage || error.message)
//         }
// }
// Buscar um post por id

// postUserById = async (id: string): Promise<User | undefined> => {
//     try {
//         const result = await BaseDatabase.connection()
//             .select("*")
//             .from(UserDatabase.TABLE_NAME)
//             .where({ id })

//         return result[0] ? new User(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role) : undefined
//     } catch (error: any) {
//         throw new Error(error.sqlMessage || error.message)
//     }
}
