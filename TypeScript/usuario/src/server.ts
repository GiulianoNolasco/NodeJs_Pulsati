import express from "express";
import AppDataSource from "./config/Database";
import { UsuarioController } from "./controller/UsuarioController";

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

    app.post("/usuarios", new UsuarioController().create);
    app.get("/usuarios/:id", new UsuarioController().get);
    app.put("/usuarios/:id", new UsuarioController().update);
    app.delete("/usuarios/:id", new UsuarioController().delete);

    app.listen(8007);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));
