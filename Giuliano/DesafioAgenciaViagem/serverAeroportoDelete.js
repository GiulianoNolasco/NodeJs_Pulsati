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
    console.log(aeroporto.getDadosCompletos());
    const aeroportoJson = JSON.stringify(aeroporto);

    excluirArquivo(`${aeroporto.nome}.json`).then((texto) => {
      res.end(texto);
    });

    res.writeHead(202, {
      "Content-Type": "application/json",
    });
    res.end(aeroportoJson);
  });
};

exports.serverAeroportoDelete = serverAeroportoDelete;
