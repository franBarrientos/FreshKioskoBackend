const express = require("express");
const router = express.Router();
const {loginCtrl, registerCtrl, googleSignIn } = require("../controllers/AuthController")
const { validatorUsuario, validatorLoginUsuario, googleValidator} = require("../validators/auth")

/**
 *   Endpoint to register users
 * validatorUsuario is the middleware that validates that it has the structure of the user model
 * registerCtrl is its respective controller
 */
    router.post("/register", validatorUsuario, registerCtrl)

/**
 *  Endpoint to log users
 * validatorLoginUsuario is the middleware that validates that it has the structure of the user model
 * loginCtrl is its respective controller
 */
    router.post("/login", validatorLoginUsuario, loginCtrl)
/**
 *  Endpoint to log GoogleUser
 * validatorLoginUsuario is the middleware that validates that it has the structure of the user model
 * loginCtrl is its respective controller
 */
    router.post("/google", googleValidator, googleSignIn)


module.exports = router;
