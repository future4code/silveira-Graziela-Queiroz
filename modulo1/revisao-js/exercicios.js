// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    let arr = array.length
     
    return arr
}

let resultado = retornaTamanhoArray([3,2,1,4,7]) 
// console.log(resultado)


// // EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}
let resultado1 = retornaArrayInvertido([8, 23, 16, 10])
// console.log(resultado1)


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let arr = array.sort(function(a, b) {
        return a - b;
      });
    return arr
}
let resultado2 = retornaArrayOrdenado([36,12,56,7,3])
//console.log(resultado2)

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arr =  array.filter((item) => {
        return item % 2 === 0
    })
    return arr
}
let novoArray = retornaNumerosPares([1,2,3,4,5,6])
//console.log(novoArray)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arr = array.map((item) => {
        if(item % 2 === 0){
            return item * item
        }
    }).filter((i) => {
        return i
    })
        return arr
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0

    for(let i=0; i < array.length; i++){
        if(array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}
let resultado3 = retornaMaiorNumero([1, 5, 3, 7, 5, 2])
//console.log(resultado3)

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if(num1 > num2){
        maiorNum = num1
        menorNum = num2
    }else{
        maiorNum = num2
        menorNum = num1
    }

    maiorDivMenor = maiorNum % menorNum === 0 

    dif = maiorNum - menorNum
    
    return{
        maiorNumero: maiorNum,
        maiorDivisivelPorMenor: maiorDivMenor,
        diferenca: dif
    }
     
}
let resultado4 = retornaObjetoEntreDoisNumeros(10, 30)
console.log(resultado4)

    // let menorDivisivelPorMenor = 0
    // if (num1 > num2){
    //     maior = num1 ;
    //     menor = num2
    // }

    // let objeto = {
    //     maiorNumero: 
    //     maiorDivisivelPorMenor:
    //     diferenca:
    // }



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosNumeros = []

    for(let i = 0; primeirosNumeros.length < n; i++){
        if(i % 2 === 0){
            primeirosNumeros.push(i)
        }
    }    
    return primeirosNumeros       
}

let resultado5 = retornaNPrimeirosPares(5)                              
console.log(resultado5)


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}