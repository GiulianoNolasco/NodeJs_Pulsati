class Voo {
  id;
  codigoVoo;
  codigoAeroportoOrigem;
  codigoAeroportoDestino;
  nomeEmpresaAerea;
  
  constructor(
    codigoVoo,
    codigoAeroportoOrigem,
    codigoAeroportoDestino,
    nomeEmpresaAerea
  ) {
    this.codigoVoo = codigoVoo;
    this.codigoAeroportoOrigem = codigoAeroportoOrigem;
    this.codigoAeroportoDestino = codigoAeroportoDestino;
    this.nomeEmpresaAerea = nomeEmpresaAerea;
  }

  
  getDadosCompletos() {
    return `${this.codigoVoo} ${this.codigoAeroportoOrigem} ${this.codigoAeroportoDestino} ${this.nomeEmpresaAerea}`;
  }
}

exports.Voo = Voo;
