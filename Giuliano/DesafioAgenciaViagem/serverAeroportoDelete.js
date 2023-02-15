const { Aeroporto } = require("./Aeroporto");
const { excluirArquivo } = require("./promise");

const serverAeroportoDelete = (req, res) => {
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
    const aeroportoJson = JSON.stringify(aeroporto);

    excluirArquivo(`${aeroporto.nome}.json`).then((aeroportoJson) => {
      res.end(aeroportoJson);
    });
    res.writeHead(202, {
      "Content-Type": "application/json",
    });
    res.end(`${aeroportoJson} \n Arquivo deletado.`);
  });
};

exports.serverAeroportoDelete = serverAeroportoDelete;
