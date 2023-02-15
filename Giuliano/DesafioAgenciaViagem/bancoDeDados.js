let Aeroporto = require("./Aeroporto");
let Voo = require("./Voo");
let Passageiro = require("./Passageiro");

class bancoAeroporto extends Aeroporto.Aeroporto {
  static adicionarAeroporto1(nome, codigo, endereco) {
    let aeroporto = new Aeroporto.Aeroporto(nome, codigo, endereco);
    return aeroporto;
  }
}

class bancoVoo extends Voo.Voo {
  static adicionarVoo2(
    codigoVoo,
    codigoAeroportoOrigem,
    codigoAeroportoDestino,
    nomeEmpresaAerea
  ) {
    let voo = new Voo.Voo(
      codigoVoo,
      codigoAeroportoOrigem,
      codigoAeroportoDestino,
      nomeEmpresaAerea
    );
    return voo;
  }
}

class bancoPassageiro extends Passageiro.Passageiro {
  static adicionarPassageiro3 (codigoDeVooPassageiro, nomePassageiro){
    let passageiro = new Passageiro.Passageiro(
      codigoDeVooPassageiro,
      nomePassageiro
    );
    return passageiro;
  };
}

exports.bancoAeroporto = bancoAeroporto;
exports.bancoVoo = bancoVoo;
exports.bancoPassageiro = bancoPassageiro;
