// Exercício CONCURSO STAND-UP

// Dados os arrays, calcular o vencedor das três apresentações

const alice = [23, 82, 46];
const bob = [45, 8, 46];

function encontraGanhador(a, b) {
  let pontosA = 0;
  let pontosB = 0;
  let ganhador = "";
  for (i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      pontosA++;
    } else if (a[i] < b[i]) {
      pontosB++;
    }
  }
  if (pontosA > pontosB) {
    ganhador = "Participante A";
  } else if (pontosA < pontosB) {
    ganhador = "Participante B";
  } else {
    return `Competição empatada`;
  }
  return `O ganhador é ${ganhador}!`;
}

console.log(encontraGanhador(alice, bob));
