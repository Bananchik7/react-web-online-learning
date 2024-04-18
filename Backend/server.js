//import jwt from "jsonwebtoken";
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const http = require("http");
const mysql = require("mysql2");
const sequelize = require("./db");
const models = require("./Models/models");
const fileUpload = require("express-fileupload");
const router = require("./Routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "Static")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorHandler);

//
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("callUser", {
      signal: data.signalData,
      from: data.from,
      name: data.name,
    });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});
//

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    server.listen(PORT, () => console.log("Server OK"));
  } catch (e) {
    console.log(e);
  }
};

start();
