const { handleError } = require("../utils/handleError");
const { handleSuccess } = require("../utils/handleSuccess")
const { PedidoModel, PedidoProductoModel, ProductoModel } = require("../models");

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


    const pedidos = await PedidoModel.findAll({
      where: { estado: 0 },
      order: [["createdAt", "DESC"]],
    });

    const pedidosConProductos = await Promise.all(
      pedidos.map(async (pedido) => {
        const productos = await PedidoProductoModel.findAll({
          where: { pedido_id: pedido.id },
        });
        const productoIds = productos.map((producto) => producto.producto_id);
        const productosEncontrados = await ProductoModel.findAll({
          where: { id: productoIds },
        });
        return { ...pedido.dataValues, productos: productosEncontrados };
      })
    );

    req.io.emit('nuevoPedido', pedidosConProductos);
    handleSuccess(res,{ mensaje: "Pedido realizado correctamente, estara listo en unos minutos"})
  } catch (error) {
    handleError(res, "STORE_PEDIDO_ERROR", 500, error);
  }
};

module.exports = {
  storePedido,
};
