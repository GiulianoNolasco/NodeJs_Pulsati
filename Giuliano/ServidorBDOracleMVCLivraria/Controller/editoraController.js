const { Editora } = require("../Model/editoraModel");

exports.createEditora = async (req, res) => {
  const { nome, CNPJ } = req.body;
  const editora = new Editora();
  editora.nome = nome;
  editora.CNPJ = CNPJ;
  await editora.save();
  res.json(editora);
};

exports.getEditora = async (req, res) => {
  Editora.findAll().then((result) => res.json(result));
};

exports.getEditoraById = async (req, res) => {
  const codigo = req.params.codigo;
  const editora = await Editora.findByPk(codigo);
  res.json(editora);
};

exports.putEditora = async (req, res) => {
  const codigo = req.params.codigo;
  const editora = await Editora.findByPk(codigo);
  const { nome, CNPJ } = req.body;
  editora.nome = nome;
  editora.CNPJ = CNPJ;
  await editora.save();
  res.json(editora);
};

exports.deleteEditora = async (req, res) => {
  const codigo = req.params.codigo;
  const editora = await Editora.findByPk(codigo);
  await editora.destroy();
  res.json({ data: "Editora deletado com sucesso" });
};
