const { Estoque } = require("../Model/estoqueModel");

exports.createEstoque = async (req, res) => {
  const { estoqueCodProduto, quantidadeEmEstoque } = req.body;
  const estoque = new Estoque();
  estoque.estoqueCodProduto = estoqueCodProduto;
  estoque.quantidadeEmEstoque = quantidadeEmEstoque;
  await estoque.save();
  res.json(estoque);
};

exports.getEstoque = async (req, res) => {
  Estoque.findAll().then((result) => res.json(result));
};

exports.getEstoqueById = async (req, res) => {
  const id = req.params.id;
  const estoque = await Estoque.findByPk(id);
  res.json(estoque);
};

exports.putEstoque = async (req, res) => {
  const id = req.params.id;
  const estoque = await Estoque.findByPk(id);
  const { estoqueCodProduto, quantidadeEmEstoque } = req.body;
  estoque.estoqueCodProduto = estoqueCodProduto;
  estoque.quantidadeEmEstoque = quantidadeEmEstoque;
  await estoque.save();
  res.json(estoque);
};

exports.deleteEstoque = async (req, res) => {
  const id = req.params.id;
  const estoque = await Estoque.findByPk(id);
  await estoque.destroy();
  res.json({ data: "Estoque deletado com sucesso" });
};

exports.getEstoqueQuantidadeBaixa = async (req, res) => {
  let filtro = "";
  Estoque.findAll().then((result) =>
    result.forEach((obj) => {
      if (obj.quantidadeEmEstoque < 10) {
        filtro += obj.get;
      }
    })
  );
  res.json(filtro);
};
