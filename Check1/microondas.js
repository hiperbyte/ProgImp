const readlineSync = require("readline-sync");

// CHECKPOINT I DE PROGRAMAÇÃO IMPERATIVA
// Aluno: GILSON JOSÉ RENGEL

// Mensagens a serem exibidas após o processamento
msg0 = "Prato pronto, bom apetite!!";
msg1 = "Kabummm!!!";
msg2 = "Sua comida queimou!";
msg3 = "Tempo insuficiente!";

// Função que recebe o tempo informado pelo usuário e o padrão de cada comida
// Retorna a mensagem após comparar o tempo com o padrão
function comida(tempo, padrao) {
  dobro = padrao * 2;
  triplo = padrao * 3;
  mensagem = "";
  if (tempo >= triplo) {
    mensagem = msg1;
  } else if (tempo >= dobro) {
    mensagem = msg2;
  } else if (tempo < padrao) {
    mensagem = msg3;
  } else {
    mensagem = msg0;
  }
  return mensagem;
}

// Menu para escolha da opção de comida e informação do tempo
console.log(`
     MENU
     -----------------
    |  1 - Pipoca     |
    |  2 - Macarrão   |
    |  3 - Carne      |
    |  4 - Feijão     |
    |  5 - Brigadeiro |
     -----------------
`);

// Solicita as informações de OPÇÃO de comida e TEMPO
const opcao = readlineSync.questionInt(
  "Informe uma opcao de comida conforme o MENU: "
);
const tempo = readlineSync.questionInt("Agora informe o tempo: ");

// Função que recebe a opção escolhida e o tempo, informados pelo usuário
// e "chama" a função que retorna a mensagem
function microondas(opc, t) {
  switch (opc) {
    case 1:
      retorno = comida(t, 10);
      break;
    case 2:
      retorno = comida(t, 8);
      break;
    case 3:
      retorno = comida(t, 15);
      break;
    case 4:
      retorno = comida(t, 12);
      break;
    case 5:
      retorno = comida(t, 8);
      break;
    default:
      retorno = "Prato inexistente!";
  }
  return retorno;
}

// Imprime na tela a mensagem final
console.log("");
console.log(microondas(opcao, tempo));
console.log("");
