const express = require("express");
const {
  createAeroporto,
  getAeroportoById,
  getAeroporto,
  putAeroporto,
  deleteAeroporto,
} = require("./Controller/usuario_controller");
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

app.post("/aeroportos", createAeroporto);
app.get("/aeroportos/:codigo", getAeroportoById);
// app.get("/aeroportos", new AeropotoC getAeroporto);
app.put("/aeroportos/:codigo", putAeroporto);
app.delete("/aeroportos/:codigo", deleteAeroporto);

app.listen(8000);
