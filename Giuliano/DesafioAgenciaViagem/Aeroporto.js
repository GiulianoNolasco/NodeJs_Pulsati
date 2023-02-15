class Aeroporto {
  id;
  nome;
  codigo;
  endereco;

  constructor(id, nome, codigo, endereco) {
    this.id = id;
    this.nome = nome;
    this.codigo = codigo;
    this.endereco = endereco;
  }

  getDadosCompletos() {
    return `${this.id} ${this.nome} ${this.codigo} ${this.endereco}`;
  }
}
exports.Aeroporto = Aeroporto;
