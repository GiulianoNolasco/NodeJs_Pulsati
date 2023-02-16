const express = require("express");
const { Aeroporto } = require("./PKG class/aeroporto");
const app = express();
app.use(express.json());

const aeroportos = [];
let proximoCodigo = 1;

app.post("/aeroportos", (req, res) => {
  const { nome } = req.body;
  const aeroporto = new Aeroporto(proximoCodigo, nome);
  proximoCodigo++;
  aeroportos.push(aeroporto);
  res.json(aeroporto);
});
app.get("/aeroportos", (req, res) => {
  res.json(aeroportos);
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
  res.json(aeroporto);
});

app.delete("/aeroportos/:codigo", (req,res)=>{
    const codigo = req.params.codigo;
    let posicao;
    aeroportos.forEach((aeroporto,index)=>{
        if (aeroporto.codigo == codigo) {
            posicao = index;
        }
    })
    delete aeroportos[posicao];
    res.json({data: 'Deletado com sucesso!'})
})

app.listen(8000);
