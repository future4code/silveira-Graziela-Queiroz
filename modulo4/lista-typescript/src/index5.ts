

type Usuarios = {
    name: string,
    email: string,
    role: string,
}

const usuario: Array<Usuarios> = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" },
]


function listFuncionario(pessoas: typeof usuario) {
    return pessoas.filter((res) => {
        return res.role === "admin"
      }
    ).map((user) => {
        return user.email
    })
}
  
 console.log(listFuncionario(usuario)) 