const readlineSync = require("readline-sync");
// EXERCÍCIOS REPASSADOS PELO PROFESSOR

// 01- Calcular área e perímetro de um retângulo
function retangulo(b, h) {
  let area = 0;
  let per = 0;
  area = b * h;
  per = b ** 2 + h ** 2;
  return `Retângulo: Área calculada: ${area}. Perímetro calculado: ${per}.`;
}
console.log(retangulo(8, 3));

// 02 - Área e perímetro de um quadrado
function quadrado(l) {
  let area = 0;
  let per = 0;
  area = l ** 2;
  per = l * 4;
  return `Quadrado: Área calculada: ${area}. Perímetro calculado: ${per}.`;
}
console.log(quadrado(5));

// 03 - Área e perímetro de uma circunferência
function circunferencia(r) {
  let area = 0;
  let per = 0;
  area = 3.14 * r ** 2;
  per = 3.14 * 2 * r ** 2;
  return `Circunferência: Área calculada: ${area}. Perímetro calculado: ${per}.`;
}
console.log(circunferencia(8));

// 04 - Perímetro de um triângulo
function triangulo(l1, l2, l3) {
  let per = 0;
  per = l1 + l2 + l3;
  return `Triângulo: perímetro calculado: ${per}.`;
}
console.log(triangulo(10, 10, 15));

// 05 - Número inteiro e seu sucessor
num01 = readlineSync.questionInt("Informe um numero inteiro: ");
function inteiro(num) {
  seguinte = num + 1;
  return `O sucessor do número informado é: ${seguinte}.`;
}
console.log(inteiro(num01));

// 06 - Quociente e resto da divisão de dois números
num01 = readlineSync.questionInt("Informe o primeiro numero: ");
num02 = readlineSync.questionInt("Informe o segundo numero: ");
function quocienteEResto(n1, n2) {
  quo = n1 / n2;
  resto = n1 % n2;
  return `Quociente da divisão: ${quo}. Resto da divisão: ${resto}.`;
}
console.log(quocienteEResto(num01, num02));
