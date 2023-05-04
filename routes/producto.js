const express = require("express");
const router = express.Router();
const { validatorUsuario } = require("../validators/Usuario");
const {getProductos } = require("../controllers/ProductoController")


router.get("/", getProductos)



module.exports = router;
