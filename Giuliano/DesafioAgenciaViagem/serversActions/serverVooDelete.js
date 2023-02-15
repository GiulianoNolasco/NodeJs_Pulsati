const { salvarArquivo, excluirArquivo } = require("../promise");
const { Voo } = require("../classe/Voo");

const serverVooDelete = (req, res) => {
  var body = "";
  req.on("data", function (chunk) {
    body += chunk;
  });
  req.on("end", function () {
    const voos = JSON.parse(body);
    const voo = new Voo(
      voos.id,
      voos.codigoVoo,
      voos.codigoAeroportoOrigem,
      voos.codigoAeroportoDestino,
      voos.nomeEmpresaAerea
    );

    const vooJson = JSON.stringify(voo);

    excluirArquivo(`2V${voo.id}.json`).then((vooJson) => {
      res.end(vooJson);
    });
    res.writeHead(202, {
      "Content-Type": "application/json",
    });
    res.end(`${vooJson} \n Arquivo deletado.`);
  });
};
exports.serverVooDelete = serverVooDelete;
