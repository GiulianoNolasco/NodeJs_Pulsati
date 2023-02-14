let classes = require('./Ex05');

class contaEspecial extends classes.contaBancaria{
    imprimeDados(){
        console.log(this.saldo, this.numeroConta);
    }

}

let conta1 = new contaEspecial(500, 15);
conta1.imprimeDados();
//conta1.consultaSaldo();