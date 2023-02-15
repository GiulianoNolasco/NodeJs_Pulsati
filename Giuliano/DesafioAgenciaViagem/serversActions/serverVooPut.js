const { salvarArquivo } = require("../promise");
const { Voo } = require("../classe/Voo");

const serverVooPut = (req, res) => {
  var body = "";
  req.on("data", function (chunk) {
    body += chunk;
  });
  req.on("end", function () {
    const voos = JSON.parse(body);
    const voo = new Voo(
      voos.codigoVoo,
      voos.codigoAeroportoOrigem,
      voos.codigoAeroportoDestino,
      voos.nomeEmpresaAerea
    );
    console.log(voo.getDadosCompletos());
    const vooJson = JSON.stringify(voo);
    salvarArquivo(`${voo.codigoVoo}.json`, JSON.stringify(voo));
    res.writeHead(201, {
      "Content-Type": "application/json",
    });
    res.end(vooJson);
  });
};
exports.serverVooPut = serverVooPut;
