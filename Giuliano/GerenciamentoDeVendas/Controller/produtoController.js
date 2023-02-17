const { Produto } = require("../Model/produtoModel");

exports.createProduto = async (req, res) => {
  const { nome, marca, descricao, valor } = req.body;
  const produto = new Produto();
  produto.nome = nome;
  produto.marca = marca;
  produto.descricao = descricao;
  produto.valor = valor;
  await produto.save();
  res.json(produto);
};

exports.getProduto = async (req, res) => {
  Produto.findAll().then((result) => res.json(result));
};

exports.getProdutoById = async (req, res) => {
  const id = req.params.id;
  const produto = await Produto.findByPk(id);
  res.json(produto);
};

exports.putProduto = async (req, res) => {
  const id = req.params.id;
  const produto = await Produto.findByPk(id);
  const { nome, marca, descricao, valor} = req.body;
  produto.nome = nome;
  produto.marca = marca;
  produto.descricao = descricao;
  produto.valor = valor;
  await produto.save();
  res.json(produto);
};

exports.deleteProduto = async (req, res) => {
  const id = req.params.id;
  const produto = await Produto.findByPk(id);
  await produto.destroy();
  res.json({ data: "Produto deletado com sucesso" });
};