const { lerArquivo } = require("./promise");

const serverVooGet = (res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  lerArquivo("./1voo.json").then((texto) => {
    res.end(texto);
  });
};
exports.serverVooGet = serverVooGet;
