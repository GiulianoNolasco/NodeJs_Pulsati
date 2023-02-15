const http = require("http");
const { salvarArquivo, lerArquivo } = require("./promise");
const { serverAeroportoGet } = require("./serverAeroportoGet");
const { serverAeroportoPost } = require("./serverAeroportoPost");
const { serverPassageiroPost } = require("./serverPassageiroPost");
const { serverPassageiroGet } = require("./serverPassageiroGet");
const { serverVooPost } = require("./serverVooPost");
const { serverVooGet } = require("./serverVooGet");
const { serverAeroportoPut } = require("./serverAeroportoPut");
const { serverPassageiroPut } = require("./serverPassageiroPut");
const { serverVooPut } = require("./serverVooPut");
const { serverAeroportoDelete } = require("./serverAeroportoDelete");

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
        serverAeroportoGet(res);
      } else if (req.url.indexOf("/passageiros") >= 0) {
        serverPassageiroGet(res);
      } else if (req.url.indexOf("/voos") >= 0) {
        serverVooGet(res);
      } else {
        res.end("Not found");
      }
    } else if (req.method == "PUT") {
      if (req.url.indexOf("/aeroportos") >= 0) {
        serverAeroportoPut(req, res);
      } else if (req.url.indexOf("/passageiros") >= 0) {
        serverPassageiroPut(req, res);
      } else if (req.url.indexOf("/voos") >= 0) {
        serverVooPut(req, res);
      } else {
        res.end("Not found");
      }
    } else if (req.method == "DELETE") {
      if (req.url.indexOf("/aeroportos") >= 0) {
        serverAeroportoDelete(req, res);
      } else {
        res.end("Not found");
      }
    } else {
      res.end("Not found");
    }
  })
  .listen(8000, () => console.log("Servidor inicializado na porta 8000"));
