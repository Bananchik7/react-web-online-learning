//import jwt from "jsonwebtoken";
const express = require("express");
const mysql = require("mysql2");
const sequelize = require("./db");
const PORT = process.env.PORT;

const app = express();

const start = async () => {
  try {
    //await sequelize.authenticate();
    //await sequelize.sync();
    app.listen(PORT, () => console.log("Server OK"));
  } catch (e) {
    console.log(e);
  }
};

app.use(express.json());

start();
