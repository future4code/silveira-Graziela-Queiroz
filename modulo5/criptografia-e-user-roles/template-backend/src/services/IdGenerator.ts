import {v4} from "uuid"

// funcao para gerar id
export class IdGenerator {
   generateId  ()  {
    return v4();
   }
}  