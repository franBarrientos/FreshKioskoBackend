const { check } = require("express-validator");
const handleValidator = require("../utils/handleValidator")
const validatorUsuario = [
    check("name").exists().notEmpty().isLength({min:2, max:99}),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min:2, max:20}),
    (req, res, next) => handleValidator(req, res, next)];
  
const validatorLoginUsuario = [
    check("email").exists().notEmpty(),
    check("password").exists().notEmpty(),
    (req, res, next) => handleValidator(req, res, next)]

module.exports = { validatorUsuario, validatorLoginUsuario};
