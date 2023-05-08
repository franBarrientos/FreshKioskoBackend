const { handleError } = require("../utils/handleError");
const { handleSuccess } = require("../utils/handleSuccess")
const { CategoriaModel } = require("../models");

const getCategorias = async (req, res) => {
  try {
    const data = await CategoriaModel.findAll();
    handleSuccess(res, data)
  } catch (error) {
    handleError(res, "GET_CATEGORIAS_ERROR", 500);
  }
};

module.exports = {
  getCategorias,
};
