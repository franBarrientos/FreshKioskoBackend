const express = require("express");
const router = express.Router();
const {loginCtrl, registerCtrl } = require("../controllers/AuthController")
const { validatorUsuario, validatorLoginUsuario} = require("../validators/auth")
/**
 *  Endpoint para registrar usuarios
 *  validatorUsuario es el midleware que valida que tenga la estructura del modelo de usuario
 *  registerCtrl es su respectivo controlador
 */
    router.post("/register", validatorUsuario, registerCtrl)

/**
 *  Endpoint para loguear usuarios
 *  validatorLoginUsuario es el midleware que valida que tenga la estructura del modelo de usuario
 *  loginCtrl es su respectivo controlador
 */
    router.post("/login", validatorLoginUsuario, loginCtrl)


module.exports = router;
