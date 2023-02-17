const { Model, DataTypes } = require("sequelize");
const BancoConfig = require("../banco").getConfigBanco;

class Venda extends Model {}
Venda.init(
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    vendaCodVendedor: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    vendaCodProduto: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    quantidadeVendida: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize: BancoConfig(),
    modelName: "a_venda_Giu",
    timestamps: false,
  }
);
exports.Venda = Venda;
