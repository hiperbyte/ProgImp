// ARRAYS AVANÇADOS

// FOR IN

let numeros = [100, 89, -1, 1.5, 7.4, 0];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  console.log(numero);
}

// O código abaixo faz o mesmo que o anterior, mas com menos digitação
for (let i in numeros) {
  const numero = numeros[i];
  console.log(numero);
}

// ******************************************************************************************
// FOR OF
// Da mesma forma que o anterior, mais simplificado.
// Pode não ser útil quando for utilizar o índice dentro do FOR
for (let numero of numeros) {
  console.log(numero);
}

// ******************************************************************************************
// forEach
// Trata-se de um MÉTODO de array
// Necessita de uma callback. Executa a callback para cada elemento do array

// Criação da callback
function meuCallback(currentValue) {
  console.log("Executou o callback", currentValue);
}

numeros.forEach(meuCallback);

// Utilizando arrow function
numeros.forEach((currentValue) =>
  console.log("Executou o callback", currentValue)
);

// *****************************************************************************************
// Map
// Executa a callback para cada elemento do array e RETORNA UM NOVO ARRAY

// Criação da callback
function quadrado(valorAtual) {
  return valorAtual * valorAtual;
}

const quadrados = numeros.map(quadrado);

console.log(quadrados);

// *****************************************************************************************
// REDUCE
// Reduz um array para uma coisa só (uma variável)
// Exemplo: média dos números de um array
function callbackReducer(acumulador, valorAtual) {
  acumulador += valorAtual;
  return acumulador;
}

let numeros2 = [1, 2, 3, 4, 5];
let soma = numeros2.reduce(callbackReducer);
let media = soma / numeros2.length;

console.log(soma, media);
