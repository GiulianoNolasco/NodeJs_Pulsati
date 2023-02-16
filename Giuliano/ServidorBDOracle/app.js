const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "oracle",
  database: "xe",
  username: "system",
  password: "pulsati2023",
  host: "192.168.0.50",
  port: 1521, // porta padrao do oracle​
  dialectOptions: { connectTimeout: 30000 },
});

const { Model, DataTypes } = require("sequelize");
class Aeroporto extends Model {}
Aeroporto.init(
  {
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacidade: {
      type: DataTypes.NUMBER,
    },
  },
  {
    sequelize,
    modelName: "aeroportos_giu",
    timestamps: false,
  }
);
sequelize.sync();

const express = require("express");
const app = express();
app.use(express.json());

app.post("/aeroportos", async (req, res) => {
  const { nome } = req.body;
  const aeroporto = new Aeroporto();
  aeroporto.nome = nome;
  await aeroporto.save();
  res.json(aeroporto);
});

app.get("/aeroportos/:codigo", async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  res.json(aeroporto);
});

app.get("/aeroportos", async (req, res) => {
  Aeroporto.findAll().then((result) => res.json(result));
});

app.put("/aeroportos/:codigo", async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  const { nome } = req.body;
  aeroporto.nome = nome;
  await aeroporto.save();
  res.json(aeroporto);
});

app.delete("/aeroportos/:codigo", async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  await aeroporto.destroy();
  res.json({ data: "Aeroporto deletado com sucesso" });
});

bdAer;
app.listen(8000);
