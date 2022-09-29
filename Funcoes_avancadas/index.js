/*
Aula Funções avançadas

-> Arrow functions
-> Callbacks
-> Recursão

*/

// Forma tradicional de uma função
function nomeFuncao(num1, num2) {
  // Bloco de código
  return num1 + num2;
}

// Arrow Function
const nomeFuncao2 = (num1, num2) => {
  // Bloco de código
  return num1 + num2;
};

// Primeira particularidade da Arrow Function
const nomeFuncao3 = (num1, num2) => num1 + num2; // Omite-se as chaves e a palavra Return

// Segunda particularidade da Arrow Function
function quadrado(num) {
  return num * num;
}

const quadrado2 = (n) => n * n; //Caso tenha só um parâmetro, pode-se omitir os parênteses

// CALLBACK -> quando uma função é passada como parâmetro de outra função
// Utilizada na construção de uma função 'PAI', que chama funções que ainda não foram constuídas
// Exemplo: método forEach, método reduce em arrays

// RECURSÃO -> quando uma função chama ela mesma
// Exemplo: cálculo do fatorial
function fatorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}
