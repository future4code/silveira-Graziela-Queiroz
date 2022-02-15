//Exercícios Operadores e Lógicas


//Exercícios de interpretação de código

//Exercicio 1
//Resp: 
//a. false
//b. false
//c. false
//d. booleano

//Exercicio 2
//Resp: Sim, as variaveis estão como string, e no console sai um texto concatenado

//Exercicio 2
//Resp
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// soma = parseInt(primeiroNumero) + parseInt(segundoNumero)

// console.log(soma)

//-------------------------------------------------------------------------------------------------

//Exercícios de escrita de código

//Exercicio 1
let idade1 = prompt("Qual a sua idade?")
let idade2 = prompt("Qual a idade do seu melhor amigo?")

let idadeCompara = idade1 > idade2
console.log ("Sua idade é maior do que a do seu amigo?", idadeCompara)

let idadeDiferenca = idade1 - idade2 
console.log(idadeDiferenca)


//Exercicio 2
let numeroPar = prompt("Insira um número par")

let restoDadivisao = numeroPar % 2

console.log(restoDadivisao) 

// c) Sim, sempre que coloca um numero par retorna 0.

// d) Se inserir um numero impar, o retorno sera 1. Porque o resto da divisão de um numero impar por 2 é 1.


//Exercicio 3
let idade = prompt("Qaul a sua idade?")

let idadeMeses = idade * 12
let idadeDias = idade * 365
let idadeHoras = idade * 24 * 365

console.log("Sua idade em meses é: ", idadeMeses)
console.log("Sua idade em dias é: ", idadeDias)
console.log("Sua idade em horas é: ", idadeHoras)


//Exercicio 4
let num1 = parseInt(prompt("Digite um numero"))
let num2 = parseInt(prompt("Digite outro numero"))

let resp1 = num1 > num2
let resp2 = num1 === num2
let resp3 = num1 >= num2
let resp4 = num2 >= num1

console.log("O primeiro numero é maior que o segundo?", resp1) 
console.log("O primeiro numero é igual ao segundo?", resp2)
console.log("O primeiro numero é divisível pelo segundo?", resp3) 
console.log("O segundo numero é divisível pelo primeiro?", resp4)
 
