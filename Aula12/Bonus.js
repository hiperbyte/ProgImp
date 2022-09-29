// Exercício aula 11 - BÔNUS EXTRA

// Aplicativo para concurso

// 1. Maneira ideal de representar cada participante com suas pontuações
partA = [5, 8, 4, 9, 5];
partB = [8, 7, 8, 6, 8];
partC = [7, 5, 10, 8, 3];

// 2. Cria uma função pata calcular e devolver a média de cada participante

function pontuacaoMedia(participante) {
  let media = 0;
  let soma = 0;
  for (i = 0; i < participante.length; i++) {
    soma = soma + participante[i];
  }
  media = soma / participante.length;
  return media;
}

// console.log(pontuacaoMedia(partB));

// 3. Cria uma função para calcular e devolver a pontuação mais alta
function pontuacaoMaior(participante) {
  let maior = participante[0];
  for (i = 0; i < participante.length; i++) {
    num = participante[i];
    if (participante[i] >= maior) {
      maior = participante[i];
    }
  }
  return maior;
}

// console.log(pontuacaoMaior(partB));

function competicao(p1, p2, p3) {
  let mediaP1 = pontuacaoMedia(p1);
  let mediaP2 = pontuacaoMedia(p2);
  let mediaP3 = pontuacaoMedia(p3);
  let maiorP1 = pontuacaoMaior(p1);
  let maiorP2 = pontuacaoMaior(p2);
  let maiorP3 = pontuacaoMaior(p3);

  if (mediaP1 > mediaP2 && mediaP1 > mediaP3) {
    competiMedia = "Participante A";
  } else if (mediaP2 > mediaP3 && mediaP2 > mediaP1) {
    competiMedia = "Participante B";
  } else {
    competiMedia = "Participante C";
  }

  if (maiorP1 > maiorP2 && maiorP1 > maiorP3) {
    competiMaior = "Participante A";
  } else if (maiorP2 > maiorP3 && maiorP2 > maiorP1) {
    competiMaior = "Participante B";
  } else {
    competiMaior = "Participante C";
  }

  return `O ${competiMaior} obteve a maior pontuação e o ${competiMedia} obteve a melhor média.`;
}

console.log(competicao(partA, partB, partC));
