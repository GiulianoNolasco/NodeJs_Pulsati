const { lerArquivo } = require("./promise");

const serverAeroportoGet = (res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  lerArquivo("./1Aeroporto.json").then((texto) => {
    res.end(texto);
  });
};

exports.serverAeroportoGet = serverAeroportoGet;
