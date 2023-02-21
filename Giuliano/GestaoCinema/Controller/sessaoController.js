const { Sessao } = require("../Model/sessaoModel");

exports.createSessao = async (req, res) => {
  const {
    dataSessao,
    horarioSessao,
    nomeFilme,
    valorIngresso,
    ingressosVendidos,
    codigoSalaCinema,
  } = req.body;
  const sessao = new Sessao();
  sessao.dataSessao = dataSessao;
  sessao.horarioSessao = horarioSessao;
  sessao.nomeFilme = nomeFilme;
  sessao.valorIngresso = valorIngresso;
  sessao.ingressosVendidos = ingressosVendidos;
  sessao.codigoSalaCinema = codigoSalaCinema;
  await sessao.save();
  res.json(sessao);
};

exports.getSessao = async (req, res) => {
  Sessao.findAll().then((result) => res.json(result));
};

exports.getSessaoById = async (req, res) => {
  const id = req.params.id;
  const sessao = await Sessao.findByPk(id);
  res.json(sessao);
};

exports.putSessao = async (req, res) => {
  const id = req.params.id;
  const sessao = await Sessao.findByPk(id);
  const {
    dataSessao,
    horarioSessao,
    nomeFilme,
    valorIngresso,
    ingressosVendidos,
    codigoSalaCinema,
  } = req.body;
  sessao.dataSessao = dataSessao;
  sessao.horarioSessao = horarioSessao;
  sessao.nomeFilme = nomeFilme;
  sessao.valorIngresso = valorIngresso;
  sessao.ingressosVendidos = ingressosVendidos;
  sessao.codigoSalaCinema = codigoSalaCinema;
  await sessao.save();
  res.json(sessao);
};

exports.deleteSessao = async (req, res) => {
  const id = req.params.id;
  const sessao = await Sessao.findByPk(id);
  await sessao.destroy();
  res.json({ data: "Sessao deletada com sucesso" });
};

exports.emitirIngresso = async (req, res) => {
  const id = req.params.id;
  const sessao = await Sessao.findByPk(id);
  if (sessao.ingressosVendidos >= 15) {
    res.json({Error:422,
      data: "Sessao esgotada, não foi possível a venda do ingresso!",
    });
    await sessao.save();
  } else {
    sessao.ingressosVendidos++;
    await sessao.save();
    res.json(sessao);
  }
};


exports.getSessoesDoDia = async (req, res) => {
  Sessao.findAll().then((result) => res.json(result));
};
