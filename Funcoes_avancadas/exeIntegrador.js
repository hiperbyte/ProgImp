// EXERCÍCIO INTEGRADOR
// Controle de vendas de um agricultor

vendas = [
  { nome: "cebola", preco: 1.55, Qtde_vendida: 1200 }, //1860
  { nome: "tomate", preco: 2.8, Qtde_vendida: 1000 }, //2800
  { nome: "repolho", preco: 0.9, Qtde_vendida: 800 }, //720
  { nome: "pimentao", preco: 2.95, Qtde_vendida: 500 }, //1475
  { nome: "brocolis", preco: 1.6, Qtde_vendida: 200 }, // 320
  { nome: "batata", preco: 1.4, Qtde_vendida: 200 }, //280
  { nome: "milho", preco: 0.9, Qtde_vendida: 3000 }, //2700
];

// ****************************************************************************************
// // 1. Calcular o lucro total de todos os produtos
// function clback(acc, valor) {
//   fat = valor.Qtde_vendida * valor.preco;
//   return (acc += fat);
// }

// lucroTotal = vendas.reduce(clback, 0);
// console.log(lucroTotal);
lucroTotal = vendas.reduce((acc, valor) => {
  fat = valor.Qtde_vendida * valor.preco;
  return (acc += fat);
}, 0);

console.log("O lucro total dos produtos é ", lucroTotal.toFixed(2));

// ***********************************************************************************************
// 2. Permitir pesquisar um produto pelo nome e calcular seu lucro total

function localiza(produto) {
  let foundprod = vendas.find((prod) => prod.nome == produto);
  if (foundprod == undefined) {
    console.log("Produto não encontrado!");
  } else {
    return console.log(
      "Produto " + produto + " encontrado, o qual tem um lucro total de ",
      foundprod.Qtde_vendida * foundprod.preco
    );
  }
}

localiza("cebola");

// ******************************************************************************************
// 3. Permite receber um valor e indicar todos os produtos que venderam mais que esse valor
function clb(array, num) {
  return array.filter(function (elemento) {
    return elemento.Qtde_vendida > num;
  });
}

maioresVendas = clb(vendas, 1000);
console.log(maioresVendas);

// *****************************************************************************************
// 4. Classifique todos os produtos pela quantidade de dinheiro que geraram

vendas.sort(function (a, b) {
  if (a.Qtde_vendida * a.preco > b.Qtde_vendida * b.preco) {
    return -1;
  }
  if (a.Qtde_vendida * a.preco < b.Qtde_vendida * b.preco) {
    return 1;
  }
  return 0;
});

console.log("Objeto ordenado por faturamento: ", vendas);

// ***************************************************************************************
// 5. Encontre um produto e atribua a ele um novo valor (reutilize o código que permite
// encontrar o produto pelo nome).

function alteraPreco(produto, novoValor) {
  let foundprod = vendas.findIndex((prod) => prod.nome == produto);
  if (foundprod == -1) {
    console.log("Produto não encontrado!");
  } else {
    vendas[foundprod].preco = novoValor;
    return console.log(
      "Produto " + produto + " encontrado e seu preço alterado"
    );
  }
}

alteraPreco("cebola", 1.2);
console.log(vendas);

// ****************************************************************************************
// 6. Calcule o lucro total após pagar 45% do lucro em impostos.

lucroTotalSemImpostos = vendas.reduce((acc, valor) => {
  fat = valor.Qtde_vendida * valor.preco * 0.55;
  return (acc += fat);
}, 0);

console.log(
  "O lucro total dos produtos, menos 45% de impostos é ",
  lucroTotalSemImpostos.toFixed(2)
);
