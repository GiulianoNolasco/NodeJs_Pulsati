const http = require("http");
const { serverAeroportoGet } = require("./serversActions/serverAeroportoGet");
const { serverAeroportoPost } = require("./serversActions/serverAeroportoPost");
const {
  serverPassageiroPost,
} = require("./serversActions/serverPassageiroPost");
const { serverPassageiroGet } = require("./serversActions/serverPassageiroGet");
const { serverVooPost } = require("./serversActions/serverVooPost");
const { serverVooGet } = require("./serversActions/serverVooGet");
const { serverAeroportoPut } = require("./serversActions/serverAeroportoPut");
const { serverPassageiroPut } = require("./serversActions/serverPassageiroPut");
const { serverVooPut } = require("./serversActions/serverVooPut");
const {
  serverAeroportoDelete,
} = require("./serversActions/serverAeroportoDelete");
const {
  serverPassageiroDelete,
} = require("./serversActions/serverPassageiroDelete");
const { serverVooDelete } = require("./serversActions/serverVooDelete");

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
      } else if (req.url.indexOf("/passageiros") >= 0) {
        serverPassageiroDelete(req, res);
      } else if (req.url.indexOf("/voos") >= 0) {
        serverVooDelete(req, res);
      } else {
        res.end("Not found");
      }
    } else {
      res.end("Not found");
    }
  })
  .listen(8000, () => console.log("Servidor inicializado na porta 8000"));
