const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");
const usuario = sequelize.define(
  "usuarios",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    password: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
  }
);

module.exports = usuario;
