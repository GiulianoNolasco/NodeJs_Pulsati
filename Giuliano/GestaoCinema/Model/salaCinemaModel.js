const { Model, DataTypes } = require("sequelize");
const BancoConfig = require("../banco").getConfigBanco;

class SalaCinema extends Model {}
SalaCinema.init(
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeSala: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capacidadeMaxima: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize: BancoConfig(),
    modelName: "b_sala_cinema_Giu",
    timestamps: false,
  }
);

exports.SalaCinema = SalaCinema;