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

app.post("/aeroportos", createAeroporto);
app.get("/aeroportos/:codigo", getAeroportoById);
app.get("/aeroportos", getAeroporto);
app.put("/aeroportos/:codigo", putAeroporto);
app.delete("/aeroportos/:codigo", deleteAeroporto);

app.listen(8000);
