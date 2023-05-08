const express = require("express");
const router = express.Router();
const { getPedidos, despacharPedido} = require("../controllers/AdminController")
const {UpdateProducto, getAllProductos} = require("../controllers/ProductoController");
const authMiddleware = require("../middlewares/sessionMiddleware")

router.get("/pedidos", authMiddleware, getPedidos)
router.patch("/pedido/despachado", authMiddleware, despacharPedido)

router.patch("/producto/update", authMiddleware, UpdateProducto)
router.get("/productos", authMiddleware, getAllProductos)
module.exports = router;