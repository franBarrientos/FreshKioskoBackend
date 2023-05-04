const { handleError } = require("../utils/handleError");
const {compare, encrypt} = require("../utils/handleHash");
const {UsuarioModel } = require("../models")
const registerCtrl = async (req, res) => {
    try {
      const {email, password, name} = req.body
      const passwordHashed = await encrypt(password)
      const registerUser = await UsuarioModel.create({
        email,
        name,
        password: passwordHashed,
      })
      res.send({data:registerUser})
    } catch (error) {
      res.status(403);
      res.send({error})
    }
  };


const loginCtrl = async (req, res) => {
    try {
      const {email, password} = req.body
      const user = await UsuarioModel.findOne({
        where: {
          email
        }
      })
      if(!user){
        res.status(404)
        res.send({error:"User no found"})
      }
      const checkPassword = await compare(password, user.password)
      if(checkPassword){
        res.send({
          data: user,
          state: true
        })
      }else{
        res.send({
          error : "invalid password"
        })
      }
      
    } catch (error) {
      res.status(403);
      res.send({error})
    }
  };



  module.exports = {
    registerCtrl,
    loginCtrl
  };