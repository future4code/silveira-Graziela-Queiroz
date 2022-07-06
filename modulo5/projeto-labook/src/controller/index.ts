import { app } from "./app"
import { UserBusiness } from "../business/UserBusiness"
import { Authenticator } from "../Services/Authenticator"
import { HashManager } from '../Services/HashManager';
import { IdGenerator } from '../Services/IdGenerator';
import { UserDatabase } from "../data/UserDataBase";
import { UserController } from "./UseController";

// estanciando business no index
const userController = new UserController(
   new UserBusiness (
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
   )
)
     
//O index chama o UserController.  Aqui passamos como parâmetro UserBusiness.


//endpoint

 app.post("/signup", userController.signUp)
 app.post("/login", userController.login)

