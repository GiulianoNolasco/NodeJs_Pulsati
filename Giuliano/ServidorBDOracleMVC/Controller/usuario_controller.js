const { Aeroporto } = require("../Model/aeroportoModel");

exports.createAeroporto = async (req, res) => {
  const { nome, capacidade } = req.body;
  const aeroporto = new Aeroporto();
  aeroporto.nome = nome;
  aeroporto.capacidade = capacidade;
  await aeroporto.save();
  res.json(aeroporto);
};
exports.getAeroportoById = async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  res.json(aeroporto);
};

exports.getAeroporto = async (req, res) => {
  Aeroporto.findAll().then((result) => res.json(result));
};

exports.putAeroporto = async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  const { nome, capacidade } = req.body;
  aeroporto.nome = nome;
  aeroporto.capacidade = capacidade;
  await aeroporto.save();
  res.json(aeroporto);
};

exports.deleteAeroporto = async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  await aeroporto.destroy();
  res.json({ data: "Aeroporto deletado com sucesso" });
};
