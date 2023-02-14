let classes = require('./Ex01');

class Funcionario extends classes.PessoaFisica {
  imprimir() {
    console.log(this.nome, this.sobrenome);
  }
}

let funcionario1 = new Funcionario('José', 'Santos');
funcionario1.imprimir();


let funcionario2 = new Funcionario('José');
funcionario2.imprimir();
