function receber (nome: string, nascimento: string): string {
    
    const meuNome = nome;
    const meuNascimento = nascimento;  

    const nacto = meuNascimento.split('/')

    return (`Ola me chamo ${meuNome}, nasci no dia ${nacto[0]} do mes de ${nacto[1]} do ano de ${nacto[2]}`)
}

receber('graziela', '01/06/81')