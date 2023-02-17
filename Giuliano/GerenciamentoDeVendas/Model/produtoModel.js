const { Model, DataTypes } = require("sequelize");
const BancoConfig = require("../banco").getConfigBanco;

class Produto extends Model {}
Produto.init(
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
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize: BancoConfig(),
    modelName: "a_produto_Giu",
    timestamps: false,
  }
);
exports.Produto = Produto;
