const { check, validationResult } = require("express-validator");
const validatorUsuario = [
    check("email").exists().notEmpty(),
    check("password")
      .exists()
      .notEmpty(),
    (req, res, next) => {
      try {
        validationResult(req).throw();
        next();
      } catch (error) {
        res.status(403);
        res.send({ error: error });
      }
    },
  ];
  

module.exports = { validatorUsuario};
