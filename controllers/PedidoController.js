const { handleError } = require("../utils/handleError");
const { PedidoModel, PedidoProductoModel } = require("../models");

const storePedido = async (req, res) => {
  try {
    const { email, total, usuario_id, productos } = req.body;
    const newPedido = await PedidoModel.create({
      email: email,
      total: total,
      usuario_id: usuario_id,
    });
    const pedidoId = newPedido.id;
    let pedido_producto = [];
    productos.forEach(element => {
      pedido_producto.push({
        pedido_id:pedidoId,
        producto_id:element.id,
        cantidad:element.cantidad,
      })
    });
    await PedidoProductoModel.bulkCreate(pedido_producto)

    res.send({mensaje: "Pedido realizado correctamente, estara listo en unos minutos"});
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  storePedido,
};
