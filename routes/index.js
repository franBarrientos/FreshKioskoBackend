const express = require("express");
const router = express.Router();
const fs = require("fs");
const PATH_ROUTES = __dirname;
/**
 * Esta funcion recibe un path y retorna este sin la extension ej: .js, .jsx ect
 * @param {*String} fileName 
 * @returns String
 */
const removeJs = (fileName) => {
  return fileName.split(".")[0];
};

/**
    Este código utiliza el módulo fs de Node.js para leer el contenido del directorio PATH_ROUTES, que es una constante que contiene la ruta al directorio de rutas de la aplicación. La función readdirSync() devuelve una matriz con los nombres   de    todos los archivos en el directorio.

    Luego, utiliza el método filter() de la matriz para filtrar los nombres de archivo que no son "index.js". Para cada archivo que pasa el filtro, utiliza la función removeJs() para obtener su nombre sin extensión y utiliza router.use() de Express.js para agregar una nueva ruta a la aplicación. La ruta es el nombre del archivo sin extensión, y el controlador de la ruta se carga desde el archivo utilizando require().
 */
fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeJs(file);
  if (name != "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
