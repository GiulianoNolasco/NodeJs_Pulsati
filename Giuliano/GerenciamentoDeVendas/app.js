const express = require("express");
const { deleteEstoque, putEstoque, getEstoqueById, getEstoque, createEstoque } = require("./Controller/estoqueController");
const { createProduto, deleteProduto, putProduto, getProdutoById, getProduto } = require("./Controller/PRODUTOController");
const { createVenda, getVenda, getVendaById, putVenda, deleteVenda } = require("./Controller/vendaController");

const {
  createVendedor,
  getVendedor,
  getVendedorById,
  putVendedor,
  deleteVendedor,
} = require("./Controller/vendedorController");
const app = express();
app.use(express.json());

app.post("/vendedor", createVendedor);
app.get("/vendedor", getVendedor);
app.get("/vendedor/:id", getVendedorById);
app.put("/vendedor/:id", putVendedor);
app.delete("/vendedor/:id", deleteVendedor);

app.post("/produto", createProduto);
app.get("/produto", getProduto);
app.get("/produto/:id", getProdutoById);
app.put("/produto/:id", putProduto);
app.delete("/produto/:id", deleteProduto);

app.post("/estoque", createEstoque);
app.get("/estoque", getEstoque);
app.get("/estoque/:id", getEstoqueById);
app.put("/estoque/:id", putEstoque);
app.delete("/estoque/:id", deleteEstoque);


app.post("/venda", createVenda);
app.get("/venda", getVenda);
app.get("/venda/:id", getVendaById);
app.put("/venda/:id", putVenda);
app.delete("/venda/:id", deleteVenda);

app.listen(8000);
