import { getConstantValue, getJSDocDeprecatedTag, isConstructorDeclaration } from "typescript";

//EXERCICIO 1 =============================================

//a) Resposta: Toda classe tem um constructor, que recebe um parametros que devem ser passados no momento de criar a instancia.Quando nao informado fica vazio.
//b) Resposta: Foi impresso uma vez com a mensagem, "chamando o construtor da classe UserAccount".
//c) Conseguimos ter acesso atraves dos metodos  getters e setters.

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number, transactions: Transaction[]) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  getcpf() {
    return this.cpf
  }

  getname() {
    return this.name
  }

  getage() {
    return this.age

  }

  getbalance() {
    return this.balance
  }

}

//EXERCICIO 2 =============================================
class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    console.log("Chamando o construtor da classe Transaction")
    this.date = date;
    this.value = value;
    this.description = description
  }

  getDate() {
    return this.date
  }

  getDescription() {
    return this.description
  }

  getValue() {
    return this.value
  }

  // adicionarTransacoes(newTransaction: TransitionEvent) {
  // this.Transaction.push
  // }
}

//instancia de transaction
const transaction = new Transaction("25/06/2022", 500, "Hi");
console.log(transaction)
//instancia de UserAccount
const userAccount = new UserAccount("32158921496", "Fabio", 25, [transaction])
console.log(userAccount)


// Exercicio 3 =========================================
class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  getAccounts() {
    return this.accounts
  }

}










