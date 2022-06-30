import { app } from "./app"
import { UserController } from "./endpoints/UserController"

const userController = new UserController()

// endpoints 

app.post("/user/cadastro", userController.createUser )
app.post("/user/login", userController.login)
app.get("/user/profile",userController.getUserProfile)
app.get("/user/:id",userController.)





 

