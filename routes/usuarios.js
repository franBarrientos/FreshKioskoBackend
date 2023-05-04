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
const {
    validatorUsuario
} = require("../validators/Usuario");

router.get("/", getusuarios) * //* router.get("/:id", validatorGetUsuario, getusuario)
router.post("/validate", validatorUsuario, validateUsuario)

module.exports = router;
