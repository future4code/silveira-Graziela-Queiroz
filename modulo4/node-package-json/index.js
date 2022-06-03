    //Exercicio 1

   //a) 
   process.argv[2]

   //b)

 const nome = "Graziela"
 const age = Number (40)
 console.log(`Olá, ${nome}!Você tem ${age} anos. Em sete anos você terá ${age+7}.`)  
// Exercicio 2
 const soma = Number (process.argv[2])
 console.log(soma + soma)

 const subtrair = Number (process.argv[2])
 console.log(subtrair - 2)

 const multiplicar = Number (process.argv[2])
 console.log(multiplicação *50)

 const divisao = Number (process.argv[2])
 console.log(divisao /2)


 // Exercicio 3

 const tarefa = ["lavar"]
 tarefa.push(process.argv[2])
 console.log(tarefa)