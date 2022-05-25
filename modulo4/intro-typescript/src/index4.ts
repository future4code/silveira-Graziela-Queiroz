



function checaRenovacaoRG() {
  const anoAtual:any = process.argv
  const anoNascimento :any = process.argv
  const anoEmissao:any = process.argv

  const idade:number = anoAtual - anoNascimento
  const tempoCarteira:number = anoAtual - anoEmissao

  const cond1 = idade <= 20 && tempoCarteira >= 5
  const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const cond3 = idade > 50 && tempoCarteira >= 15

  return (cond1 || cond2 || cond3)
}