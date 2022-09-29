function callbackReducer(acumulador, valorAtual) {
  acumulador + valorAtual;
  return acumulador;
}

let numeros2 = [1, 2, 3, 4, 5];
let soma = numeros2.reduce(callbackReducer);
let media = soma / numeros2.length;

console.log(soma, media);
