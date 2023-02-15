const { Aeroporto } = require("../classe/Aeroporto");
const { excluirArquivo } = require("../promise");

const serverAeroportoDelete = (req, res) => {
  var body = "";
  req.on("data", function (chunk) {
    body += chunk;
  });
  req.on("end", function () {
    const aeroportos = JSON.parse(body);
    const aeroporto = new Aeroporto(
      aeroportos.id,
      aeroportos.nome,
      aeroportos.codigo,
      aeroportos.endereco
    );
    
    const aeroportoJson = JSON.stringify(aeroporto);

    excluirArquivo(`1A${aeroporto.id}.json`).then((aeroportoJson) => {
      res.end(aeroportoJson);
    });
    res.writeHead(202, {
      "Content-Type": "application/json",
    });
    res.end(`${aeroportoJson} \n Arquivo deletado.`);
  });
};

exports.serverAeroportoDelete = serverAeroportoDelete;
