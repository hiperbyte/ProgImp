// Exercício LISTA DE COMPRAS

// // Criando um array
let listaCompras = ["tomate", "batatas", "sal", "arroz", "feijão", "farinha"];
// console.log("Array original: ");
// console.log(listaCompras);
// console.log("");

// //Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são:
// //Join, Pop, Push, Shift e Unshift.

// // Métodos de arrays
// console.log(
//   "** O método JOIN junta os elementos de um array, utilizando um separador espeficicado **"
// );
// let novaLista = listaCompras.join(" - ");
// console.log(novaLista);
// console.log("");

// console.log("** O método POP elimina o último elemento do array **");
// let lista2 = listaCompras.pop();
// console.log("Eliminado o elemento " + lista2);
// console.log("Nova lista de compras: " + listaCompras);
// console.log("");

// console.log("** O método PUSH insere elementos no final do array **");
// listaCompras.push("laranjas", "refrigerante");
// console.log("Nova lista de compras: " + listaCompras);
// console.log("");

// console.log("** O método SHIFT elimina o primeiro elemento do array **");
// listaCompras.shift();
// console.log("Nova lista de compras: " + listaCompras);
// console.log("");

// console.log("** O método UNSHIFT insere elementos no início do array **");
// listaCompras.unshift("tomate", "cebola");
// console.log("Nova lista de compras: " + listaCompras);
// console.log("");

// Array invertido
function arrayInvertido(lista) {
  console.log(lista.reverse());
}
console.log("Array original: " + listaCompras);
arrayInvertido(listaCompras);

listaNumeros = [2, 5, 3, 9, 10, 45];
console.log(listaNumeros);
console.log(listaNumeros.reduce((a, b) => a + b, 0));
