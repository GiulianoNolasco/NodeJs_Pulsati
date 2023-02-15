const { Passageiro } = require("../classe/Passageiro");
const { salvarArquivo } = require("../promise");

const serverPassageiroPost = (req, res) => {
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
    console.log(passageiro.getDadosCompletos());
    const passageiroJson = JSON.stringify(passageiro);
    salvarArquivo(
      `3P${passageiro.id}.json`,
      JSON.stringify(passageiro)
    );
    res.writeHead(201, {
      "Content-Type": "application/json",
    });
    res.end(passageiroJson);
  });
};
exports.serverPassageiroPost = serverPassageiroPost;
