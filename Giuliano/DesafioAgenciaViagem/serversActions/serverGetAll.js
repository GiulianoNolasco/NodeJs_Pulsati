const { lerArquivosJson } = require("../promise");

const serverGetAll = (res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  lerArquivosJson("../").then((texto) => {
    res.end(texto);
  });
};

exports.serverGetAll = serverGetAll;
