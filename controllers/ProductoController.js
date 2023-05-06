const { handleError } = require("../utils/handleError");
const { ProductoModel } = require("../models");

const getProductos = async (req, res) => {
  try {
    const data = await ProductoModel.findAll({
      where: {
        disponible: 1,
      },
    });
    res.json(data);
  } catch (error) {
    handleError(res, "GET_PRODUCTOS_ERROR", 500);
  }
};

getAllProductos = async (req, res) => {
  try {
    const data = await ProductoModel.findAll();
    res.json(data);
  } catch (error) {
    handleError(res, "GET_ALL_PRODUCTOS_ERROR", 500);
  }
};

const UpdateProducto = async (req, res) => {
  const { id, precio, disponible } = req.body;
  try {
    const producto = await ProductoModel.findOne({
      where: {
        id,
      },
    });
    producto.precio = precio;
    producto.disponible = disponible;
    producto.save();
    res.send({ producto });
  } catch (error) {
    handleError(res, "UPDATE_PRODUCTO_ERROR", 500);
  }
};

module.exports = {
  getProductos,
  UpdateProducto,
  getAllProductos,
};
