const { Model, DataTypes } = require("sequelize");
const BancoConfig = require("../banco").getConfigBanco;

class Sessao extends Model {}
Sessao.init(
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    dataSessao: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    horarioSessao: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },

    nomeFilme: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    valorIngresso: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    ingressosVendidos: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    codigoSalaCinema: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize: BancoConfig(),
    modelName: "b_sessao_Giu",
    timestamps: false,
  }
);

exports.Sessao = Sessao;
