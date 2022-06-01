//exercicio 2
type Produto = {
    id: string | number,
    name: string,
    price: number,
} 

export const produtos: Array<Produto> = [
    {
        id: "001",
        name: "tesoura",
        price: 40
    },
    {
        id: "002",
        name: "borracha",
        price: 75
    },
    {
        id: "003",
        name: "caderno",
        price: 256
    },
]