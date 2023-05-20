const {
  PedidoModel,
  PedidoProductoModel,
  ProductoModel,
} = require("../models");
const { handleError } = require("../utils/handleError");
const { handleSuccess } = require("../utils/handleSuccess");
const { Op } = require("sequelize");
const { Sequelize } = require('sequelize');

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

    handleSuccess(res, pedidosConProductos);
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

const getPedidosTotal = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Obtener los pedidos del día actual
    const pedidosHoy = await PedidoModel.findAll({
      where: {
        createdAt: {
          [Op.gte]: today, // Filtrar por la fecha actual o posterior
        },
      },
    });

    // Calcular el total de ventas del día sumando el total de cada pedido
    const totalVentas = pedidosHoy.reduce((total, pedido) => {
      return total + pedido.total; // Suponiendo que cada pedido tiene una propiedad "total"
    }, 0);

    const productosMasVendidos = await PedidoProductoModel.findAll({
      attributes: ['producto_id', [Sequelize.fn('SUM', Sequelize.col('cantidad')), 'totalVendido']],
      group: ['producto_id'],
      order: Sequelize.literal('totalVendido DESC'),
      limit: 5 // Obtener los 5 productos más vendidos (ajusta según tus necesidades)
    });

    const idsProductos = productosMasVendidos.map((producto) => producto.producto_id);

    const productos = await ProductoModel.findAll({
      where: { id: idsProductos }
    });

    handleSuccess(res, {totalVentas, productos});
  } catch (error) {
    handleError(res, "TOTAL_PEDIDOS_ERROR", 404, error);
  }
};



module.exports = { getPedidos, despacharPedido, getPedidosTotal };
