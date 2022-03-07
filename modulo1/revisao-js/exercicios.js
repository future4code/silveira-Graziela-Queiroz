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
    const arr =  array.filter((item) => {
        return item % 2 === 0
    })
    return arr
}

let novoArray = retornaNumerosPares([1,2,3,4,5,6])
console.log(novoArray)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

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