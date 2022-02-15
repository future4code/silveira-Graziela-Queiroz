//Exercicios de interpretação 

//Ex 1:  ( 10) ( 10,5)



//Ex 2: (10,10,10)


//Ex 3:
// let horasTrabalhadas = prompt ("Quantas horas voçê trabalha por dia?")
// let remuneracaoPordia = prompt ("Quanto voçê recebe por dia?")
// alert(`Voce recebe ${remuneracaoPordia/horasTrabalhadas} por hora`)
    

//Exercicios escrita de código

//Exercicio 1
// let nome
// let idade
// console.log (typeof nome)
// console.log (typeof idade)
// Resposta 1 - Porque não foi definido o tipo da variável neste caso.

// let nome 
// let idade

// nome = prompt ("qual é o seu nome?");
// idade = prompt ("qual a sua idade?");

// console.log (typeof nome);
// console.log (typeof idade);
// Resposta 2 - o tipo de variável é uma string

// console.log (`Olá ${nome}, você tem ${idade} anos`)


//Exercicio 2

// let perg1 = "Você tomou café hoje?"
// let perg2 = "Você estudou hoje?"
// let perg3 = "Você acordou cedo hoje?"

// let resp1 = "nao"
// let resp2 = "sim"
// let resp3 = "sim"

// console.log(perg1, resp1)
// console.log(perg2, resp2)
// console.log(perg3, resp3)



//Exercicio 3

let a = 10
let b = 25

c = a;
a = b;
b = c;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10