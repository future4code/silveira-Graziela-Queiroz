import knex from "knex";
import cors from 'cors'
import dotenv from "dotenv";
import { AddressInfo } from "net";
import express, { Express, Request, Response } from "express";
import connection from "./connection";
dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());


// Exercicio 1

// a) Resposta : Quano usamos o raw não passa parametro, ele entrega o resultado acima solicitado.

// 
// resposta b)
app.get("/user/:name", async (req: Request, res: Response) => {
  try {
    const name = await connection.raw(`
      SELECT * FROM Actor WHERE name="${req.params.name}";
      `)
    res.status(200).send(name[0])
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

// Exercicio
// resposta c)
app.get("/user/:gender", async (req: Request, res: Response) => {
  try {
    const gender = await connection.raw(`
      SELECT * from Actor WHERE gender="${req.params.gender}";
      `)
    res.status(200).send(gender)
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})


// Exercicio 2
//a)
app.put("/user/:id", async (req: Request, res: Response) => {
  try {
    // const editActor = async (id: string, salary: number): Promise<void> =>{
       await connection('Actor')
        .update({ 
          salary: req.body.salary 
        })
        .where({ id: req.params.id })
    res.send(`Ator ${req.params.id} atualizado`)
    // }
    res.status(200).send({id: req.params.id})
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

//b)
app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    await connection(`Actor`)
    .where({ id: req.params.id })
    .delete()
    res.status(200).send(`Ator ${req.params.id} deletado`)
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
})

//c)
app.get("/user/media/:gender", async (req: Request, res: Response) => {
  try {
      const result = await connection("Actor")
        .avg('salary')
        .where({ gender: req.params.gender });
    res.status(200).send(result[0])
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})


//3)
// a)

// app.get("/actor/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const actor = await getActorById(id);

//     res.status(200).send(actor)
//   } catch (err) {
//     res.status(400).send({
//       message: err.message,
//     });
//   }
// });

//b)

app.get("/user", async (req: Request, res: Response) => {
  try {
      const recebe2Gender = await connection(`Actor`).count()
          .where({ gender: req.query.gender })
      res.status(200).send({ recebe2Gender })
  } catch (error: any) {
      console.log(error.message)
      res.status(500).send("Unexpected error")
  }
})
//b)



// EXERCICIO 4

app.post("/user", async (req: Request, res: Response) => {
  try {
      await createActor(
          req.body.id,
          req.body.name,
          req.body.salary,
          req.body.birth_date,
          req.body.gender,
          req.body.favorite_ice_cream_flavor,
          req.body.type
      );
      res.status(200).send();
  } catch (err: any) {
      res.status(400).send({
          message: err.message,
      });
  }
});

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
      const actorDelete = await connection(`Actor`).delete()
          .where({ id: req.params.id })
      res.status(200).send({ actorDelete })
  } catch (error: any) {
      console.log(error.message)
      res.status(500).send("Unexpected error")
  }
})




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


