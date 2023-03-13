const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "oracle",
  database: "xe",
  username: "system",
  password: "pulsati2023",
  host: "192.168.0.50",
  port: 1521, // porta padrao do oracle​
  dialectOptions: { connectTimeout: 30000 },
});

sequelize.sync();

exports.getConfigBanco = () => sequelize;
