const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");

const categoria = sequelize.define("categorias", {
    nombre: {
      type: DataTypes.STRING,
    },
    icono: {
        type: DataTypes.STRING
    }},{
      timestamps:true
    }
  );

module.exports = categoria