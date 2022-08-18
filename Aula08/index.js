// Estudar TRUTHY e FALSY
// https://developer.mozilla.org/pt-BR/docs/Glossary/Falsy
// https://developer.mozilla.org/pt-BR/docs/Glossary/truthy

// Aula de IF e IF/ELSE
let media = 6.9;

// Se a média do aluno foir maio ou igual a 7 entao aluno reprovado
// Caso contrário (média menor que 7) então aluno reprovado

if (media >= 7) {
  console.log("Aluno aprovado");
} else if (media >= 5 && media < 7) {
  console.log("Aluno em recuperação");
} else if (media > 5) {
  console.log("Aluno reprovado");
}

// SWITCH (montar cardápio)
const opcao = "01"; // Ou utilizar o readline

console.log("");
