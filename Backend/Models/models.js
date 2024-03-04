const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Accounts = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: { type: DataTypes.STRING },
});

const Help = sequelize.define("help", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  subject: {
    type: DataTypes.STRING,
  },
  text: { type: DataTypes.STRING },
});
