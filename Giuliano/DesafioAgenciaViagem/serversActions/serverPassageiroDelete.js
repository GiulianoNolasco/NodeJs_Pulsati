const { Passageiro } = require("../classe/Passageiro");
const { salvarArquivo, excluirArquivo } = require("../promise");

const serverPassageiroDelete = (req, res) => {
  var body = "";
  req.on("data", function (chunk) {
    body += chunk;
  });
  req.on("end", function () {
    const passageiros = JSON.parse(body);
    const passageiro = new Passageiro(
      passageiros.id,
      passageiros.codigoDeVooPassageiro,
      passageiros.nomePassageiro
    );

    const passageirosJson = JSON.stringify(passageiro);

    excluirArquivo(`3P${passageiro.id}.json`).then((passageirosJson) => {
      res.end(passageirosJson);
    });
    res.writeHead(202, {
      "Content-Type": "application/json",
    });
    res.end(`${passageirosJson} \n Arquivo deletado.`);
  });
};
exports.serverPassageiroDelete = serverPassageiroDelete;
