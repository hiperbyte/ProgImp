/*
Nosso líder de tecnologia nos pede para pensar em como representar usuários, ou
contas bancárias, em vez disso. Cada uma dessas contas tem as seguintes
informações:

● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo)
*/

// let contaBancaria = {
//   numero_conta: 0,
//   tipo_conta: "",
//   saldo: 0,
//   titular: "",

// };

function criarConta(titularParam, numeroContaParam, ContaParam, saldoParam) {
  this.numeroConta = numeroContaParam;
  this.tipoConta = ContaParam;
  this.saldo = saldoParam;
  this.titular = titularParam;
}

//      let Conta= new criarConta(02,'poupanca','100','Jon')
//      console.table(Conta)

let contas = [
  new criarConta("Abigael Natte", 5486273622, "Conta Corrente", 27771),
  new criarConta("Ramon Connel", 1183971869, " Conta Poupança", 8675),
  new criarConta("Jarret Lafuente", 9582019689, "Conta Poupança", 27363),
  new criarConta("Ansel Ardley", 1761924656, "Conta Poupança", 32415),
  new criarConta("Jacki Shurmer", 7401971607, "Conta Poupança", 18789),
  new criarConta("Jobi Mawtus", 630841470, "Conta Corrente", 28776),
  new criarConta("Thomasin Latour", 4223508636, "Conta Corrente", 2177),
  new criarConta("Lonnie Verheijden", 185979521, "Conta Poupança", 25994),
  new criarConta("Alonso Wannan", 3151956165, "Conta Corrente", 7601),
  new criarConta("Bendite Huggett", 2138105881, "Conta Poupança", 33196),
];

console.table(contas);
