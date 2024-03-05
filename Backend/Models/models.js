const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Accounts = sequelize.define("Accounts", {
  AccountID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  LastName: {
    type: DataTypes.STRING,
  },
  FirstName: {
    type: DataTypes.STRING,
  },
  SurName: {
    type: DataTypes.STRING,
  },
  LoginAccount: {
    type: DataTypes.STRING,
    unique: true,
  },
  PasswordAccount: { type: DataTypes.STRING },
});

const Help = sequelize.define("Help", {
  HelpID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Subject: {
    type: DataTypes.STRING,
  },
  TextHelp: { type: DataTypes.STRING },
});

module.exports = {
  Accounts,
  Help,
};
