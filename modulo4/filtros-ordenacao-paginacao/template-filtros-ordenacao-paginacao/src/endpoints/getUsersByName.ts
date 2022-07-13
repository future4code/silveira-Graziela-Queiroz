import { Request, Response } from "express"
import { connection } from "../data/connection"

const table = "aula49_exercicio";

//EXERCICIO 1
// Exercicio a)
export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
   try {
      const name = req.query.name

      const result = await connection(table)
         .select("*")
         .where('name', 'LIKE', `%${name}%`)

      if (result.length < 1) {
         res.statusCode = 404;
         throw new Error("Any users were found.Please check the params field")
      }

      res.status(200).send(result)

   } catch (error) {
      res.status(500).send("Internal server error")

   }
}


