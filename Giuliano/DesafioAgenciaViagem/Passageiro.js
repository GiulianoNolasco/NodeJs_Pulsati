class Passageiro {
  codigoDeVooPassageiro;
  nomePassageiro;

  constructor(codigoDeVooPassageiro, nomePassageiro) {
    this.codigoDeVooPassageiro = codigoDeVooPassageiro;
    this.nomePassageiro = nomePassageiro;
  }

  
  getDadosCompletos() {
    return `${this.codigoDeVooPassageiro} ${this.nomePassageiro}`;
  }
}
exports.Passageiro = Passageiro;
