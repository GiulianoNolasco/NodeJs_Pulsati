const { Passageiro } = require("./Passageiro");
const { salvarArquivo } = require("./promise");

const serverPassageiroPut = (req, res) => {
  var body = "";
  req.on("data", function (chunk) {
    body += chunk;
  });
  req.on("end", function () {
    const passageiros = JSON.parse(body);
    const passageiro = new Passageiro(
      passageiros.codigoDeVooPassageiro,
      passageiros.nomePassageiro
    );
    console.log(passageiro.getDadosCompletos());
    const passageiroJson = JSON.stringify(passageiro);
    salvarArquivo(
      `${passageiro.nomePassageiro}.json`,
      JSON.stringify(passageiro)
    );
    res.writeHead(201, {
      "Content-Type": "application/json",
    });
    res.end(passageiroJson);
  });
};
exports.serverPassageiroPut = serverPassageiroPut;
