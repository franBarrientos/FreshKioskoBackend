const { handleError } = require("../utils/handleError");
const { compare, encrypt } = require("../utils/handleHash");
const { UsuarioModel } = require("../models");

const registerCtrl = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const passwordHashed = await encrypt(password);
    const registerUser = await UsuarioModel.create({
      email,
      name,
      password: passwordHashed,
    });
    res.status(201)
    res.json({ registerUser });
  } catch (error) {
    handleError(res, "REGISTER_ERRPOR", 500);
  }
};

const loginCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UsuarioModel.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      handleError(res, "BAD_CREDENTIALS", 404);
    }
    const checkPassword = await compare(password, user.password);
    if (checkPassword) {
      res.send({
        data: user,
        state: true,
      });
    } else {
      handleError(res, "BAD_CREDENTIALS", 401);
    }
  } catch (error) {
    handleError(res, "LOGIN_ERROR", 500);
  }
};

module.exports = {
  registerCtrl,
  loginCtrl,
};
