```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

  let comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
  let salarioFinal = comissao + 2000
  
  return salarioFinal
}

calculaSalario(3, 50000)
