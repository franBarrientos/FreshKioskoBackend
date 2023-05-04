const express = require("express");
const router = express.Router();
const { validatorUsuario } = require("../validators/Usuario");
const {getCategorias} = require("../controllers/CategoriaController")

router.get("/", getCategorias)



module.exports = router;
