// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number = prompt ('insira a altura ')
  let largura = Number = prompt ('insira a largura')
  let area =  altura * largura  
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number = prompt ('insira o ano atual')
  let anoDeNascimento = Number = prompt ('insira ano de nascimento')
  
  let idade =  anoAtual - anoDeNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura)

  return imc
}
calculaIMC(66, 1.69)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nomeDoUsuario = prompt('Qual e o seu nome?')
  let idade = Number = prompt('Qual e a sua idade?')
  let email = prompt('Qual e o seu email?')

  console.log (`Meu nome é ${nomeDoUsuario}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let arrayCor = []

  let cor1 = prompt('Qual sua a sua cor favorita 1?')
  arrayCor.push(cor1)
  let cor2 = prompt('Qual sua a sua cor favorita 2?')
  arrayCor.push(cor2)
  let cor3 = prompt('Qual sua a sua cor favorita 3?')
  arrayCor.push(cor3)

  console.log(arrayCor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(frase) {
  return frase.toUpperCase()
}
retornaStringEmMaiuscula("mariazinha")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

let vlShow = 3000
let vlIngresso = 100
calculaIngressosEspetaculo(vlShow, vlIngresso)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length
}
checaStringsMesmoTamanho('bala', 'veu')

// EXERCÍCIO 09
function retornaPrimeiroElemento(arr) {
  
  return arr[0]
}

let array = Number = [1, 2, 3]
retornaPrimeiroElemento(array)

// EXERCÍCIO 10
function retornaUltimoElemento(arr) {
  let ult = arr.length - 1
  return arr[ult]
}
let array1 = Number = [1, 2, 3, 4, 5]
retornaUltimoElemento(array1)

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(arr) {
  let ult = arr[arr.length - 1]
  let pri = arr[0]

  arr.splice(0, 1)
  arr.pop()
  
  arr.unshift(ult)
  arr.push(pri)

  return arr
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
     return string1.toLowerCase() == string2.toLowerCase()
}
console.log(checaIgualdadeDesconsiderandoCase('Ola', 'OLAs'))

// EXERCÍCIO 13
function checaRenovacaoRG() {

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}