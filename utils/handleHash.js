const bcrypt = require("bcryptjs")

const encrypt = async (textoPlano)=>{
    const hash = await bcrypt.hash(textoPlano, 10);
    return hash;
}

const compare = async (passwordPlano, hashPassword)=>{
    return await bcrypt.compare(passwordPlano, hashPassword);
}

module.exports = { encrypt, compare}