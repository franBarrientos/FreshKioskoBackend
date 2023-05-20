const express = require("express");
const router = express.Router();
const fs = require("fs");
const PATH_ROUTES = __dirname;
/**
 * This function receives a path and returns it without the extension eg: .js, .jsx ect
 * @param {*String} fileName 
 * @returns String
 */
const removeJs = (fileName) => {
  return fileName.split(".")[0];
};

/**
   This code uses the Node.js fs module to read the contents of the PATH_ROUTES directory, which is a constant that contains the path to the application routes directory. The readdirSync() function returns an array with the names of all the files in the directory.

    Then, use the array's filter() method to filter out filenames that aren't "index.js". For each file that passes the filter, use the removeJs() function to get its name without an extension, and use router.use() of Express.js to add a new route to the application. The path is the name of the file without an extension, and the path handler is loaded from the file using require().
 */
fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeJs(file);
  if (name != "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
