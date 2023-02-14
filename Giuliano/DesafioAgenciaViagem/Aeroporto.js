class Aeroporto {
  nome;
  codigo;
  endereco;

  constructor(nome, codigo, endereco) {
    this.nome = nome;
    this.codigo = codigo;
    this.endereco = endereco;
  }

  getDadosCompletos() {
    return `${this.nome} ${this.codigo} ${this.endereco}`;
  }
}
exports.Aeroporto = Aeroporto;
