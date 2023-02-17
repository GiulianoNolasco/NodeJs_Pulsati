const { Model, DataTypes } = require("sequelize");
const BancoConfig = require("../banco").getConfigBanco;

class Vendedor extends Model {}
Vendedor.init(
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CPF: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: BancoConfig(),
    modelName: "a_vendedor_Giu",
    timestamps: false,
  }
);
exports.Vendedor = Vendedor;
