const bcrypt = require("bcryptjs");
/**
 * Funcion que recibe un password en texto plano y lo retorna hasheado
 * @param {String} textoPlano
 * @returns Password Hash
 */
const encrypt = async (textoPlano) => {
  return await bcrypt.hash(textoPlano, 10);
};

/**
 * Recibe un passwordPlano y hashPasswordm luego compara y returna true si son iguales
 * @param {*} passwordPlano
 * @param {*} hashPassword
 * @returns Boolean True or False
 */
const compare = async (passwordPlano, hashPassword) => {
  return await bcrypt.compare(passwordPlano, hashPassword);
};

module.exports = { encrypt, compare };
