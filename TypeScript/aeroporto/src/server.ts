import AppDataSource from "./config/Database";

const express = require("express");
// const AppDataSource = require("./config/Database");
const AeroportoController = require("./controller/AeroportoController");

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado com sucesso ao banco");
    const app = express();
    app.use(express.json());

    app.use(function (req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );
      next();
    });

    app.post("/aeroportos", new AeroportoController().create);
    app.get("/aeroportos/:id", new AeroportoController().get);
    app.get("/aeroportos", new AeroportoController().list);
    app.put("/aeroportos/:id", new AeroportoController().update);
    app.delete("/aeroportos/:id", new AeroportoController().delete);

    app.listen(8000);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));
