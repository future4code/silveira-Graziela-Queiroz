import app from "./app"
import createUser from './endpoints/createUser'
import { AuthenticationData } from "./types"
import userSignup from './endpoints/getUserbyemail'

app.post('/user/signup', createUser)

app.post('/user/login', userSignup)
// app.put('/user/edit/', editUser)