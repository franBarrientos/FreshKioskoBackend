const { validationResult} = require("express-validator");
const { handleError } = require("./handleError");
const CategoriaModel = require("../models/Categoria")

const handleValidator = (req, res, next) => {
  console.log(req.body)
    try {
      validationResult(req).throw();
      next();
    } catch (error) {handleError(res, error, 403, error)}}


const categoriaValidaorId = async (id ="")=>{
  const existCategoria = await CategoriaModel.findByPk(id);
  if(!existCategoria) throw new Error("DOESN'T EXIST THIS CATEGORIE")
}
module.exports = {handleValidator, categoriaValidaorId}