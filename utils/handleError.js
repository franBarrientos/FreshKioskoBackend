/**
 * Funcion que me retorna un una respuesta de tipo error, con estado, y mensaje de error
 * @param {*res} res 
 * @param {*string} message 
 * @param {*number} status 
 * @param {*String} details 
 */
const handleError = (res, message = "", status = 403 , details = "") => {
    console.log(`[Error] : ${details}` )
    res.status(status);
    res.send({error : message})
}

module.exports = { handleError }