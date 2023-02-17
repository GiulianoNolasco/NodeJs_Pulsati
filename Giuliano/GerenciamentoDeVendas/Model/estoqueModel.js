const { Model, DataTypes } = require("sequelize");
const BancoConfig = require("../banco").getConfigBanco;

class Estoque extends Model {}
Estoque.init(
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    estoqueCodProduto: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    quantidadeEmEstoque: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize: BancoConfig(),
    modelName: "a_estoque1_Giu",
    timestamps: false,
  }
);
exports.Estoque = Estoque;
