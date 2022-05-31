import express, { Response, Request } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/retornaMsg", (request: Request, response: Response) => {
    response.status(200).send("primeiro endpoint!!")
})

//Exercicio 2
type Users = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string | number,
}

// Exercicio 3
const usuarios: Array<Users> = [
    { id: 1, name: "Marcos", phone: 12345678, email: 'marcos@hotmail.com', website: "teste.com.br" },
    { id: 2, name: "Maria", phone: 222222222, email: 'maria@hotmail.com', website: "teste.com.br" },
    { id: 3, name: "Salete", phone: 33333333, email: 'salete@hotmail.com', website: "teste.com.br" },
    { id: 4, name: "Joao", phone: 12345678, email: 'joao@hotmail.com', website: "teste.com.br" },
    { id: 5, name: "Josue", phone: 12345678, email: 'josue@hotmail.com', website: "teste.com.br" },
]

// Exercicio 4
app.get("/users", (request: Request, response: Response) => {
    response.status(200).send({ usuarios })
})

//Exercicio 5
type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number|string
}

// Exercício 6
const posts: Array<Posts> = [
    { id: 1, title: "too", body: 'car', userId: 1 },
    { id: 2, title: "moo", body: 'ser', userId: 1 },
    { id: 3, title: "luu", body: 'bar', userId: 2 },
    { id: 4, title: "ola", body: 'lar', userId: 3 },

    // falta a resposta?
]

// Exercicio 7
app.get("/posts", (request: Request, response: Response) => {
    response.status(200).send({ posts })
})

// Exercicio 8
app.get("/userPosts/:id", (request: Request, response: Response) => {
    const idUsuario = Number(request.params.id)

    const postsUser = posts.filter((post)=>{
        if (post.userId === idUsuario){
            return post
        }
    })
    response.status(200).send({message:postsUser})
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});