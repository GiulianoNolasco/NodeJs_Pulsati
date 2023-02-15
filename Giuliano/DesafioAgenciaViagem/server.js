const http = require("http");
const { Aeroporto } = require("./Aeroporto");
const { Passageiro } = require("./Passageiro");
const { salvarArquivo, lerArquivo } = require("./promise");
const { Voo } = require("./Voo");
const adicionarAerop =
  require("./bancoDeDados").bancoAeroporto.adicionarAeroporto1;

http
  .createServer((req, res) => {
    if (req.method == "POST") {
      if (req.url.indexOf("/aeroportos") >= 0) {
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
          salvarArquivo(
            `${aeroporto.nome}.json`,
            JSON.stringify(aeroportoJson)
          );
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(aeroportoJson);
        });
      } else if (req.url.indexOf("/passageiros") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const passageiros = JSON.parse(body);
          const passageiro = new Passageiro(
            passageiros.codigoDeVooPassageiro,
            passageiros.nomePassageiro
          );
          console.log(passageiro.getDadosCompletos());
          const passageiroJson = JSON.stringify(passageiro);
          salvarArquivo(
            `${passageiro.nomePassageiro}.json`,
            JSON.stringify(passageiroJson)
          );
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(passageiroJson);
        });
      } else if (req.url.indexOf("/voos") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const voos = JSON.parse(body);
          const voo = new Voo(
            voos.codigoVoo,
            voos.codigoAeroportoOrigem,
            voos.codigoAeroportoDestino,
            voos.nomeEmpresaAerea
          );
          console.log(voo.getDadosCompletos());
          const vooJson = JSON.stringify(voo);
          salvarArquivo(`${voo.codigoVoo}.json`, JSON.stringify(vooJson));
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(vooJson);
        });
      } else {
        res.end("Not found");
      }
    } else {
      res.end("Not found");
    }
  })
  .listen(8000, () => console.log("Servidor inicializado na porta 8000"));
