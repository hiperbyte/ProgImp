const readlineSync = require("readline-sync"); // Disponibiliza tipo uma caixa de entrada, que solicita
// informação do usuário

let pergunta = readlineSync.question("Informe seu nome");

console.log("Meu nome é ", pergunta);
