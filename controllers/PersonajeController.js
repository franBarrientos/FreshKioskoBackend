const { matchedData } = require("express-validator");
const { PersonajeModel } = require("../models");
const { handleError } = require("../utils/handleError");

const getPjs = async (req, res) => {
  try {
    const data = await PersonajeModel.findAll();
    res.json(data);
  } catch (error) {
    handleError(res, "ERROR_GET_PJS", 403);
  }
};
const getPj = async (req, res) => {
  try {
    req = matchedData(req);
    const data = await PersonajeModel.findByPk(req.id);
    res.json(data);
  } catch (error) {
    handleError(res, "ERROR_GET_PJ", 403);
  }
};
const createPJ = async (req, res) => {
  try {
    const pj = matchedData(req);
    const data = await PersonajeModel.create(pj);
    res.json(data);
  } catch (error) {
    handleError(res, "ERROR_CREATE_PJ", 403);
  }
};
const updatePJ = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await PersonajeModel.findByPk(req.id);
    user.set({
      name: req.name,
      imagenUrl: req.imagenUrl,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    handleError(res, "ERROR_UPDATE_PJ", 403);
  }
};
const deletePJ = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const user = await PersonajeModel.findByPk(id);
    user.destroy();
  } catch (error) {
    handleError(res, "ERROR_DELETE_PJ", 403);
  }
};

module.exports = {
  getPjs,
  getPj,
  createPJ,
  updatePJ,
  deletePJ,
};
