import { AddressInfo } from "net";
import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";
import connection from "./connection";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());


export type Cadastro = {
  name: string,
  nickname: string
  email: string
}

const cadastroList: Array<Cadastro> = []


export type tarefas = {
  taskId: string,
  title: string,
  description: string,
  limitDate: string,
  status: string,
  userPedinte: string,
  creatorUserId: string,
  creatorUserNickname: string
}

const listaTarefas: Array<tarefas> = [
  {
    taskId: "001",
    title: "Criar banco dos alunos",
    description: "Devemos criar o banco dos alunos para o módulo do backend",
    limitDate: "04/05/2020",
    status: 'feito',
    userPedinte: '',
    creatorUserId: "001",
    creatorUserNickname: "astrodev"
  }
]



// const afazerList: Array<Afazeres> = [
//   { taskId: 001, id: 1, title: "Criar banco dos alunos", discription: 'Devemos criar tabela' },
//   { taskId: 002, id: 2, title: "", completed: 'false' },
//   { taskId: 003, id: 3, title: "", completed: 'false' },
//   { taskId: 004, id: 4, title: "", completed: 'true' },
//   { taskId: 005, id: 5, title: "", completed: 'false' },
// ]
//{taskId: "001" title : "Criar banco dos alunos", description:""...}



// Exercicio 1

// Criar Usuario

// Como gero o id do usuario?


app.post("/user", (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body
    let type = req.body.type as string

    if (!name || !nickname || !email || !type) {
      throw new Error("Missing data in body to create user")
    }

    if (typeof name !== "string") {
      throw new Error("nome invalido")
    }

    if (typeof nickname !== "string") {
      throw new Error("Apelido invalido")
    }

    if (typeof email !== "number") {
      throw new Error("email invalido")
    }

    // eu preciso realmente confirmar o email com o if?
    // user.forEach(use => {
    //   if (use.email === email) {
    //     throw new Error("Email já existe")
    //   }
    // })

    const newCadastro: Cadastro = {
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
    }

    cadastroList.push(newCadastro)

    res.status(200).send({message: cadastroList})

  } catch (error) {
    res.status(400).send(error)
  }
})


// Exercicio 2


// app.get("/users/:id", (req: Request, res: Response) => {
//   try {
//     let id = Number(req.params.id)
//     let name = (req.query.name)
//     if (isNaN(id)) {
//       throw new Error("Invalid id")
//     }
//     return res.status(200).end()
//     res.status(204).send("Usuario não encontrado")
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// })

// o endpoint deve encontrar um erro se não encontrar o usuario.

// Exercicio 3


//     app.put("/user/edit/:id", (req: Request, res: Response) => {
//       try {
//         let edit = (req.body.edit)
//         if (isNaN(id)) {
//           throw new Error("Invalid id")
//         }

//         users.forEach(user => {
//           if (user.id === id) {
//             user.name += "-ALTERADO"
//             return res.status(200).end()
//           }
//         })
//         res.status(204).send("Codigo não Alterado ")
//       } catch (error) {
//         res.status(400).send(error.message)
//       }
//     }
// }

// Exercicio 4 

// app.post("/task", (req: Request, res: Response) => {
//       try {


//       } catch (error) {

//       }


//     }




// Exercicio 5

// app.get("/task/:id", (req: Request, res: Response) => {
//       try {
//         let task = (req.query.task)

//       } catch (error) {

//       }





//     }




















const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});