import jwt from "jsonwebtoken";

const express = require("express");
const mysql = require("mysql2");

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  port: "8889",
  user: "root",
  database: "OnlineLearning",
  password: "root",
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});

app.use(express.json());

app.post("/login", (req, res) => {});

//app.post("/create", urlencodedParser, function (req, res) {
//  if (!req.body) return res.sendStatus(400);
//  const subject = req.body.subject;
//  const textHelp = req.body.textHelp;
//  pool.query(
//    "INSERT INTO Help (Subject, TextHelp) VALUES (?,?)",
//    [subject, textHelp],
//    function (err) {
//      if (err) return console.log(err);
//      res.redirect("/");
//    }
//  );
//});

//connection.query("SELECT * FROM Students", function (err, results, fields) {
//  console.log(err);
//  console.log(results);
//  console.log(fields);
//});
//connection.end();
