import {compareSync,genSaltSync,hashSync} from "bcryptjs"
import dotenv from 'dotenv'


dotenv.config()

export class HashManager{
    hash = (s: string):string => {
      
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = genSaltSync(rounds);
        const result = hashSync(s, salt);
        return result;
        
    } 

    compareHash = (s: string, hash: string):boolean => {
        return compareSync(s, hash);
    }
}

