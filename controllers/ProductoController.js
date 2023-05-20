const path = require("path");
const { handleError } = require("../utils/handleError");
const { handleSuccess } = require("../utils/handleSuccess");
const { ProductoModel } = require("../models");
const fileUpload = require("express-fileupload");
const allowedFiles = ["jpg", "jpeg", "png", "PNG"]
const createProducto = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0)
      throw new Error("No files were uploaded.");
    if (!req.files.attachment) throw new Error("No file were uploaded.");

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.attachment;
    let extensionSampleFile = sampleFile.name.split(".").pop()
    let sampleFileName = sampleFile.name.split(".").shift()
    if (!allowedFiles.includes(extensionSampleFile))
    throw new Error("File not permitted.");

    let uploadPath = path.join(__dirname + "/../../reac-freshcoffe/public/img/" + sampleFile.name);
    // Use the mv() method to place the file somewhere on your server
    await sampleFile.mv(uploadPath);
    const data = {
      nombre:req.body.nombre,
      precio:req.body.precio,
      categoria_id:req.body.categoria_id,
      imagen:sampleFileName
    }
    const newProducto = await ProductoModel.create(data)
    handleSuccess(res, newProducto);
  } catch (error) {
    handleError(res, "CREATE_PRODUCTO_ERROR", 500, error);
  }
};

const getProductos = async (req, res) => {
  try {
    const data = await ProductoModel.findAll({
      where: {
        disponible: 1,
      },
    });
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, "GET_PRODUCTOS_ERROR", 500, error);
  }
};

getAllProductos = async (req, res) => {
  try {
    const data = await ProductoModel.findAllData();
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, "GET_ALL_PRODUCTOS_ERROR", 500);
  }
};

const UpdateProducto = async (req, res) => {
  const { id, precio, disponible } = req.body;
  try {
    const producto = await ProductoModel.findOne({
      where: {
        id,
      },
    });
    producto.precio = precio;
    producto.disponible = disponible;
    producto.save();
    handleSuccess(res, producto);
  } catch (error) {
    handleError(res, "UPDATE_PRODUCTO_ERROR", 500);
  }
};

module.exports = {
  getProductos,
  UpdateProducto,
  getAllProductos,
  createProducto,
};
