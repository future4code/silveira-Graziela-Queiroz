import axios from "axios"
import { baseURL } from "./baseURL"




// Exercicio 2

// Resposta a)
// Funcoes Assincronas pode usar await e elas retornam promise.Usando then e catch não espera a conclusão de outras

//Funções síncrona precisa ser enviada de forma sincronizada, mantendo de forma ordenada.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ao termina e começa a outra.



// Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 utilizando arrow function. 

// Resposta B)

const getSubs = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};


const main = async () => {
    try {
        const subscribers = getSubs()
            .then(console.log)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}