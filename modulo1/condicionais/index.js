//Exercicios de Interpretação de códigos

//Resposta: 1

// a) Pede para o usuário digitar um número e verifica se passou no teste ou não.
// b) Imprime números pares ( 10 ).Sim,Passa no teste.
// c) Digita o número negativo -10 , e Não passa no teste.  

//Resposta: 2

// a) Para simplificar a tarefa usando o switch case,ele traz o valor da fruta.
// b) "O preço da fruta,"Maçã","é" "r$2,25"
// c) "O preço da Pêra é 5,00.

//Resposta: 3

// a) Pedindo para o usuário digitar o primeiro número.
// b) Com número 10,mensagem passou no teste.Com o número -10, "Erro na Mensagem".
// c) Sim haverá erro no console,Voçê só conseguirá acessar a let mensagem,quando declarada fora do escopo.

////////////////////////////////////////////////////////////////////////

//Exercícios de escrita de código
// Exercício 1

//Prompt para receber a resposta do usuario e guardar a informação na variavel 'idade' do tipo number
const idade = Number(prompt ("Qual a sua idade?"))

//if, else para verificar a idade que o usuario digitou(e está guardado na variavel idade)
if(idade >= 18){
    console.log('Você pode dirigir!')
}else{
    console.log('Você não pode dirigir!')
}

//////////////////////////////////////////////////////////////////////////
// Exercício 2

//Prompt para receber a resposta do usuario e guardar a informação na variavel 'turma'
const turma = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)")

//if, else para verificar o que o usuario digitou(e está guardado na variavel turma), e retornar a mensagem certa
if(turma === 'M'){
    console.log("Bom Dia !")
}
else if(turma === 'V'){
    console.log("Boa Tarde !")
}
else if(turma === 'N'){
    console.log("Boa Noite!")
}

/////////////////////////////////////////////////////////////////////////
//Exercício 3

//Prompt para receber a resposta do usuario e guardar a informação na variavel 'turma'
const turma = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)")

//switch passando como parametro oq o usuario digitou (variavel turma)
switch (turma){

case "M":
    console.log("Bom Dia!")
    break;
case "V":
    console.log("Boa Tarde!")
    break;
case "N":
    console.log("Boa Noite!")
    break;
default:
    console.log("turno não encontrado")
}

////////////////////////////////////////////////////////////////////////////
//Exercício 4

const GeneroDeFilme = prompt ("Qual genero de filme que vão assistir?")
const valor = Number(prompt("Qual o preço do ingresso?"))

if(GeneroDeFilme === 'fantasia' &&  valor < 15 ){
    console.log ("Bom Filme!");
}else{
    console.log("Escolha outro filme :(")  
}

