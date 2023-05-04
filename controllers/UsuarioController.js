const { UsuarioModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleError } = require("../utils/handleError");

const getusuarios = async (req, res) => {
  try {
    const data = await UsuarioModel.findAll();
    res.json(data);
  } catch (error) {
    res.status(403);
    res.send({error})
  }
};

const getusuario = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await UsuarioModel.findByPk(req.id);
    res.json(user);
  } catch (error) {
    res.status(403);
    res.send({error: error})
  }
};
const createusuario = async (req, res) => {
  try {
    const user = matchedData(req);
    const data = await UsuarioModel.create(user);
    res.json(data);
  } catch (error) {
    res.status(403);
    res.send({error: error})
  }
};
const updateusuario = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await UsuarioModel.findByPk(req.id);
    user.set({
      name: req.name,
      personajeId : req.personajeId
    });
    await user.save();
  } catch (error) {
    res.status(403);
    res.send({error: error})
  }
};
const deleteusuario = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await UsuarioModel.findByPk(req.id);
    await user.destroy();
  } catch (error) {
    res.status(403);
    res.send({error: error})
  }
};
const validateUsuario = async (req, res) => {
  try {
    const {email, password} = matchedData(req)
    console.log(email)
  
    UsuarioModel.findOne({ where: { email, password } })
    .then(usuario => {
      if (usuario) {
        // Crear una sesión
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    })
  } catch (error) {
      console.log(error);
      res.json({ success: false });
    };
  }



module.exports = {
  getusuario,
  getusuarios,
  createusuario,
  updateusuario,
  deleteusuario,
  validateUsuario
};
