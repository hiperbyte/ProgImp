const readlineSync = require("readline-sync");
// Exercício de elaboração de Calculadora
// CALCULADORA NÍVEL I
// Exercicio 02
function adicao(num1 = 0, num2 = 0) {
  soma = parseInt(num1) + parseInt(num2);
  return soma;
}

// Exercicio 03
function subtracao(num1, num2) {
  return num1 - num2;
}

// Exercicio 04
function multiplicacao(num1, num2) {
  return num1 * num2;
}

// Exercício 05
function divisao(num1, num2) {
  return num1 / num2;
}

// CALCULADORA NÍVEL II
// Exercício 01
console.log("--------- Teste de operações - Calculadora ----------");

// Exercício 02
num01 = readlineSync.question("Informe um numero: ");
num02 = readlineSync.question("Informe outro numero: ");
res1 = adicao(num01, num02);
res2 = subtracao(num01, num02);
console.log("A soma dos dois números é: " + res1);
console.log("A subtração dos dois números é " + res2);

// Exercício 03
num01 = readlineSync.question("Informe um numero: ");
num02 = readlineSync.question("Informe outro numero: ");
res = multiplicacao(num01, num02);
console.log(
  "O resultado da multiplicação do número " +
    num01 +
    " pelo número " +
    num02 +
    " é: " +
    res
);

// Exercício 04
num01 = readlineSync.question("Informe um numero: ");
num02 = readlineSync.question("Informe outro numero: ");
res = divisao(num01, num02);
console.log(
  "O resultado da divisão do número " +
    num01 +
    " pelo número " +
    num02 +
    " é: " +
    res
);

// CALCULADORA NÍVEL III
// Exercício 01 - Quadrado de um número
console.log("Calculando o QUADRADO de um número...");
num01 = readlineSync.question("Informe um numero: ");
function quadradoDoNumero(num) {
  return num * num;
}
quad = quadradoDoNumero(num01);
console.log("O quadrado do número informado é " + quad);

// Exercício 02 - Média de três números
console.log("Calculando o MÉDIA de três números...");
num01 = readlineSync.question("Informe o PRIMEIRO numero: ");
num02 = readlineSync.question("Informe o SEGUNDO numero: ");
num03 = readlineSync.question("Informe o TERCEIRO numero: ");
function mediaDeTresNumeros(num1, num2, num3) {
  soma = parseInt(num1) + parseInt(num2) + parseInt(num3);
  return soma / 3;
}
media = mediaDeTresNumeros(num01, num02, num03);
console.log("A MÉDIA dos três números informados é " + media);

// Exercício 03 - Calcular a porcentagem de um número
console.log("Calculando o PERCENTUAL de um número...");
num01 = readlineSync.question("Informe um numero: ");
num02 = readlineSync.question("Informe o PERCENTUAL desejado: ");
function calculaPorcentagem(num, perc) {
  percentual = perc / 100;
  return num * percentual;
}
porcento = calculaPorcentagem(num01, num02);
console.log("O percentual do número informado é " + porcento);
