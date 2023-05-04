const { handleError } = require("../utils/handleError");
const { ProductoModel } = require("../models");

const getProductos = async (req, res) => {
    try {
      const data = await ProductoModel.findAll({
        where: {
          disponible: 1
        }
      });
      res.json(data);
    } catch (error) {
      res.status(403);
      res.send({error})
    }
  };



  module.exports = {
    getProductos,

  };
  