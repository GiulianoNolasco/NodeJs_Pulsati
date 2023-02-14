//•Crie um programa que use a nova sintaxe de classes do ECMAScript 6 para definir uma classe "Pessoa".

class PessoaFisica {
  nome = "Não informado";
  sobrenome = "Não informado";

  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

}

exports.PessoaFisica = PessoaFisica;
