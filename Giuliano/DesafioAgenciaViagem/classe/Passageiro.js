class Passageiro {
  id;
  codigoDeVooPassageiro;
  nomePassageiro;

  constructor(id, codigoDeVooPassageiro, nomePassageiro) {
    this.id = id;
    this.codigoDeVooPassageiro = codigoDeVooPassageiro;
    this.nomePassageiro = nomePassageiro;
  }

  getDadosCompletos() {
    return `${this.id} ${this.codigoDeVooPassageiro} ${this.nomePassageiro}`;
  }
}
exports.Passageiro = Passageiro;
