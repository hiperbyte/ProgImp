// FUNÇÕES CONSTRUTORAS

// Função construtora 1
function criarUsuario(nomeParam, idadeParam, rgParam) {
  return {
    nome: nomeParam,
    idade: idadeParam,
    rg: rgParam,
  };
}

let usuario1 = criarUsuario("Fulano1", 18, "2.222.222");
let usuario2 = criarUsuario("Fulano2", 22, "3.333.333");

// Função construtora 2 -> usando o this
// Para esse tipo de função a primeira letra é maiúscula

function Usuario(nomeParam, idadeParam, regParam) {
  // conceito de atribuição e dot notatio para criar as propriedades
  // this como sendo o objeto pai de todo mundo
  // no momento inicial da função construtora
  // Assim, this é um objeto vazio
  this.nome = nomeParam;
  this.idade = idadeParam;
  this.rg = regParam;
}

// new -> novo -> criando um novo objeto pela função construtora
let usuario5 = new Usuario("Fulano 4", 28, "3.000.000");
console.log(usuario5);

// Função construtora 3
// CLASS -> pesquisar e estudar (pesquisar sobre CLASSES JAVASCRIPT) https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
