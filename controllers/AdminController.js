const { PedidoModel } = require("../models");
const { handleError } = require("../utils/handleError");

const getPedidos = async (req, res) => {
  try {
    const pedidos = await PedidoModel.findAll({
      where: { estado: 0 },
      order: [["createdAt", "DESC"]],
    });
    res.status(200);
    res.send({ data: pedidos });
  } catch (error) {
    handleError(res, "GET_PEDIDOS_ERROR", 500, "Error en la Funcion getPedidos de admin");
  }
};

const despacharPedido = async (req, res) => {
  try {
    const { pedidoId } = req.body;
    const pedido = await PedidoModel.findOne({
      where: {
        id: pedidoId,
      },
    });
    pedido.estado = 1; // aquí se cambia el estado a 1
    await pedido.save(); 
    res.status(200);
    res.send({ pedido });
  } catch (error) {
    handleError(res, "DESPACHAR_PEDIDO_ERROR", 404);
  }
};

module.exports = { getPedidos, despacharPedido };
