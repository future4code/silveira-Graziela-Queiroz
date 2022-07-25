import { app } from "./app"
import { RecipeController } from "./endpoints/RecipeController"
import { UserController } from "./endpoints/UserController"

const userController = new UserController()
const recipeController = new RecipeController()

// endpoints 
app.post("/user/signup", userController.createUser )
app.post("/user/login", userController.login)
app.get("/user/profile",userController.getUserProfile)
app.get("/user/:id",userController.getUserProfileId)

app.post("/recipe",  recipeController.createRecipe)
app.get("/recipe/:id",  recipeController.getRecipeId)






 

