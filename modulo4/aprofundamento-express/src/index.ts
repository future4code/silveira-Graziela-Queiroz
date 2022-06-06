import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//Exercicio 1
app.get("/ping", (request: Request, response: Response) => {
    response.status(200).send("pong!!")
})

//Exercicio 2
type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean | string
}   

// Exercicio 3
const afazerList: Array<Afazeres> = [
    { userId: 1, id:1 , title: "lavar a louça", completed: 'false'},
    { userId: 1, id:2 , title: "limpar a guarda-roupa", completed: 'false'},
    { userId: 1, id:3 , title: "beber agua", completed: 'false'},
    { userId: 1, id:4 , title: "lavar a roupa", completed: 'true'},
    { userId: 1, id:5 , title: "pagar a contas", completed: 'false'},
]

// Exercicio 4
app.get("/afazeres/:complet", (request: Request, response: Response) => {
    const complet: boolean | string = request.params.complet

    const afazerComplet = afazerList.filter((faz) => {
        if (faz.completed === complet){
            return faz
        }
    })
    response.status(200).send({message: afazerComplet})
})

//Exercicio 5
app.post("/newtask", (request:Request, response:Response) =>{
    
    const newTask: Afazeres = {
        userId: request.body.userId,
        id: afazerList.length + 1,
        title: request.body.title,
        completed: request.body.completed
      }

      afazerList.push(newTask)

      response.status(200).send({message: afazerList})
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});