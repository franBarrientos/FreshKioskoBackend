const express = require("express");
const router = express.Router();
const fs = require("fs");
const PATH_ROUTES = __dirname;
const removeJs = fileName =>{
    return fileName.split(".")[0];
}
fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeJs(file);
    if(name != "index"){
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router;
