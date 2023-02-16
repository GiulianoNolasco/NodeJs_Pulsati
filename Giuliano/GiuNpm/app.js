const express = require("express");
const { Aeroporto } = require("./PKG class/aeroporto");
const {
  salvarArquivo,
  lerArquivos,
  excluirArquivo,
} = require("./promise");
const app = express();
app.use(express.json());
const fs = require("fs");
const path = require("path");

const aeroportos = [];
let proximoCodigo = 1;

app.post("/aeroportos", (req, res) => {
  const { nome } = req.body;
  const aeroporto = new Aeroporto(proximoCodigo, nome);
  proximoCodigo++;
  aeroportos.push(aeroporto);
  salvarArquivo(`1_A_${aeroporto.codigo}.json`, JSON.stringify(aeroporto));
  res.json(aeroporto);
});


app.get("/aeroportos", (req, res) => {
  const directoryPath =
    "C:\\Users\\giuliano.santos\\Desktop\\agoravai2\\pulsati-nodejs\\Giuliano\\GiuNpm";
   
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Erro ao ler diretório: ", err);
      return;
    }

    const jsonFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".json"
    );
    const jsonFilePaths = jsonFiles.map((file) =>
      path.join(directoryPath, file)
    );

    const aeroportoJson = lerArquivos(jsonFilePaths);

    aeroportoJson
      .then((aeroportoJson) => {
        res.json((aeroportoJson));
      })
      .catch((error) => {
        console.error(error);
        res.json(`Erro: ${error} ao tentar ler arquivos`);
      });
  })
});

app.get("/aeroportos/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = aeroportos.find((aeroporto) => aeroporto.codigo == codigo);
  res.json(aeroporto);
});

app.put("/aeroportos/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = aeroportos.find((aeroporto) => aeroporto.codigo == codigo);
  const { nome } = req.body;
  aeroporto.nome = nome;
  salvarArquivo(`1_A_${aeroporto.codigo}.json`, JSON.stringify(aeroporto));
  res.json(aeroporto);
});

app.delete("/aeroportos/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = aeroportos.find((aeroporto) => aeroporto.codigo == codigo);
  let posicao;
  aeroportos.forEach((aeroporto, index) => {
    if (aeroporto.codigo == codigo) {
      posicao = index;
    }
  });
  delete aeroportos[posicao];
  
  excluirArquivo(`1_A_${aeroporto.codigo}.json`).then((texto) => {
    res.end(texto);
  });
  res.json({ data: "Deletado com sucesso!" });
});

app.listen(8000);
