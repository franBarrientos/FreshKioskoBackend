/**
 *  * Funcion que me retorna un una respuesta de tipo success, con estado, y un body en el que va la data
 * @param {*Promise} res 
 * @param {*Number} status 
 * @param {*Object} data 
 */
const handleSuccess = (res, data, status = 200) => {
    res.status(status);
    res.json({
        error : "",
        body: data
    })}

module.exports = {handleSuccess}