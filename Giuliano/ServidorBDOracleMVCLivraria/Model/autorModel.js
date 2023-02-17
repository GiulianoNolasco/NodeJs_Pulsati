const { Model, DataTypes } = require("sequelize");
const BancoConfig = require("../banco").getConfigBanco;

class Autor extends Model {}
Autor.init(
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
    modelName: "a_autor_Giu",
    timestamps: false,
  }
);
exports.Autor = Autor;
