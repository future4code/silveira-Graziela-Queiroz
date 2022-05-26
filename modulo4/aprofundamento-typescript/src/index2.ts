// 2a. Entradas um array de numeros e Saida estatistica (maior, menor e a media)


function obterEstatisticas(numeros:number[]):{}{

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas :{maior:number,menor:number,media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
        
    }
    console.log(estatisticas);
    return estatisticas
}

obterEstatisticas([1,5,6,7])

//2b
//

//2c
// type amostraDeDados = {
//     numeros: number[],
//      obterEstatisticas:(numeros: number[]) => estatisticas
// }
// console.log (obterEstatisticas([1,5,10,20,30]));