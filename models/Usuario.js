const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");
const usuario = sequelize.define("usuarios", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
  },
  {
    timestamps:true
  });

module.exports = usuario