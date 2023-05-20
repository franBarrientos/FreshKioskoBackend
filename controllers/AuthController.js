const { handleError } = require("../utils/handleError");
const { handleSuccess } = require("../utils/handleSuccess");
const { compare, encrypt } = require("../utils/handleHash");
const { UsuarioModel } = require("../models");
const { tokenSign, verifyToken } = require("../utils/handleJWT");
const { googleVerify } = require("../utils/handleGoogle");
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
        user: UserWithoutPassword,
        state: true,
        token: await tokenSign(UserWithoutPassword),
      },
      200
    );
  } catch (error) {
    handleError(res, "LOGIN_ERROR", 500);
  }
};

const googleSignIn = async (req, res) => {
  try {
    const { id_token } = req.body;
    const { name, img, email } = await googleVerify(id_token);
    const data = {
      name,
      email,
      password: "123",
    };
    const user = await UsuarioModel.findOne({ where: { email } });
    if (user) {
      await user.update(data);
    }

    if (!user) {
      const userNew = await UsuarioModel.create(data);
      const token = await tokenSign(userNew);
      handleSuccess(res, { user: userNew, token, state: true });
    } else {
      const token = await tokenSign(user);
      handleSuccess(res, { user, token, state: true });
    }
  } catch (error) {
    handleError(res, "ERROR_GOOGLE", 500, error);
  }
};

module.exports = {
  registerCtrl,
  loginCtrl,
  googleSignIn
};
