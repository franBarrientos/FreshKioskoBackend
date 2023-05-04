const express = require("express");
const router = express.Router();
const {loginCtrl, registerCtrl } = require("../controllers/AuthController")

router.post("/register",registerCtrl)
router.post("/login",loginCtrl)


module.exports = router;
