const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");
const producto = require("./Producto")
const usuario = require("./Usuario")
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

  pedido.belongsTo(usuario, { foreignKey: "usuario_id" });

  module.exports = pedido