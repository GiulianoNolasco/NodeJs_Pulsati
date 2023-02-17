const { Model, DataTypes } = require("sequelize");
const BancoConfig = require("../banco").getConfigBanco;

class Editora extends Model {}
Editora.init(
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
    CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: BancoConfig(),
    modelName: "a_editora_Giu",
    timestamps: false,
  }
);
exports.Editora = Editora;
