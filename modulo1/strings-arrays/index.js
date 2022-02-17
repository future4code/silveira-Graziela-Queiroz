// Exercícios de interpretação de código

// Exercicio 1
// undefind
// null
// 11
// 3
// [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// 9

// Exercicio 2
// SUBI NUM ÔNIBUS EM MIRROCOS 27


//Exercícios Escrita de Códigos

//1.
let nomeUsuario = prompt("Qual é o seu nome?")
let emailUsuario = prompt("Qual é o seu e-mail?")
console.log (`O e-email ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo(a),${nomeUsuario}!`)


//2.
let comida = ['lazanha', 'batatafrita', 'bife acebolado', 'strogonoff', 'pastel']
console.log(comida)

console.log("Essas são as minhas comidas preferidas")
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

let comidaPreferidaDoUsuario = prompt("Qual a sua comida preferida?")
comida[1] = comidaPreferidaDoUsuario

console.log(comida)


//3.
let listaDeTarefas = []

listaDeTarefas[0] = prompt("Qual a sua primeira tarefa?")
listaDeTarefas[1] = prompt("Qual a sua segunda tarefa?")
listaDeTarefas[2] = prompt("Qual a sua terceira tarefa?")

console.log(listaDeTarefas)

let tarefaFeita = Number = prompt("Digite o índice da tarefa que você já realizou: 0, 1, 2")
listaDeTarefas.splice(tarefaFeita, 1)

console.log(listaDeTarefas)