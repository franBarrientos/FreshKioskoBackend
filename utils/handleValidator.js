const { validationResult} = require("express-validator");
const { handleError } = require("./handleError");

const handleValidator = (req, res, next) => {
    try {
      validationResult(req).throw();
      next();
    } catch (error) {handleError(res, error, 403)}}

module.exports = handleValidator