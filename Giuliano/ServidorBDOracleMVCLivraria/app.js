const express = require("express");
const {
  createAutor,
  getAutor,
  putAutor,
  getAutorById,
  deleteAutor,
} = require("./Controller/autorController");
const {
  deleteEditora,
  putEditora,
  getEditoraById,
  getEditora,
  createEditora,
} = require("./Controller/editoraController");
const {
  createLivro,
  getLivro,
  getLivroById,
  putLivro,
  deleteLivro,
} = require("./Controller/livroController");
const app = express();
app.use(express.json());

app.post("/autor", createAutor);
app.get("/autor", getAutor);
app.get("/autor/:codigo", getAutorById);
app.put("/autor/:codigo", putAutor);
app.delete("/autor/:codigo", deleteAutor);

app.post("/editora", createEditora);
app.get("/editora", getEditora);
app.get("/editora/:codigo", getEditoraById);
app.put("/editora/:codigo", putEditora);
app.delete("/editora/:codigo", deleteEditora);

app.post("/livro", createLivro);
app.get("/livro", getLivro);
app.get("/livro/:codigo", getLivroById);
app.put("/livro/:codigo", putLivro);
app.delete("/livro/:codigo", deleteLivro);

app.listen(8000);
