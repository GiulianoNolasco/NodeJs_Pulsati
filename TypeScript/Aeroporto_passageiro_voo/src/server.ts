import AppDataSource from "./config/Database";
import { AeroportoController } from "./controller/AeroportoController";
import { PassageiroController } from "./controller/PassageiroController";
import { VooController } from "./controller/VooController";
const express = require("express");

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

    app.post("/passageiros", new PassageiroController().create);
    app.get("/passageiros/:id", new PassageiroController().get);
    app.get("/passageiros", new PassageiroController().list);
    app.put("/passageiros/:id", new PassageiroController().update);
    app.delete("/passageiros/:id", new PassageiroController().delete);

    app.post("/voos", new VooController().create);
    app.get("/voos/:id", new VooController().get);
    app.get("/voos", new VooController().list);
    app.put("/voos/:id", new VooController().update);
    app.delete("/voos/:id", new VooController().delete);

    app.listen(8000);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));
