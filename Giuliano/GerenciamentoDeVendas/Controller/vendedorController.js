const { Vendedor } = require("../Model/vendedorModel");

exports.createVendedor = async (req, res) => {
  const { nome, CPF, telefone, endereco } = req.body;
  const vendedor = new Vendedor();
  vendedor.nome = nome;
  vendedor.CPF = CPF;
  vendedor.telefone = telefone;
  vendedor.endereco = endereco;
  await vendedor.save();
  res.json(vendedor);
};

exports.getVendedor = async (req, res) => {
  Vendedor.findAll().then((result) => res.json(result));
};

exports.getVendedorById = async (req, res) => {
  const id = req.params.id;
  const vendedor = await Vendedor.findByPk(id);
  res.json(vendedor);
};

exports.putVendedor = async (req, res) => {
  const id = req.params.id;
  const vendedor = await Vendedor.findByPk(id);
  const { nome, CPF, telefone, endereco } = req.body;
  vendedor.nome = nome;
  vendedor.CPF = CPF;
  vendedor.telefone = telefone;
  vendedor.endereco = endereco;
  await vendedor.save();
  res.json(vendedor);
};

exports.deleteVendedor = async (req, res) => {
  const id = req.params.id;
  const vendedor = await Vendedor.findByPk(id);
  await vendedor.destroy();
  res.json({ data: "Vendedor deletado com sucesso" });
};