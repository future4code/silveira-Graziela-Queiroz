const minhaString: string = "Grazi"

//1a. Ele não aceita um valor do tipo numero, nesta variável que é do tipo string.

//1b.
const meuNumero: number | string = "25" 

//1c.
enum CoresDoArcoiris{
    AZUL = 'azul',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    VERMELHO ='vermelho',
    LARANJA = 'laranja',
    ROXO ='roxo',
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
} 

const pessoa: Pessoa[] = []

const pessoa1: Pessoa ={
    nome: "Graziela",
    idade: 41,
    corFavorita: CoresDoArcoiris.AZUL
}
const pessoa2: Pessoa ={
    nome: "Natalia",
    idade: 31,
    corFavorita: CoresDoArcoiris.VERDE
}
const pessoa3: Pessoa ={
    nome: "Marco",
    idade: 51,
    corFavorita: CoresDoArcoiris.VERMELHO
}
const pessoa4: Pessoa ={
    nome: "Yasmin",
    idade: 3,
    corFavorita: CoresDoArcoiris.ROXO
}

pessoa.push(pessoa1)
pessoa.push(pessoa2)
pessoa.push(pessoa3)
pessoa.push(pessoa4)
console.log(pessoa)