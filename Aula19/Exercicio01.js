// Conjunto de dados contendo altura e sexo de 15 pessoas

let conjunto = {
  pessoas: [],
  adicionar(nomeparam, sexoparam, alturaparam) {
    const novo = {
      nome: nomeparam,
      sexo: sexoparam,
      altura: alturaparam,
    };
    conjunto.pessoas.push(novo);
  },
  listaInfo() {
    console.table(this.pessoas);
  },
  maior_menor() {
    maior = this.pessoas[0].altura;
    menor = this.pessoas[0].altura;
    pessoaMaior = "";
    pessoaMenor = "";
    for (i = 1; i < this.pessoas.length; i++) {
      if (this.pessoas[i].altura >= maior) {
        maior = this.pessoas[i].altura;
        pessoaMaior = this.pessoas[i].nome;
      } else if (this.pessoas[i].altura < menor) {
        menor = this.pessoas[i].altura;
        pessoaMenor = this.pessoas[i].nome;
      }
    }

    console.log(
      "A pessoa com maior altura é " + pessoaMaior + ", medindo " + maior + "m!"
    );
    console.log(
      "A pessoa com menor altura é " + pessoaMenor + ", medindo " + menor + "m!"
    );
  },

  maior_menor2() {
    mai = this.pessoas[0].altura;
    men = this.pessoas[0].altura;
    this.pessoas.forEach(function (valor) {
      if (valor.altura >= mai) {
        mai = valor.altura;
      } else if (valor.altura < men) {
        men = valor.altura;
      }
    });
    console.log("Maior altura: " + mai);
    console.log("Menor altura: " + men);
  },
  mediaMulheres() {
    media = 0;
    soma = 0;
    contador = 0;
    homens = 0;
    for (x = 0; x < this.pessoas.length; x++) {
      if (this.pessoas[x].sexo == "F") {
        soma = soma + this.pessoas[x].altura;
        contador++;
      } else {
        homens++;
      }
    }
    media = soma / contador;
    console.log("A média de altura das mulheres é " + media.toFixed(2) + "m!");
    console.log("O número de HOMENS no conjunto de dados é de " + homens + "!");
  },
};

conjunto.adicionar("Gilson", "M", 1.72);
conjunto.adicionar("Fatima", "F", 1.61);
conjunto.adicionar("Aquiles", "M", 1.77);
conjunto.adicionar("Regiane", "F", 1.67);
conjunto.adicionar("Pedro", "M", 1.92);
conjunto.adicionar("Ana Maria", "F", 1.73);
conjunto.adicionar("Angelica", "F", 1.58);
conjunto.adicionar("Marcelo", "M", 1.86);
conjunto.adicionar("Katia", "F", 1.66);
conjunto.adicionar("Leonardo", "M", 1.84);
conjunto.adicionar("João Cesar", "M", 1.79);
conjunto.adicionar("Patricia", "F", 1.63);
conjunto.adicionar("Herbert", "M", 1.97);
conjunto.adicionar("Maria Clara", "F", 1.55);
conjunto.adicionar("Laura", "F", 1.52);
conjunto.listaInfo();
conjunto.maior_menor();
conjunto.mediaMulheres();
conjunto.maior_menor2();
