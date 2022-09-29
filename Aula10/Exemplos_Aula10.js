// IF TERNÁRIO
// Tem uma notação mais simplificada
// Retorna um valor para uma variável

let media = 7;
//let resultado = ''

if (media > 7) {
  resultado = "Aprovado";
} else {
  resultado = "Reprovado";
}

// Agora a mesma instrução com IF Ternário
resultado = media > 7 ? "Aprovado" : "Reprovado";

// É possível aninhar instruções com IF Ternário

resultado =
  media >= 7
    ? "Aprovado"
    : media > 5 && media < 7
    ? "Recuperação"
    : "Reprovado";
