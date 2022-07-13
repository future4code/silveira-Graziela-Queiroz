import { Request, Response } from "express"
import { connection } from "../data/connection"

const table = "aula49_exercicio";

//EXERCICIO 3
// Exercicio a)
export const getUsersPagination = async (req: Request, res: Response): Promise<void> => {
   try {
      let page = Number(req.query.page)
      if(page <1|| isNaN(page)){
         page=1
      }

      let size = 5
      let offset = size*(page -1)

      const result = await connection(table)
         .select("*")
         .limit(size)
         .offset(offset)

      if (result.length < 1) {
         res.statusCode = 404;
         throw new Error("Não existem users!")
      }

      res.status(200).send(result)

   } catch (error) {
      res.status(500).send("Internal server error")

   }
}
