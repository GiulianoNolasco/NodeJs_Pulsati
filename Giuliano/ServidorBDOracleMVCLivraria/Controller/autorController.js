const { Autor } = require("../Model/autorModel");

exports.createAutor = async (req, res) => {
  const { nome, sobrenome, dataNascimento } = req.body;
  const autor = new Autor();
  autor.nome = nome;
  autor.sobrenome = sobrenome;
  autor.dataNascimento = dataNascimento;
  await autor.save();
  res.json(autor);
};

exports.getAutor = async (req, res) => {
  Autor.findAll().then((result) => res.json(result));
};

exports.getAutorById = async (req, res) => {
  const codigo = req.params.codigo;
  const autor = await Autor.findByPk(codigo);
  res.json(autor);
};

exports.putAutor = async (req, res) => {
  const codigo = req.params.codigo;
  const autor = await Autor.findByPk(codigo);
  const { nome, sobrenome,dataNascimento } = req.body;
  autor.nome = nome;
  autor.sobrenome = sobrenome;
  autor.dataNascimento = dataNascimento;
  await autor.save();
  res.json(autor);
};

exports.deleteAutor = async (req, res) => {
  const codigo = req.params.codigo;
  const autor = await Autor.findByPk(codigo);
  await autor.destroy();
  res.json({ data: "Autor deletado com sucesso" });
};
