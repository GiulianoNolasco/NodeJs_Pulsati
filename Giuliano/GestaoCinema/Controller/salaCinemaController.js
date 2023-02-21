const { SalaCinema } = require("../Model/salaCinemaModel");

exports.createSalaCinema = async (req, res) => {
  const { nomeSala, capacidadeMaxima } = req.body;
  const salaCinema = new SalaCinema();
  salaCinema.nomeSala = nomeSala;
  salaCinema.capacidadeMaxima = capacidadeMaxima;
  await salaCinema.save();
  res.json(salaCinema);
};

exports.getSalaCinema = async (req, res) => {
  SalaCinema.findAll().then((result) => res.json(result));
};

exports.getSalaCinemaById = async (req, res) => {
  const id = req.params.id;
  const salaCinema = await SalaCinema.findByPk(id);
  res.json(salaCinema);
};

exports.putSalaCinema = async (req, res) => {
  const id = req.params.id;
  const salaCinema = await SalaCinema.findByPk(id);
  const { nomeSala, capacidadeMaxima } = req.body;
  salaCinema.nomeSala = nomeSala;
  salaCinema.capacidadeMaxima = capacidadeMaxima;
  await salaCinema.save();
  res.json(salaCinema);
};

exports.deleteSalaCinema = async (req, res) => {
  const id = req.params.id;
  const salaCinema = await SalaCinema.findByPk(id);
  await salaCinema.destroy();
  res.json({ data: "SalaCinema deletada com sucesso" });
};
