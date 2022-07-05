import { app } from "./controller/app"
import { UserController } from "../controller/UserController"
import { UserBusiness } from "./business/UserBusiness"
import UserDatabase from "./data/UserDatabase"
import { Authenticator } from "./services/Authenticator"
//import { HasManager} from '../Services/HashManager';
//import {IdGenerator} from '../Services/IdGenerator';



// estanciando business no index
const userController = new UserController(
   new UserBusiness (
        // new UserData,
        // new IdGenerator(),
        // new HashManager(),
        // new Authenticator()
   )
 
)
     




// app.get("/user", userController.getUserLogged)
// app.get("/user/profile", userController.getUserProfile)
 app.post("/user/signup", userController.signup)
// app.post('/user/login', userController.login)
