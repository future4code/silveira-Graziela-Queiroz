import axios from "axios"
import { baseURL } from "./baseURL"





// Exercicio 3


// a) Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum erro de tipagem?
// Resposta: Não terá erro de tipagem.

// b) 
// Resposta:


type user = {
   id: string;
   name: string;
   email: string;
}

// a) Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum erro de tipagem?
// Resposta: Não terá erro de tipagem.

// b) 
// Resposta:  Tipamos a saída da função solicitando apenas o resultado que necessitamos mostrar.

// c) Reimplemente a função, corretamente.
// NÃO ESTA REIMPLEMENTADA

const getSubscribers = async (): Promise<user[]> => {
   const response = await axios.get(`${baseURL}/subscribers`);
   return response.data.map((res: any) => {
     return {
       id: res.id,
       name: res.name,
       email: res.email,
     };
   });
 };

