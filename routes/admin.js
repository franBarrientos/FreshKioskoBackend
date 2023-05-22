const express = require("express");
const router = express.Router();
const { getPedidos, despacharPedido, getPedidosTotal, totalVentas} = require("../controllers/AdminController")
const {UpdateProducto, getAllProductos, createProducto} = require("../controllers/ProductoController");
const authMiddleware = require("../middlewares/sessionMiddleware")
const {validateProducto } = require("../validators/producto")

router.get("/pedidos", authMiddleware([0]), getPedidos)
router.patch("/pedido/despachado", authMiddleware([0]), despacharPedido)

router.get("/pedidos/total", authMiddleware([0]), getPedidosTotal)

router.get("/productos", authMiddleware([0]), getAllProductos)
router.post("/productos", [authMiddleware([0]), validateProducto], createProducto)
router.patch("/producto/update", authMiddleware([0]), UpdateProducto)
module.exports = router;