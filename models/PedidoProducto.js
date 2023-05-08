const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");
const { PedidoModel, ProductoModel} = require("../models")

const pedidoproducto = sequelize.define(
  "pedido_productos",
  { pedido_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "pedidos",
      key: "id",
    },
  }, producto_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "productos",
      key: "id",
    },
  },
    cantidad: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);




module.exports = pedidoproducto;
