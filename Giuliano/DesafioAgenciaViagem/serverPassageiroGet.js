const { lerArquivo } = require("./promise");

const serverPassageiroGet = (res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  lerArquivo("./1passageiro.json").then((texto) => {
    res.end(texto);
  });
};
exports.serverPassageiroGet = serverPassageiroGet;
