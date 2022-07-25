import axios from "axios"
import { baseURL } from "./baseURL"




//Exercicio 1

// a) Resposta: Endpoint Get 
// b) Resposta: Tipo any

// c)

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };



const main = async () => {
    try {
        
        const subscribers =  getSubscribers()
        .then (console.log)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()
