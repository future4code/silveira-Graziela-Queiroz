import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types";

const table = "aula49_exercicio";

//EXERCICIO 4
// Exercicio a)

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const name = req.query.name
        const type = req.query.type
        let sort = req.query.sort as string
        let order = req.query.order as string
        let page = Number(req.query.page)

        if (sort !== "name" && sort !== "type"  && sort !== "id"  && sort !== "email") {
            sort = "name"
        }

        if (order.toUpperCase() !== "DESC" && order.toUpperCase() !== "ASC") {
            order = "DESC"
        }

        if (page < 1 || isNaN(page)) {
            page = 1
        }

        let size = 5
        let offset = size * (page - 1)

        const result = await connection(table)
            .select("*")
            .andWhere('name', 'LIKE', `%${name}%`)
            .andWhere('type', 'LIKE', `%${type}%`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)

        const users = result.map(toUser)

        if (users.length < 1) {
            res.statusCode = 404;
            throw new Error("Não existem users!")
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(500).send("Internal server error")

    }
}

const toUser = (input: any): user => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type,
    }
}