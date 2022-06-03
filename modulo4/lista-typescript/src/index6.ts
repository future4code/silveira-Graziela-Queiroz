type ClientesNeg = {
  cliente: string,
  saldoTotal: number,
  debitos: Array<number>,
}

const clientesNeg: Array<ClientesNeg> = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function somaDebitos(arrClientes: typeof clientesNeg) {
  return arrClientes.filter((res) => {
    const saldo = (res.saldoTotal - res.debitos.reduce((v1, v2) => v1 + v2, 0))
    if (saldo < 0) {
      res.saldoTotal = saldo
      res.debitos = []
      return res
    }
  })
}

console.log(somaDebitos(clientesNeg)) 