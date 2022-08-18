// AULA 05 - FUNÇÕES

/* Declaração de função
- Function -> palavra reservada Function
- ()       -> abertura e fechamento de parênteses. Espaço para os parâmetros.
- {}       -> bloco de código a ser executado
- return   -> palavra reservada que indica o que a função vai devolver/retornar

obs.: caso o return não seja colocado, será retornado o valor de undefined.
      o return encerra a função
obs2.: as funções tem visibilidade global, parecido com o var

*/

function minhaPrimeiraFuncao() {
  console.log("Executando minha primeira função");
  return undefined;
}

// Invocando a função...

minhaPrimeiraFuncao();

// Parâmetros são variáveis recebidas na hora da chamada da função

function soma(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

soma(3, 5);

// Exercícios

// 01 - converter polegadas em centímetros
function polegadasEmCm(polegadas = 0) {
  return polegadas * 2.54;
}

const retorno = polegadasEmCm(10);
console.log(retorno);

// 02 - converter string em URL
function converterStringURL(string) {
  return `http://www.${string}.com.br`;
}

const url = converterStringURL("hiperbyte");
console.log(url);

//-----------------------------------------------------------------------------------
// 03 - String com exclamação
function incluiExclamacao(string) {
  return `${string}!`;
}

const exclamacao = incluiExclamacao("Isso é um teste");
console.log(exclamacao);

//-----------------------------------------------------------------------------------
// 04 - Idade dos cachorros
function idadeCachorros(idade) {
  idadeCalculada = idade * 7;
  return `A idade do cachorro é ${idadeCalculada}!`;
}

const cachorres = idadeCachorros(3);
console.log(cachorres);

//-----------------------------------------------------------------------------------
// 05 - Valor da hora trabalhada
function valorHoraTrabalhada(salario) {
  valorHora = (salario / 160).toFixed(2);
  return `Valor da hora trabalhada: ${valorHora}`;
}

const horaTrabalhada = valorHoraTrabalhada(4500);
console.log(horaTrabalhada);

//-----------------------------------------------------------------------------------
// 06 - Cálculo do IMC
function calculoIMC(altura = 0, peso = 0) {
  imc = (peso / (altura * altura)).toFixed(2);
  return `O IMC calculado é: ${imc}`;
}

const imcCalculado = calculoIMC(1.73, 74);
console.log(imcCalculado);

//-----------------------------------------------------------------------------------
// 07 - Converter minúsculas em maiusculas
function converteMaiuscula(string) {
  return string.toUpperCase();
}

const maiuscula = converteMaiuscula(
  "isso será convertido em letras maiúsculas"
);
console.log(maiuscula);

//-----------------------------------------------------------------------------------
// 08 - Tipo de dado
function retornaTipo(inf) {
  return typeof inf;
}

const tipoDeDado = retornaTipo(888);
console.log(tipoDeDado);
