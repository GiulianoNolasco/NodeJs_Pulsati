class Voo {
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
}
exports.Voo = Voo;
