const { PedidoModel } = require("../models");
const { handleError } = require("../utils/handleError");
const { handleSuccess } = require("../utils/handleSuccess");

const getPedidos = async (req, res) => {
  try {
    console.log(req.user);
    if (req.user.role != 0) {
      handleError(
        res,
        "NOT_AUTHORIZATE",
        403,
        "Error en la Funcion getPedidos de admin"
      );
      return;
    }
    const pedidos = await PedidoModel.findAll({
      where: { estado: 0 },
      order: [["createdAt", "DESC"]],
    });
    handleSuccess(res, pedidos);
  } catch (error) {
    console.log(error);
    handleError(
      res,
      "GET_PEDIDOS_ERROR",
      500,
      "Error en la Funcion getPedidos de admin"
    );
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
    handleSuccess(res, pedido);
  } catch (error) {
    handleError(res, "DESPACHAR_PEDIDO_ERROR", 404);
  }
};

module.exports = { getPedidos, despacharPedido };
