//••Crie um programa que use a nova sintaxe de classes do ECMAScript 6 para definir uma classe "ContaBancaria",
//crie um objeto a partir dessa classe e imprima no console.


class contaBancaria{
saldo = 0;
numeroConta = 0;

constructor(saldo, numeroConta) {
    this.saldo = saldo;
    this.numeroConta = numeroConta;
  }

static consultaSaldo(){
    console.log(this.saldo);
};
}
exports.contaBancaria = contaBancaria;