// Exercício PRATICANDO COM LOOPS

// 1. Repetir como um papagaio
for (i = 1; i <= 5; i++) {
  console.log("Olá mundo!");
}

// 2. Contando números ímpares
lista = [];
x = 0;
for (i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    lista[x] = i;
    x++;
  }
}

// 3. Criando a tabuada
num = 2;
console.log("Tabuada do " + num + ":");
for (i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}
