const readlineSync = require("readline-sync");

function podeSubir(altura, acompanhada) {
  if (altura > 2.0 || altura < 1.2) {
    pode = "Acesso negado";
  } else if (altura < 1.4 && acompanhada == true) {
    pode = "Acesso autorizado somente com acompanhante";
  } else pode = "Acesso permitido";
  return pode;
}

num01 = readlineSync.question("Informe a altura: ");
num02 = readlineSync.question("Informe se tem acompanhante (true/false): ");
const suba = podeSubir(num01, num02);
console.log(suba);
