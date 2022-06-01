import express, { Request, Response } from "express";
import cors from "cors";
import { produtos } from './data'
import { request } from "http";


const app = express();

app.use(express.json());
app.use(cors());


//Exercicio 1
app.get("/test", (request: Request, response: Response) => {
    response.status(200).send("API está funcional!!")
})

// Exercicio 3

//Desenvolva um endpoint que **cria um novo produto** e retorna a lista de produtos atualizada. A id do produto deve ser gerada automaticamente pela API.
type Produto = {
    id: string | number,
    name: string,
    price: number,
}

app.post("/cadastroproduto", (request: Request, response: Response) => {
    const newProducts: Produto = {
        id: Date.now().toString(),
        name: request.body.name,
        price: request.body.price,
    }
// passa as propriedades que espero receber do body da minha requisição do postman.
// id automatico aqui o nome do produto novo recebe o nome que vem do postman.

    produtos.push(newProducts)
// empurrando(puxando)o produto novo no array de produtos.

  console.table(newProducts)
  // imprimir a nova função new produts

    response.status(200).send({ message: "produto cadastrado com sucesso", produtos })// chama o array de produtos.
})

//Exercicio 4
//Crie um endpoint que **retorna todos os produtos**.
app.get("/retornaproduto", (request: Request, response: Response) => {
    response.status(200).send({ message: produtos })
})

//Exercicio 5

app.put("/editapreco/:id", (request: Request, response: Response) => {
    const idProduto: number | string = request.params.id

    const newPreco = produtos.filter((prod)=>{
        if(prod.id === idProduto){
          return prod.price = request.body.price
        }
    })
    // if(!findProduct){
    //     throw new Error("Produto não encontrado")
    // }
    // findProduct.price = price
 // preciso retornar um erro np postman, caso,o produto digitado não seja encontrado.
    response.status(200).send({ message: newPreco })
})

//Exercicio 6
app.delete("/deletaproduto/:id", (request: Request, response: Response) => {
    const idProduto: number | string = request.params.id
    const deleteProduct = produtos.filter((prod) => {

    })
    produtos.filter((prod)=>{
        if(prod.id !== idProduto){
          return prod
        }
    })
    response.status(200).send({ message: 'Produto deletado com sucesso', produtos })
})





app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});