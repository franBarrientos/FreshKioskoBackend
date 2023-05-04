const { handleError } = require("../utils/handleError");
const { CategoriaModel } = require("../models");

const getCategorias = async (req, res) => {
    try {
      const data = await CategoriaModel.findAll();
      res.json(data);
    } catch (error) {
      res.status(403);
      res.send({error})
    }
  };



  module.exports = {
    getCategorias,

  };
  