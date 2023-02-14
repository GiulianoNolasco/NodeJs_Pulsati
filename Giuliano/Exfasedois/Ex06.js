//•Crie um programa que use a nova sintaxe de arrow functions do ECMAScript 6 para definir uma função que
//calcule o valor de juros compostos de uma quantia de dinheiro.


let capital = 5000;
let taxaJuros = 2;
let tempoAplicacao = 1;
calcularJurosCompostos = (capital, taxaJuros, tempoAplicacao) => {
  let montante = capital * Math.pow(1 + taxaJuros, tempoAplicacao);
  console.log(montante);
};

calcularJurosCompostos(capital,taxaJuros,tempoAplicacao);