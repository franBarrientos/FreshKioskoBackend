const { handleError } = require("../utils/handleError");
const { handleSuccess } = require("../utils/handleSuccess")
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
    productos.forEach((element) => {
      pedido_producto.push({
        pedido_id: pedidoId,
        producto_id: element.id,
        cantidad: element.cantidad,
      });
    });
    await PedidoProductoModel.bulkCreate(pedido_producto);

    handleSuccess(res,{ mensaje: "Pedido realizado correctamente, estara listo en unos minutos"})
  } catch (error) {
    handleError(res, "STORE_PEDIDO_ERROR", 500);
  }
};

module.exports = {
  storePedido,
};
