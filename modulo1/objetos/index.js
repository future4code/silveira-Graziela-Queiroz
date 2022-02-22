//Exercícios de Intepretação de Códigos

//Exercício 1

//resposta: Matheus Nachtergaele
//           Virginia Cavendish
//           "Globo", horario: "14h"

//Exercicio 2

//resposta: Juca
//           Juba
//           Jubo           
//resposta:Spread: conseguimos realizar uma cópia de um objeto(ou array)inteiro.

//Exercício 3

//resposta:undefined
//resposta: "altura" não está chamando nenhuma função.

//Exercícios de escrita de código

//Exercício 1

//Objeto com 2 propriedades (nome, apelido)
//const individuo1 = {
//    nome: "Rodrigo", 
//    apelidos: ["Rodriguinho", "Rô", "Diguinho"]
//}
 
//Função que retorna a msg
const mostrarFrasepronta = (ind) => { return console.log(`Eu sou ${ind.nome}, mas pode me chamar de: ${ind.apelidos[0]}, ${ind.apelidos[1]} ou ${ind.apelidos[2]}`)}

//chamando a função
mostrarFrasepronta(individuo1)

//Novo objeto utilizando Spread (...)
const individuo2 = {...individuo1, apelidos:["Naty","Natinha","Na"]}

//chamando a função, pasando o segundo objeto
mostrarFrasepronta(individuo2)

//////////////////////////////////////////////////////////////////////////////////////
//Exertcicio 2

//criando um objeto Pessoa, com 3 propriedades (nome, idade, profissao)
const pessoa1 = {
    nome: "Angelo", 
    idade: 25, 
    profissao:"Veterinário"
}

//função que retorna o um array com as informaçoes solicitadas
function pessoa(objeto1){
    const arr = []
    arr.push(objeto1.nome); 
    arr.push(objeto1.nome.length)
    arr.push(objeto1.idade)
    arr.push(objeto1.profissao)
    arr.push(objeto1.profissao.length)

    return arr
}

//chamando a função, e usanod o console.log para ver a saida na pagina web
console.log(pessoa(pessoa1))


//////////////////////////////////////////////////////////////////////////////////////
//Exertcicio 3

//criando uma variavel global
let carrinho = []

//criando 3 objetos com 2 propriedades (nome, disponibilidade)
let fruta = {
    nome:"laranja",
    disponibilidade:true
}   
let fruta1 = {
    nome:"pera",
    disponibilidade:false
}
let fruta2 = {
    nome:"uva",
    disponibilidade:true
}

//função que retorna um array com as informaçoes dos 3 objetos
function feira(item1,item2,item3){
    carrinho.push(item1)
    carrinho.push(item2)
    carrinho.push(item3)
    return carrinho
} 

//chamando a função, e usanod o console.log para ver a saida na pagina web
console.log(feira(fruta,fruta1,fruta2))
