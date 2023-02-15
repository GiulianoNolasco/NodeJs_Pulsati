const http = require("http");
const { salvarArquivo, lerArquivo } = require("./promise");
const { serverAeroportoPost } = require("./serverAeroportoPost");
const { serverPassageiroPost } = require("./serverpassageiroPost");
const { serverVooPost } = require("./serverVooPost");

http
  .createServer((req, res) => {
    if (req.method == "POST") {
      if (req.url.indexOf("/aeroportos") >= 0) {
        serverAeroportoPost(req, res);
      } else if (req.url.indexOf("/passageiros") >= 0) {
        serverPassageiroPost(req, res);
      } else if (req.url.indexOf("/voos") >= 0) {
        serverVooPost(req, res);
      } else {
        res.end("Not found");
      }
    } else if (req.method == "GET") {
      if (req.url.indexOf("/aeroportos") >= 0) {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        lerArquivo("./1Aeroporto.json").then((texto) => {
          res.end(texto);
        });
      }else if (req.url.indexOf("/passageiros") >= 0) {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        lerArquivo("./1passageiro.json").then((texto) => {
          res.end(texto);
        });
      }
      else if (req.url.indexOf("/voos") >= 0) {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        lerArquivo("./1voo.json").then((texto) => {
          res.end(texto);
        });
      }
      else {
        res.end("Not found");
      }
    } else {
      res.end("Not found");
    }
  })
  .listen(8000, () => console.log("Servidor inicializado na porta 8000"));
