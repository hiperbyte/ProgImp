// Exercicio 01
// Crie uma função que receba um array composto por números
// e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz,
// usando map() e reduce().

numeros = [2, 78, 65, 44, 39];

function callback2(acc, valor) {
  acc += valor;
  return acc;
}

total = numeros.reduce(callback2);
console.log(total);

function callback3(valor) {
  return (valor / total).toFixed(2);
}

multiplica = numeros.map(callback3);
console.log(multiplica);

// *************************************************************************************************
// Exercicio 02
// Crie uma função que receba um array de palavras e um número,
// e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras
// maior do que o número informado. (verifique como funciona o método filter ())
frutas = ["abacaxi", "manga", "laranja", "jaboticaba", "melancia", "maçã"];

function callback4(array, num) {
  return array.filter(function (elemento) {
    return elemento.length > num;
  });
}

palavras = callback4(frutas, 6);
console.log(palavras);

// *************************************************************************************************
// EXERCÍCIO 03
// Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos:
// nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética
// e a outra o fará por nota, da mais alta para a mais baixa.
// (Analise qual método seria apropriado para este caso.
// Recomendamos que você consulte a documentação do MDN)

alunos = [
  { nome: "Adair Simoes", nota: 7 },
  { nome: "Jorge Coutinho", nota: 8 },
  { nome: "Karla Dias", nota: 10 },
  { nome: "Geraldo Yoko", nota: 6 },
  { nome: "Maria das Dores", nota: 9 },
];

console.log("Array original: ", alunos);

alunos.sort(function (a, b) {
  if (a.nome > b.nome) {
    return 1;
  }
  if (a.nome < b.nome) {
    return -1;
  }
  return 0;
});

console.log("Array ordenado por nome: ", alunos);

alunos.sort(function (a, b) {
  if (a.nota > b.nota) {
    return -1;
  }
  if (a.nota < b.nota) {
    return 1;
  }
  return 0;
});

console.log("Array ordenado por notas: ", alunos);

