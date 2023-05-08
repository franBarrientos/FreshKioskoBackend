const { handleError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJWT");
const { UsuarioModel } = require("../models")
const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleError(res, "NOT_TOKEN", 401, "Error de jwt");
      return;
    }
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);
    if (dataToken.role != 0) {
      handleError(res, "ERROR_ROLE_TOKEN", 401, "Error de jwt");
      return;
    }
    const user = await UsuarioModel.findOne({
      where: {
        id:dataToken.id
      }
    })
    req.user = user.dataValues
    next();
  } catch (error) {
    handleError(res, "NOT_SESSION", 401, error);
  }
};

module.exports = authMiddleware;
