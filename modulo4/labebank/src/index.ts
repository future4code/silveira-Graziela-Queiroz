import cors from "cors";
import express, { Request, Response } from "express";
import { Cliente, users } from './data'

const app = express();

app.use(express.json());
app.use(cors());

// 5. Crie um endpoint que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.

app.post("/criarconta", (req: Request, res: Response) => {
  try {
    const { name, cpf, dataNascimento } = req.body

    users.forEach(user => {
      if (user.cpf === cpf) {
        throw new Error("CPF already exists")
      }
    const [dia, mes, ano] = dataNascimento.split('/') // usando metodo split , toda vez que tiver (/) para separar a data de nascto.
    let verificaIdade = 2022 - ano >= 18 ? true : false // 7 .ternário verificando se ele (a) é maior de 18 ou não.

    const newUser: Cliente = {
      id: users.length + 1,
      name,
      cpf,
      dataNascimento,
      saldo: 0,
      transacao: []
    }

    if (verificaIdade === true) { // 7.
      users.push(newUser)
      res.status(200).send({
        message: "user created successfuly",
        user: newUser
      })
    }else{
      throw new Error("idade invalida") //7. Adicione, uma validação no item 1 (Criar conta): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.

    }

  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

// 6. Crie um método `GET` na entidade `users` função que será responsável por pegar todos os usuários existentes no array de usuários.
app.get("/users", (req: Request, res: Response) => {
  try {
    if (users) {
      res.status(200).send(users)
    }
  } catch (error:any) {
    res.status(error).send({message:error.message})
  }
})


app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
});