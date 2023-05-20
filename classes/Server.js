const express = require("express");
const cors = require("cors");
const { sequelize, dbConnect } = require("../config/mysql");
const fileUpload = require("express-fileupload");

class Server {
  constructor() {
    this.PORT = process.env.PORT;
    this.app = express();
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await dbConnect();
    await sequelize.sync();
  }

  middlewares() {
    this.app
      .use(cors())
      .use(express.json())
      .use(
        fileUpload({
          useTempFiles: true,
          tempFileDir: "/tmp/",
        })
      );
  }

  routes() {
    this.app.use("/api", require("./../routes"));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server running on port ${this.PORT}`);
    });
  }
}

module.exports = Server;
