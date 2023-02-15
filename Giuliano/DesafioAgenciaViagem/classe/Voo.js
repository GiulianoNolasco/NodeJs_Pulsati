class Voo {
  id;
  codigoVoo;
  codigoAeroportoOrigem;
  codigoAeroportoDestino;
  nomeEmpresaAerea;

  constructor(
    id,
    codigoVoo,
    codigoAeroportoOrigem,
    codigoAeroportoDestino,
    nomeEmpresaAerea
  ) {
    this.id = id;
    this.codigoVoo = codigoVoo;
    this.codigoAeroportoOrigem = codigoAeroportoOrigem;
    this.codigoAeroportoDestino = codigoAeroportoDestino;
    this.nomeEmpresaAerea = nomeEmpresaAerea;
  }

  getDadosCompletos() {
    return `${this.id} ${this.codigoVoo} ${this.codigoAeroportoOrigem} ${this.codigoAeroportoDestino} ${this.nomeEmpresaAerea}`;
  }
}

exports.Voo = Voo;
