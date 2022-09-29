// Conjunto de dados de espectadores de um cinema, com idade e opinião

let cinema = {
  espectadores: [],
  adicionaEspec(idadeParam, opiniaoParam) {
    const espec = {
      idade: idadeParam,
      opiniao: opiniaoParam,
    };
    cinema.espectadores.push(espec);
  },
  listaEspec() {
    console.table(this.espectadores);
  },
  calculos() {
    soma = 0;
    media = 0;
    cont = 0;
    reg = 0;
    bom = 0;
    for (i = 0; i < this.espectadores.length; i++) {
      if (cinema.espectadores[i].opiniao == 3) {
        soma += cinema.espectadores[i].idade;
        cont++;
      } else if (this.espectadores[i].opiniao == 1) {
        reg++;
      } else {
        bom++;
      }
    }
    media = soma / cont;
    qtdeBom = (bom / this.espectadores.length) * 100;
    console.log(
      "A média de idade dos que responderam ÓTIMO é de " +
        media.toFixed(0) +
        " anos!"
    );
    console.log(
      "O número dos que responderam REGULAR é de " + reg + " espectadores!"
    );
    console.log(
      "A porcentagem dos que responderam BOM é de " + qtdeBom.toFixed(2) + "%!"
    );
  },
};

cinema.adicionaEspec(22, 2);
cinema.adicionaEspec(25, 3);
cinema.adicionaEspec(48, 3);
cinema.adicionaEspec(35, 2);
cinema.adicionaEspec(14, 1);
cinema.adicionaEspec(16, 1);
cinema.adicionaEspec(28, 2);
cinema.adicionaEspec(18, 1);
cinema.adicionaEspec(32, 3);
cinema.adicionaEspec(33, 3);
cinema.adicionaEspec(61, 1);
cinema.adicionaEspec(55, 1);
cinema.adicionaEspec(35, 3);
cinema.adicionaEspec(26, 3);
cinema.adicionaEspec(27, 3);
cinema.listaEspec();
cinema.calculos();
