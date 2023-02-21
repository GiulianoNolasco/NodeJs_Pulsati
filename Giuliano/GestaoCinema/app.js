const express = require("express");
const {
  createSalaCinema,
  getSalaCinema,
  getSalaCinemaById,
  putSalaCinema,
  deleteSalaCinema,
} = require("./Controller/salaCinemaController");
const {
  deleteSessao,
  putSessao,
  getSessaoById,
  getSessao,
  createSessao,
  emitirIngresso,
  getSessoesDoDia,
} = require("./Controller/sessaoController");
const app = express();
app.use(express.json());

app.post("/salacinema", createSalaCinema);
app.get("/salacinema", getSalaCinema);
app.get("/salacinema/:id", getSalaCinemaById);
app.put("/salacinema/:id", putSalaCinema);
app.delete("/salacinema/:id", deleteSalaCinema);

app.post("/sessao", createSessao);
app.get("/sessao", getSessao);
app.get("/sessao/:id", getSessaoById);
app.put("/sessao/:id", putSessao);
app.delete("/sessao/:id", deleteSessao);

app.put("/emitiringresso/:id", emitirIngresso);

app.get("/sessoesdodia", getSessoesDoDia);


app.listen(8000);
