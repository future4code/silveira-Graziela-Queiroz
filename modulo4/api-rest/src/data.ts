
// Exercicio 2
//a) Resp : Type users

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL",
   
}

type Users = {
    id: number,
    name: string,
    email: string,
    type:string,
    age:number,

} 

export let users: Array<Users> =  [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

//Execicio 2

//b) Sim, atraves do usertype

// enum UserType {
//  ADMIN = "ADMIN",
//  NORMAL = "NORMAL",

// }

// type Users = {
//     id: number,
//     name: string,
//     email: string,
//     type:UserType,
//     age:number,

// } 



    











