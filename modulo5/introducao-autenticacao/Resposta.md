### Exercicio 1
a) resposta: é mais fácil de manipular são usadas para representar textos.

### Exercicios 2 
a) Foi criada uma const UserTableName, para guardar o nome na tabela "User".
const conecction é a coneccção com o banco de dados.
const createUser é uma função para inserir os dados da tabela, id, email e password com relação a tabela "User".

b) CREATE TABLE User  (
     id VARCHAR(64) PRIMARY KEY,
     email VARCHAR(64) NOT NULL,
    password varchar(255) NOT NULL
);

const userTableName = "User";

c) const createUser = async 
(id: string,
 email: string,
 password: string) => {
   await connection
   .insert({
     id,
     email,
     password,
   })
   .into(userTableName);
};

### Exercicio 3
a) a linha as string , faz a confirmação que de fato é uma string.