const { handleError } = require("../utils/handleError");
const { handleSuccess } = require("../utils/handleSuccess");
const { compare, encrypt } = require("../utils/handleHash");
const { UsuarioModel } = require("../models");
const { tokenSign, verifyToken } = require("../utils/handleJWT");

const registerCtrl = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const passwordHashed = await encrypt(password);
    const registerUser = await UsuarioModel.create({
      email,
      name,
      password: passwordHashed,
    });
    const UserWithoutPassword = {
      ...registerUser.dataValues,
      password: undefined,
    }; //Usuario sin password para el front
    const tokenJWT = await tokenSign(UserWithoutPassword);
    handleSuccess(res, { data: UserWithoutPassword, token: tokenJWT }, 201);
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
      return;
    }

    const checkPassword = await compare(password, user.password);
    if (!checkPassword) {
      handleError(res, "BAD_CREDENTIALS", 401);
      return;
    }

    const UserWithoutPassword = { ...user.dataValues, password: undefined }; //Usuario sin password para el front
    handleSuccess(
      res,
      {
        data: UserWithoutPassword,
        state: true,
        token: await tokenSign(UserWithoutPassword)
      },
      200
    );
  } catch (error) {
    handleError(res, "LOGIN_ERROR", 500);
  }
};

module.exports = {
  registerCtrl,
  loginCtrl,
};
