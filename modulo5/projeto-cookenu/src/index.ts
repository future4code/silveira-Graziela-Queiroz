import { app } from "./app"
import { RecipeController } from "./endpoints/RecipeController"
import { UserController } from "./endpoints/UserController"

const userController = new UserController()
const recipeController = new RecipeController()

// endpoints 

app.post("/user/cadastro", userController.createUser )
app.post("/user/login", userController.login)
app.get("/user/profile",userController.getUserProfile)
app.get("/user/:id",userController.getUserProfileId)
app.get("/recipe/:id",  recipeController.createRecipe)





 

