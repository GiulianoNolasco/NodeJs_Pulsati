const { Venda } = require("../Model/vendaModel");

exports.createVenda = async (req, res) => {
  const { vendaCodVendedor, vendaCodProduto, quantidadeVendida } = req.body;
  const venda = new Venda();
  venda.vendaCodVendedor = vendaCodVendedor;
  venda.vendaCodProduto = vendaCodProduto;
  venda.quantidadeVendida = quantidadeVendida;
  await venda.save();
  res.json(venda);
};

exports.getVenda = async (req, res) => {
  function comparar(a, b) {
    if (a.id > b.id) return -1;
    if (a.id < b.id) return 1;
    return 0;
  }

  Venda.findAll().then((result) => res.json(result.sort(comparar)));
};

exports.getVendaById = async (req, res) => {
  const id = req.params.id;
  const venda = await Venda.findByPk(id);
  res.json(venda);
};

exports.putVenda = async (req, res) => {
  const id = req.params.id;
  const venda = await Venda.findByPk(id);
  const { vendaCodVendedor, vendaCodProduto, quantidadeVendida } = req.body;
  venda.vendaCodVendedor = vendaCodVendedor;
  venda.vendaCodProduto = vendaCodProduto;
  venda.quantidadeVendida = quantidadeVendida;
  await venda.save();
  res.json(venda);
};

exports.deleteVenda = async (req, res) => {
  const id = req.params.id;
  const venda = await Venda.findByPk(id);
  await venda.destroy();
  res.json({ data: "Venda deletado com sucesso" });
};
