//Exercícios de Escrita de Código

// 1.a
// Resp: Vai ser impresso no console a multiplicação 2*5=10 e 10*5=50
// 1.b 
// Resp: Não irá exibir a mensagem no console.log

// 2.a
// Resp:  Método TolowerCase ()deixa a letra em minúsculo e o métod includes diz se é verdadeiro ou falso.

// 2.b
// Resp: true
// 2.ii
// Resp: true
// 2.iii
// Resp: false

//Exercícios de Escrita de Código

//Exercicio 1
//a.
function informacoesPessoais(){
    return "Eu sou a Graziela,tenho 40 anos,moro em Diadema e sou Estudante."
}
console.log(informacoesPessoais())

//b.
function fazer(name, age, adress, job){
    return `Eu sou a ${name}, tenho ${age} anos,moro em ${adress} e sou ${job}.`
}

const nome = "Natália"
const id = Number = 30
const end = "Santo André"
const prof = "Engenheira"

console.log(fazer(nome, id, end, prof))

//Exercicio 2
//a.
function soma(num1, num2){
    result = num1 + num2                     
    return result
}

const n1 = Number = 10
const n2 = Number = 20

console.log(soma(n1,n2))

//b.
function compara(num1, num2){
    comp = num1 >= num2
    return comp
}

const n1 = Number = 10
const n2 = Number = 30

console.log(compara (n1,n2))

//c.
function verificaPar (n1){
    ehPar = n1 % 2 == 0
    return ehPar
}

const n1 = Number = 10
console.log(verificaPar(n1))

//d.
function msgLength(mensagem){
    const letrasM = mensagem.toUpperCase()
    return letrasM
}

const msg = "Graziela, faz favor de estudar mais!!!!"
console.log(msgLength(msg))


//Exercicio 3
function soma(n1, n2){
     adicao = n1 + n2
     return adicao
}
 
function subtracao(n1, n2){
     sub = n1 - n2
     return sub
}

function multiplicacao(n1, n2){
     mult = n1 * n2
     return mult
}

function divisao(n1, n2){
     div = n1 / n2
     return div
}
    
let n1 = Number = prompt('insira um numero')
let n2 = Number = prompt('insira outro numero')

console.log(soma(n1, n2))
console.log(subtracao(n1, n2))  
console.log(multiplicacao(n1, n2))
console.log(divisao(n1, n2))
