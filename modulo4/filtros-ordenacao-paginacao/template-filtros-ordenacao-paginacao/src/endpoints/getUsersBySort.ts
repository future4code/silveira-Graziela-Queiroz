import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types";

const table = "aula49_exercicio";

export const getUsersByOrdem = async (req: Request, res: Response): Promise<void> => {
    let errorCode=400
    try {
       let sort = req.query.sort as string
       let order = req.query.order as string
 
       if(sort!=="name" && sort !== "type" && sort !== "id"){
          sort="email"
       }
 
       if(order.toUpperCase()!== "ASC" && order.toUpperCase()!== "DESC"){
          order = "ASC"
       }
 
       const result = await connection(table)
       .select("*")         
       .orderBy(sort, order)
 
       const users = result.map(toUser)
 
       if (!users.length) {
          errorCode = 422
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
 
    } catch (error:any) {
       res.status(errorCode).send(error.message)
 
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