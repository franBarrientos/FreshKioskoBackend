const { check } = require("express-validator");
const {handleValidator, categoriaValidaorId} = require("../utils/handleValidator");
const { handleError } = require("../utils/handleError");
const validateProducto = [
    check("nombre").exists().notEmpty().isLength({min:1, max:20}),
    check("precio").exists().notEmpty(),
    check("categoria_id").exists().notEmpty(),
    check("categoria_id").custom(categoriaValidaorId),
    (req, res, next)=>handleValidator(req, res, next)]

module.exports = { validateProducto}