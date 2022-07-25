import axios from "axios"
import { baseURL } from "./baseURL"



const newsNow = {
    title: "Hospitais Publicos amplia novos leitos devido as doencas respiratorias",
    content: "Com aumento de casos novamente,Covid volta a ser noticias em todo mundo",
    date: Date.now()


}


async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }