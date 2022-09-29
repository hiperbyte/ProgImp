// ************************************************************************************************
// Programação Imperativa - AVALIAÇÃO FINAL
// Grupo 01
//
// ************************************************************************************************

// ** Função construtora, contendo os métodos calcularMedia() e faltas() - PASSOS 01 e 02
function Aluno(nomeP, faltasP, notasP) {
  this.nome = nomeP;
  this.qtdeFaltas = faltasP;
  this.notas = notasP;
  this.calcularMedia = function () {
    soma = 0;
    media = 0;
    for (x = 0; x < this.notas.length; x++) {
      soma += this.notas[x];
    }
    media = soma / this.notas.length;
    return media;
  };
  this.faltas = function () {
    this.qtdeFaltas++;
    return this.qtdeFaltas;
  };
}
// let aluno01 = new Aluno("Gilberto", 1, [8.5, 9, 9.5]);
// console.log(aluno01.calcularMedia());

// ** Criação do objeto literal CURSO - PASSO 03
// ** O objeto contém:
// -> o método adicionaAluno, para adicionar alunos (PASSO 04)
// -> O método aprovacao, que calcula se o aluno foi aprovado (PASSO 05)
// -> o método listaAprovados, que retorna um array somente com os alunos aprovados (PASSO 06)
let curso = {
  nomeCurso: "Super DEV",
  notaAprovacao: 7,
  faltasMaximas: 3,
  listaEstudantes: [],
  adicionaAluno(nomeParam, faltasParam, notasParam) {
    const novo_aluno = new Aluno(nomeParam, faltasParam, notasParam);
    this.listaEstudantes.push(novo_aluno);
  },
  aprovacao(nomeParametro) {
    let foundAluno = this.listaEstudantes.find(
      (aluno) => aluno.nome == nomeParametro
    );
    if (foundAluno == undefined) {
      console.log("Aluno não encontrado");
    } else {
      media = foundAluno.calcularMedia();
      faltou = foundAluno.qtdeFaltas;
    }
    if ((media >= this.notaAprovacao) & (faltou < this.faltasMaximas)) {
      return true;
    } else if (
      (faltou == this.faltasMaximas) &
      (media > this.notaAprovacao * 0.1 + this.notaAprovacao)
    ) {
      return true;
    } else {
      return false;
    }
  },
  listaAprovados() {
    const soAprovados = this.listaEstudantes.filter((n) => {
      return this.aprovacao(n.nome);
    });
    return soAprovados;
  },
};

curso.adicionaAluno("Gerson", 1, [7, 8.5, 9.5]);
curso.adicionaAluno("Heloisa", 0, [10, 9, 9.5]);
curso.adicionaAluno("Jairzinho", 2, [6, 6, 5.5]);
curso.adicionaAluno("Matheus", 3, [7.8, 7.5, 7.9]);
curso.adicionaAluno("Leonardo", 5, [8, 8.4, 7]);
curso.adicionaAluno("Fernando Miguel", 0, [9.5, 9, 10]);

console.table(curso.listaEstudantes);
// curso.aprovacao("Heloisa");
console.table(curso.listaAprovados());
