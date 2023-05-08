const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * Funcion que recibe el objeto de user y firma un JWT
 * @param {*Object} user
 * @returns {*TokenJWT} sign
 */
const tokenSign = async (user) => {
  const sign = await jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sign;
};
/**
 * Fucnion que valida el token JWT
 * @param {*} tokenJWT 
 * @returns 
 */
const verifyToken = async (tokenJWT) => {
    try {
        return jwt.verify(tokenJWT, JWT_SECRET)
    } catch (error) {
        return null;
    }
};

module.exports = { tokenSign, verifyToken };
