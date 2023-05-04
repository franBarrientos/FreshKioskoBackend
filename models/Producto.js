const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");
const categoria = require("./Categoria");
const producto = sequelize.define("productos", {
    nombre: {
      type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.DOUBLE
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categorias',
            key: 'id'
        }
    },
    disponible : {
        type: DataTypes.INTEGER
    },
  },
  {
    timestamps:true
  });

 
producto.belongsTo(categoria, { foreignKey: 'categoria_id' });

module.exports = producto