const express = require("express");
const router = express.Router();
const { storePedido } = require("../controllers/PedidoController");
const authMiddleware = require("../middlewares/sessionMiddleware")
    //1_Client Role
    //2_User Role 
router.post("/", authMiddleware([1, 0]), storePedido);

module.exports = router;
