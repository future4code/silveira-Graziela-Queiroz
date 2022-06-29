import { app } from "./app"
import { UserController } from "./endpoints/UserController"

const userController = new UserController()

//É aqui que chamo meus endpoints 
app.post("/user/cadastro", userController.createUser )






 

