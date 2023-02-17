const { Livro } = require("../Model/livroModel");

exports.createLivro = async (req, res) => {
  const { titulo, numeroEdicao, anoLancamento, codigoEditor, codigoAutor } =
    req.body;
  const livro = new Livro();
  livro.titulo = titulo;
  livro.numeroEdicao = numeroEdicao;
  livro.anoLancamento = anoLancamento;
  livro.codigoEditor = codigoEditor;
  livro.codigoAutor = codigoAutor;
  await livro.save();
  res.json(livro);
};

exports.getLivro = async (req, res) => {
  Livro.findAll().then((result) => res.json(result));
};

exports.getLivroById = async (req, res) => {
  const codigo = req.params.codigo;
  const livro = await Livro.findByPk(codigo);
  res.json(livro);
};

exports.putLivro = async (req, res) => {
  const codigo = req.params.codigo;
  const livro = await Livro.findByPk(codigo);
  const { titulo, numeroEdicao, anoLancamento, codigoEditor, codigoAutor } =
    req.body;
  livro.titulo = titulo;
  livro.numeroEdicao = numeroEdicao;
  livro.anoLancamento = anoLancamento;
  livro.codigoEditor = codigoEditor;
  livro.codigoAutor = codigoAutor;
  await livro.save();
  res.json(livro);
};

exports.deleteLivro = async (req, res) => {
  const codigo = req.params.codigo;
  const livro = await Livro.findByPk(codigo);
  await livro.destroy();
  res.json({ data: "Livro deletado com sucesso" });
};
