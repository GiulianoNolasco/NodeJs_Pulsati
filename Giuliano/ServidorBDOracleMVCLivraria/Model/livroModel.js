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
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroEdicao: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    anoLancamento: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    codigoEditor: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    codigoAutor: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize: BancoConfig(),
    modelName: "a_livro_Giu",
    timestamps: false,
  }
);
exports.Livro = Livro;
