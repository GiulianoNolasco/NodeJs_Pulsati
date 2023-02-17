const { Model, DataTypes } = require("sequelize");
const BancoConfig = require("../banco").getConfigBanco;

class Livro extends Model {}
Livro.init(
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
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataNascimento: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    sequelize: BancoConfig(),
    modelName: "a_livro_Giu",
    timestamps: false,
  }
);
exports.Livro = Livro;
