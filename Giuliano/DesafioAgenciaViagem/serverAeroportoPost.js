const { Aeroporto } = require("./Aeroporto");
const { salvarArquivo } = require("./promise");

const serverAeroportoPost = (req, res) => {
  var body = "";
  req.on("data", function (chunk) {
    body += chunk;
  });
  req.on("end", function () {
    const aeroportos = JSON.parse(body);
    const aeroporto = new Aeroporto(
      aeroportos.nome,
      aeroportos.codigo,
      aeroportos.endereco
    );
    console.log(aeroporto.getDadosCompletos());
    const aeroportoJson = JSON.stringify(aeroporto);
    salvarArquivo(`${aeroporto.nome}.json`, JSON.stringify(aeroportoJson));
    res.writeHead(201, {
      "Content-Type": "application/json",
    });
    res.end(aeroportoJson);
  });
};
exports.serverAeroportoPost = serverAeroportoPost;
