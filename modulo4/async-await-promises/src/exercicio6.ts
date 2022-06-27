import axios from "axios"
import { baseURL } from "./baseURL"


// Exercicio 6

//a) A função Promise.all recebe um iterável (como um array) de promessas e, uma vez que todas tenham sido resolvidas, retorna um novo array com os respectivos valores de resolução

//B) Promise.all , retorna uma unica promise que resolve as notificacoes de uma só vez.

// C)  Reimplemente a função utilizando Promise.all




const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };