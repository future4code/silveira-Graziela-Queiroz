//Exercicios de Escrita de código

//1.
//a.Vai aparecer o item de cada objeto, o indice vai aparecer e traz o array.


// 2.
//a. Resposta : [ 'Amanda Rangel', 'Lais Petra', 'Leticia Chijo']

//3
//a.Retornou o apelido diferente de "Chijo"
 
//////////////////////////////////////////////////////////////////////////////////

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"}
]

const callback = (item, indice, array) => {
    return item.nome
 }
 const resultado = pets
     .map(callback)
 
 console.log(resultado)

// ///////////////////////////////////////////////////

 const racaDeCachorro = pets
    .filter((item) => {
        if(item.raca === "Salsicha"){
            return item.nome
        }
    })
    
console.log(racaDeCachorro)

////////////////////////////////////////////////////

const racaPoodle = pets
.filter((item) => {
    if(item.raca === "Poodle"){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
    }
})

//////////////////////////////////////////////////////////////////////////////////////


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
        
const callback = produtos.map((item) => {
    return item.nome
})
 
console.log(callback)
            
/////////////////////////////////////////////////////////////////////////////////

const produto = produtos.map((item) => {
    return {nome: item.nome, preco: (item.preco * 0.95).toFixed(2)}
})

console.log(produto)

///////////////////////////////////////////////////////////////////////////////

const bebidas = produtos.filter((item) => {
   if (item.categoria === "Bebidas"){
       return {nome: item.nome, categoria: item.categoria, preco: item.preco}
    }
})
console.log(bebidas)

///////////////////////////////////////////////////////////////////////////

const novoProduto = produto.filter((item,index,array) => {
    if(item.nome.includes("Ypê")){
        return {nome: item.nome, categoria: item.categoria, preco: item.preco}
    }
})
console.log(novoProduto)

///////////////////////////////////////////////////////////////////////////

const novoProduto2 = produtos
    .filter(item => item.nome.includes("Ypê"))
    .map((item) => {
        return `Compre ${item.nome} por R$ ${item.preco}`
    })

console.log(novoProduto2)
    















