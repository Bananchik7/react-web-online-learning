const { Sequelize } = require("sequelize");

module.exports = new Sequelize("OnlineLearning", "root", "root", {
  //  user: process.env.DB_USER,
  //  password: process.env.DB_PASSWORD,
  //  database: process.env.DB_NAME,
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialectOptions: {
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  },
});
