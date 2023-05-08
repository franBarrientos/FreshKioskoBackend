const express = require("express");
const {
  getusuario,
  getusuarios,
  createusuario,
  updateusuario,
  deleteusuario,
  validateUsuario,
} = require("../controllers/UsuarioController");
const router = express.Router();

router.get("/", getusuarios) 
router.post("/validate");

module.exports = router;
