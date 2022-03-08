/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas (o) ao jogo de Blackjack!")
 
if(confirm("Quer iniciar uma nova rodada?")){

   //Dando as cartas do Usuario - 2 cartas
   const carta = comprarCarta()
   const carta1 = comprarCarta()
   //somando o valor das 2 cartas do usuario
   const somaCartas = (carta.valor + carta1.valor)

   //Dando as cartas do PC - 2 cartas
   const pc = comprarCarta ()
   const pc1 = comprarCarta()
   //somando o valor das 2 cartas do pc
   const somaPc = (pc.valor + pc1.valor)

   //Função para concatenar o texto das 2 cartas
   function concatena(item, item1){
      return item.texto + " " + item1.texto
   }

   //Resultado da carta do Usuario e do Computador
   console.log(`Usuario - cartas: ${concatena(carta, carta1)} - pontuação ${somaCartas}`)
   console.log(`Computador - cartas: ${concatena(pc, pc1)} - pontuação ${somaPc}`)

   // Comparou as cartas do usuário e pc
   if (somaCartas === somaPc){
      console.log ("Empate!")
   }else if (somaCartas > somaPc)
      console.log ("O usuário ganhou!")
   else {
      console.log ("O computador ganhou!")
   }

}else {
   console.log("O jogo acabou")
}





