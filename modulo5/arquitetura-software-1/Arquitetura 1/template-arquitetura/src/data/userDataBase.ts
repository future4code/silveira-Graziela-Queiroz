import { userInfo } from "os";
import { connection } from "./connection"
import { user } from "../types/user"


class userDatabase extends BaseDataBase { 
    private static tableName = "User_arq"

    public async createUser(user: user): Promise<void> {
        await connection.insert({
            id: user.id,
            email: user.email,
            name: user.name,
            password: user.password,
            role: user.role
        }).into(userDatabase.tableName)

    }catch (error)
}


// aqui estou criando um usuario dentro do banco de dados.






export function createUser(id: string, email: string, name: string, hashPassword: string, role: USER_ROLES) {
    throw new Error('Function not implemented.');
}

