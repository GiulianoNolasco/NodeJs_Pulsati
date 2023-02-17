const { Model, DataTypes } = require("sequelize");
const BancoConfig = require("../banco").getConfigBanco;

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
    sequelize: BancoConfig(),
    modelName: "aeroportos_giu_2ponto0",
    timestamps: false,
  }
);
exports.Aeroporto = Aeroporto;
