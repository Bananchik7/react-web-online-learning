//import jwt from "jsonwebtoken";
require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const sequelize = require("./db");
const models = require("./Models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./Routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("Server OK"));
  } catch (e) {
    console.log(e);
  }
};

start();
