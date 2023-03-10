import AppDataSource from "./config/Database";

const express = require("express");
// const AppDataSource = require("./config/Database");
const AeroportoController = require("./controller/AeroportoController");

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado com sucesso ao banco");
    const app = express();
    app.use(express.json());

    app.post("/aeroportos", new AeroportoController().create);
    app.get("/aeroportos/:id", new AeroportoController().get);
    app.put("/aeroportos/:id", new AeroportoController().update);
    app.delete("/aeroportos/:id", new AeroportoController().delete);

    app.listen(8000);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));
