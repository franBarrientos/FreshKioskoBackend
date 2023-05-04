require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const { sequelize, dbConnect } = require("./config/mysql.js");
const app = express();


sequelize
  .sync()
  .then(() => {
    console.log("La base de datos está sincronizada");
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });

app.use(cors());
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api",require("./routes"))

app.listen(port);
dbConnect();
