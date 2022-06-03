enum GENERO {
	ACAO = "açao",
	DRAMA ="vendas",
	COMEDIA = "comédia",
	ROMANCE = "romance",
	TERROR = "terror"
}

type Filme = {
    nome: string,
    anoDeLançamento: string,
    genero: string,
    pontuacao?:number|undefined;
}

const receberInfoFilme =  (nome:string, anoDeLançamento:string, genero:GENERO, pontuacao?:number): Filme => {
    const condicao = pontuacao? {nome, anoDeLançamento, genero, pontuacao} : {nome, anoDeLançamento, genero}
    return condicao
}   

console.log(receberInfoFilme("Missao Impossivel","05/06/2010",GENERO.ACAO));
