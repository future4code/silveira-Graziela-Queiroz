//Exercícios de interpretação de código

//Exercicio 1
//resp. Enquanto o i for menor que o número,ele vai somar na variável valor. Resultado do console 10.

//Exercicio 2
//resp a.Vai aparecer todos os números que forem maior que 18.

//resp b.
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let i = 0
for (let numero of lista) {
    if (numero > 18) {
		console.log(numero, i)
	}
    i++
}

//Exercicio 3
//resp. 
//Vai aparecendo um * em cada linha, quando digite o número 4.

//////////////////////////////////////////////////////////////////////////////////////
// Exercícios de escrita

//Exercicio 1

let qntPets = Number(prompt("Quantos bichos de estimação vc tem?"))
let nomesPets = []

if(qntPets === 0){
    console.log("Que pena, vc pode adotar um pet!")
}else{
    for(let i = 0; i < qntPets; i++){
        let nomePet = prompt("Digite o nome do seu pet, 1 por vez")
        nomesPets.push(nomePet)
    }
}
console.log(nomesPets)

//////////////////////////////////////////////////////////////////////////////////////

// Exercicio 2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a.
function arrImprime() {
    for (let numero of arrayOriginal) {
        console.log(numero)
    }
}
arrImprime()

//b.
function arrDiv(arr) {
    for (let numero of arr) {
        console.log(numero/10)
    }
}
arrDiv(arrayOriginal)

//c.   

function newArray(arr) {
    let newArr = []
    for(let numero of arr){
        if (numero % 2 === 0){
            newArr.push(numero)
        }
    }
    console.log(newArr)
} 
newArray(arrayOriginal)
  
function newArr( ) {
    let i = 0
    for (let numero of arrayOriginal){
        console.log(`O elemento do índex ${i} é: ${numero}`)
        i++
    }   
}
newArr()

function maiorMenor( ) {
    let maior = 0
    let menor = arrayOriginal[0]
    for (let num of arrayOriginal){
         if(num > maior) {
           maior = num
         }
         if(num < menor){
            menor = num
         }
    }
    console.log(maior, menor)
} 

maiorMenor()