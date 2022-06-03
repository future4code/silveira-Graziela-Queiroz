
// 1. Crie um **tipo** para representar uma conta para o usuário

export type Cliente = { 
  id: number;
  name: string,
  cpf: string,
  dataNascimento: Date |string
  saldo: number,
  transacao: Extrato[]; //4. Dentro da definição do usuário, crie um array que armazene as transações de um cliente.
}


// 3. Crie mais um **tipo**: para representar as **transações** que serão salvas no extrato
export type Extrato = {
  valor: number,
  data: Date | string,
  descricao: string,
}


//2. Crie um **tipo** para representar uma conta para o usuário
export let users: Array<Cliente> = [
  {
    id: 1,
    name: "Alice",
    cpf: '123.456.789-92',
    dataNascimento: '10/10/2000',
    saldo: 12,
    transacao: [
      {
        valor: 1000,
        data: '03/06/2022',
        descricao: 'deposito',
      },
      {
        valor: 2,
        data: '03/06/2022',
        descricao: 'deposito',
      },
    ]
  },
  {
    id: 2,
    name: "Grazi",
    cpf: '111.222.333-44',
    dataNascimento: '05/01/1993',
    saldo: 3000,
    transacao: []
  },
  {
    id: 3,
    name: "Natalia",
    cpf: '654.233.345-92',
    dataNascimento: '09/05/1996',
    saldo: 1200,
    transacao: []
  },
  {
    id: 4,
    name: "Luana",
    cpf: '122.657.789-36',
    dataNascimento: '10/02/1975',
    saldo: 1456,
    transacao: []
  },
]

