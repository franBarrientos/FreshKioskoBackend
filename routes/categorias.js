const express = require("express");
const router = express.Router();
const { getCategorias } = require("../controllers/CategoriaController");

router.get("/", getCategorias);

module.exports = router;
