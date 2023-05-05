const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");
const producto = require("./Producto");
const pedido = require("./Pedido");

const pedidoproducto = sequelize.define(
  "pedido_productos",
  {
    pedido_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "pedidos",
        key: "id",
      },
    },
    producto_id: {
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

pedidoproducto.belongsTo(pedido, { foreignKey: "pedido_id" });
pedidoproducto.belongsTo(producto, { foreignKey: "producto_id" });

module.exports = pedidoproducto;
