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


// Exercicio 1

// criar usuario
const createUsuario = async ( nome: string, nickname: string, email: string): Promise<any> => {
  const result = await connection("Usuario")
    .insert({
      nome: nome,
      nickname: nickname,
      email: email,
    })

  return result
}

//  criar endpoint e validar
app.post('/user', async (req: Request, res: Response) => {
  try {

    const { nome, nickname, email } = req.body
    if (!nome || !nickname || !email) {
      throw new Error("Missing data in body to create user")
    }

    await createUsuario( nome, nickname, email)

    res.status(201).send("Usuario criado com sucesso!")
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.sqlMessage || error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
})


// Exercicio 2
// Função para pegar usuario por id
const getUsuarioById = async (id: string): Promise<any> => {
  const result = await connection("Usuario")
    .select('id', 'nickname')
    .from('Usuario')
    .where('id', id)

  return result
}

app.get('/user/:id', async (req: Request, res: Response) => {
  try {

    const id: string = req.params.id

    if (!id) {
      res.statusCode = 400
      throw new Error('Id não informado')
    }

    const result = await getUsuarioById(id)

    res.status(200).send(result[0])

  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(400).send(error.sqlMessage || error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
})


// Exercicio 3
// Função de atualizar nome, nickname
const updateUsuario = async (id: string, nickname: string, nome: string): Promise<any> => {
  const result = await connection("Usuario")
    .update({
      nome: nome,
      nickname: nickname
    })
    .where('id', id)

  return result
}

app.put('/user/edit/:id', async (req: Request, res: Response) => {
  try {

    const id: string = req.params.id
    const { nome, nickname } = req.body

    if (!nome || !nickname) {
      res.statusCode = 400
      throw new Error('nome/nickname não informado')
    }

    await updateUsuario(id, nome, nickname)

    res.status(200).send("Usuario atualizado com sucesso!")

  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.sqlMessage || error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
})


// Exercicio 4
const criarTarefa = async (title: string, description: string, limitDate: Date, creatorUserId: string) => {
  const result = await connection("Tarefa")
    .insert({
      title: title,
      description: description,
      limit_date: limitDate,
      creator_user_id: creatorUserId
    })

  return result
}


app.post('/task', async (req: Request, res: Response) => {
  try {

    const { title, description, limitDate, creatorUserId } = req.body
    if (!title || !description || !limitDate || !creatorUserId) {
      throw new Error("Nenhum campo pode estar vazio!")
    }

    await criarTarefa(title, description, limitDate, creatorUserId)

    res.status(201).send("Tarefa criado com sucesso!")
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(400).send(error.sqlMessage || error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
})


// Exercicio 5
// Função para Tarefa pelo id
const getTarefaById = async (id: string): Promise<any> => {
  const result = await connection
  .select('id','title','description','status','limit_date','creator_user_id','creator_user_nickname')
  .from('Tarefa')
  .where('id', id)

  return result
}

app.get('/task/:id', async (req: Request, res: Response) => {
  try {

    const id: string = req.params.id

    if (!id) {
      res.statusCode = 400
      throw new Error('Id não informado')
    }

    const result = await getTarefaById(id)

    res.status(200).send(result[0])

  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(400).send(error.sqlMessage || error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
})






const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})