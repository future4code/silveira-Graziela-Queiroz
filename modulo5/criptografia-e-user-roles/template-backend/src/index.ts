import app from "./app"
import createUser from './endpoints/createUser'
import { AuthenticationData } from "./types"
import userSignup from './endpoints/getUserbyemail'






app.post('/user/signup', createUser)

app.post('/user/login', userSignup)

app.get('/user/profile', profile)


// // passar argumento("")
// const senhaCriptografada = new HashManager().createHash("")

// console.log(senhaCriptografada)

// const compare = new HashManager().compareHash("", senhaCriptografada)

// console.log(compare)














