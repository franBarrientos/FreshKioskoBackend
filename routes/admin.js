const express = require("express");
const router = express.Router();
const { getPedidos, despacharPedido} = require("../controllers/AdminController")
const {UpdateProducto, getAllProductos} = require("../controllers/ProductoController")

router.get("/pedidos", getPedidos)
router.patch("/pedido/despachado", despacharPedido)

router.patch("/producto/update", UpdateProducto)
router.get("/productos", getAllProductos)
module.exports = router;