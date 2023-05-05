const express = require("express");
const router = express.Router();
const { storePedido } = require("../controllers/PedidoController");

router.post("/", storePedido);

module.exports = router;
