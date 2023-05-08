const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");
const usuario = require("../models/Usuario")
const pedido = sequelize.define('pedidos', {
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado : {
        type: DataTypes.BOOLEAN,
        defaultValue : 0
    }
  });

  pedido.findAllData = function(){
    pedido.belongsTo(usuario,
      {
        foreignKey: "usuario_id"
      })
      return pedido.findAll({include:usuario})
  }


  module.exports = pedido