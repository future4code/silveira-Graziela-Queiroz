// import express from "express";
import cors from "cors";
import express, { Request, Response } from "express";
import { users } from './data'
//import {type} from


const app = express();

app.use(express.json());
app.use(cors());



//Exercicio 1

app.get("/users", (request: Request, response: Response) => {
        response.status(200).send({users})
})

//a) metodo GET
//B) entidade / users

//Exercicio 2

// query parameters "/user" postman "/users?id+1"
app.get('/buscarfiltro/:type',(request:Request, responde:Response) => {
try {
   const type = request.params.type
   const filtrar = users.filter((user) => {
       if (user.type === type) {
           return user
       }
   })
   if (!type) {
       codeError = 404
       throw new Error ('digitar um parametro')
   }
    if(!filtrar.length){
       codeError = 404
       throw new Error ('lista de usuario não encontrada')
    }
    res.status(200).send(filtrar)  
} catch (error: any) {
    responde.status(codeError).send ({message: error.message})
}





// Exercicio 3
// app.get("/users/userfilter",(request:Request,response:Response) =>{
//  let errorCode = 400

//  const usersFilter: any = []
 






})










app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});