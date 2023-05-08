'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("productos", [
      {
        nombre: "Café Caramel con Chocolate",
        precio: 59.9,
        imagen: "cafe_01",
        categoria_id: 1,
        id: 1,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Frio con Chocolate Grande",
        precio: 49.9,
        imagen: "cafe_02",
        categoria_id: 1,
        id: 2,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Latte Frio con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_03",
        categoria_id: 1,
        id: 3,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Latte Frio con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_04",
        categoria_id: 1,
        id: 4,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Malteada Fria con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_05",
        categoria_id: 1,
        id: 5,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Mocha Caliente Chico",
        precio: 39.9,
        imagen: "cafe_06",
        categoria_id: 1,
        id: 6,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Mocha Caliente Grande con Chocolate",
        precio: 59.9,
        imagen: "cafe_07",
        categoria_id: 1,
        id: 7,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Caliente Capuchino Grande",
        precio: 59.9,
        imagen: "cafe_08",
        categoria_id: 1,
        id: 8,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Mocha Caliente Mediano",
        precio: 49.9,
        imagen: "cafe_09",
        categoria_id: 1,
        id: 9,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Mocha Frio con Caramelo Mediano",
        precio: 49.9,
        imagen: "cafe_10",
        categoria_id: 1,
        id: 10,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Mocha Frio con Chocolate Mediano",
        precio: 49.9,
        imagen: "cafe_11",
        categoria_id: 1,
        id: 11,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Espresso",
        precio: 29.9,
        imagen: "cafe_12",
        categoria_id: 1,
        id: 12,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Capuchino Grande con Caramelo",
        precio: 59.9,
        imagen: "cafe_13",
        categoria_id: 1,
        id: 13,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Caramelo Grande",
        precio: 59.9,
        imagen: "cafe_14",
        categoria_id: 1,
        id: 14,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete de 3 donas de Chocolate",
        precio: 39.9,
        imagen: "donas_01",
        categoria_id: 4,
        id: 15,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete de 3 donas Glaseadas",
        precio: 39.9,
        imagen: "donas_02",
        categoria_id: 4,
        id: 16,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Dona de Fresa ",
        precio: 19.9,
        imagen: "donas_03",
        categoria_id: 4,
        id: 17,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Dona con Galleta de Chocolate ",
        precio: 19.9,
        imagen: "donas_04",
        categoria_id: 4,
        id: 18,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Dona glass con Chispas Sabor Fresa ",
        precio: 19.9,
        imagen: "donas_05",
        categoria_id: 4,
        id: 19,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Dona glass con Chocolate ",
        precio: 19.9,
        imagen: "donas_06",
        categoria_id: 4,
        id: 20,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Dona de Chocolate con MÁS Chocolate ",
        precio: 19.9,
        imagen: "donas_07",
        categoria_id: 4,
        id: 21,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete de 3 donas de Chocolate ",
        precio: 39.9,
        imagen: "donas_08",
        categoria_id: 4,
        id: 22,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete de 3 donas con Vainilla y Chocolate ",
        precio: 39.9,
        imagen: "donas_09",
        categoria_id: 4,
        id: 23,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete de 6 Donas",
        precio: 69.9,
        imagen: "donas_10",
        categoria_id: 4,
        id: 24,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete de 3 Variadas",
        precio: 39.9,
        imagen: "donas_11",
        categoria_id: 4,
        id: 25,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Dona Natural con Chocolate",
        precio: 19.9,
        imagen: "donas_12",
        categoria_id: 4,
        id: 26,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete de 3 Donas de Chocolate con Chispas",
        precio: 39.9,
        imagen: "donas_13",
        categoria_id: 4,
        id: 27,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Dona Chocolate y Coco",
        precio: 19.9,
        imagen: "donas_14",
        categoria_id: 4,
        id: 28,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete Galletas de Chocolate",
        precio: 29.9,
        imagen: "galletas_01",
        categoria_id: 6,
        id: 29,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete Galletas de Chocolate y Avena",
        precio: 39.9,
        imagen: "galletas_02",
        categoria_id: 6,
        id: 30,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete de Muffins de Vainilla",
        precio: 39.9,
        imagen: "galletas_03",
        categoria_id: 6,
        id: 31,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete de 4 Galletas de Avena",
        precio: 24.9,
        imagen: "galletas_04",
        categoria_id: 6,
        id: 32,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Galletas de Mantequilla Variadas",
        precio: 39.9,
        imagen: "galletas_05",
        categoria_id: 6,
        id: 33,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Galletas de sabores frutales",
        precio: 39.9,
        imagen: "galletas_06",
        categoria_id: 6,
        id: 34,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Hamburguesa Sencilla",
        precio: 59.9,
        imagen: "hamburguesas_01",
        categoria_id: 2,
        id: 35,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Hamburguesa de Pollo",
        precio: 59.9,
        imagen: "hamburguesas_02",
        categoria_id: 2,
        id: 36,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Hamburguesa de Pollo y Chili",
        precio: 59.9,
        imagen: "hamburguesas_03",
        categoria_id: 2,
        id: 37,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Hamburguesa Queso y  Pepinos",
        precio: 59.9,
        imagen: "hamburguesas_04",
        categoria_id: 2,
        id: 38,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Hamburguesa Cuarto de Libra",
        precio: 59.9,
        imagen: "hamburguesas_05",
        categoria_id: 2,
        id: 39,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Hamburguesa Doble Queso",
        precio: 69.9,
        imagen: "hamburguesas_06",
        categoria_id: 2,
        id: 40,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Hot Dog Especial",
        precio: 49.9,
        imagen: "hamburguesas_07",
        categoria_id: 2,
        id: 41,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Paquete 2 Hot Dogs",
        precio: 69.9,
        imagen: "hamburguesas_08",
        categoria_id: 2,
        id: 42,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "4 Rebanadas de Pay de Queso",
        precio: 69.9,
        imagen: "pastel_01",
        categoria_id: 5,
        id: 43,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Waffle Especial",
        precio: 49.9,
        imagen: "pastel_02",
        categoria_id: 5,
        id: 44,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Croissants De la casa",
        precio: 39.9,
        imagen: "pastel_03",
        categoria_id: 5,
        id: 45,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pay de Queso",
        precio: 19.9,
        imagen: "pastel_04",
        categoria_id: 5,
        id: 46,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pastel de Chocolate",
        precio: 29.9,
        imagen: "pastel_05",
        categoria_id: 5,
        id: 47,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Rebanada Pastel de Chocolate",
        precio: 29.9,
        imagen: "pastel_06",
        categoria_id: 5,
        id: 48,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pizza Spicy con Doble Queso",
        precio: 69.9,
        imagen: "pizzas_01",
        categoria_id: 3,
        id: 49,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pizza Jamón y Queso",
        precio: 69.9,
        imagen: "pizzas_02",
        categoria_id: 3,
        id: 50,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pizza Doble Queso",
        precio: 69.9,
        imagen: "pizzas_03",
        categoria_id: 3,
        id: 51,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pizza Especial de la Casa",
        precio: 69.9,
        imagen: "pizzas_04",
        categoria_id: 3,
        id: 52,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pizza Chorizo",
        precio: 69.9,
        imagen: "pizzas_05",
        categoria_id: 3,
        id: 53,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pizza Hawaiana",
        precio: 69.9,
        imagen: "pizzas_06",
        categoria_id: 3,
        id: 54,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pizza Tocino",
        precio: 69.9,
        imagen: "pizzas_07",
        categoria_id: 3,
        id: 55,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pizza Vegetales y Queso",
        precio: 69.9,
        imagen: "pizzas_08",
        categoria_id: 3,
        id: 56,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pizza Pepperoni y Queso",
        precio: 69.9,
        imagen: "pizzas_09",
        categoria_id: 3,
        id: 57,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pizza Aceitunas y Queso",
        precio: 69.9,
        imagen: "pizzas_10",
        categoria_id: 3,
        id: 58,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Pizza Queso, Jamón y Champiñones",
        precio: 69.9,
        imagen: "pizzas_11",
        categoria_id: 3,
        id: 59,
        createdAt: new Date(),
      updatedAt: new Date(),
      }
     ],{})},
    
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("productos", [
      {
        nombre: "Café Caramel con Chocolate",
        precio: 59.9,
        imagen: "cafe_01",
        categoria_id: 1,
        id: 1,
           createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        nombre: "Café Frio con Chocolate Grande",
        precio: 49.9,
        imagen: "cafe_02",
        categoria_id: 1,
        id: 2,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Latte Frio con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_03",
        categoria_id: 1,
        id: 3,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Latte Frio con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_04",
        categoria_id: 1,
        id: 4,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Malteada Fria con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_05",
        categoria_id: 1,
        id: 5,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Mocha Caliente Chico",
        precio: 39.9,
        imagen: "cafe_06",
        categoria_id: 1,
        id: 6,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Mocha Caliente Grande con Chocolate",
        precio: 59.9,
        imagen: "cafe_07",
        categoria_id: 1,
        id: 7,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Caliente Capuchino Grande",
        precio: 59.9,
        imagen: "cafe_08",
        categoria_id: 1,
        id: 8,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Mocha Caliente Mediano",
        precio: 49.9,
        imagen: "cafe_09",
        categoria_id: 1,
        id: 9,
           createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nombre: "Café Mocha Frio con Caramelo Mediano",
        precio: 49.9,
        imagen: "cafe_10",
        categoria_id: 1,
        id: 10
      },
      {
        nombre: "Café Mocha Frio con Chocolate Mediano",
        precio: 49.9,
        imagen: "cafe_11",
        categoria_id: 1,
        id: 11
      },
      {
        nombre: "Café Espresso",
        precio: 29.9,
        imagen: "cafe_12",
        categoria_id: 1,
        id: 12
      },
      {
        nombre: "Café Capuchino Grande con Caramelo",
        precio: 59.9,
        imagen: "cafe_13",
        categoria_id: 1,
        id: 13
      },
      {
        nombre: "Café Caramelo Grande",
        precio: 59.9,
        imagen: "cafe_14",
        categoria_id: 1,
        id: 14
      },
      {
        nombre: "Paquete de 3 donas de Chocolate",
        precio: 39.9,
        imagen: "donas_01",
        categoria_id: 4,
        id: 15
      },
      {
        nombre: "Paquete de 3 donas Glaseadas",
        precio: 39.9,
        imagen: "donas_02",
        categoria_id: 4,
        id: 16
      },
      {
        nombre: "Dona de Fresa ",
        precio: 19.9,
        imagen: "donas_03",
        categoria_id: 4,
        id: 17
      },
      {
        nombre: "Dona con Galleta de Chocolate ",
        precio: 19.9,
        imagen: "donas_04",
        categoria_id: 4,
        id: 18
      },
      {
        nombre: "Dona glass con Chispas Sabor Fresa ",
        precio: 19.9,
        imagen: "donas_05",
        categoria_id: 4,
        id: 19
      },
      {
        nombre: "Dona glass con Chocolate ",
        precio: 19.9,
        imagen: "donas_06",
        categoria_id: 4,
        id: 20
      },
      {
        nombre: "Dona de Chocolate con MÁS Chocolate ",
        precio: 19.9,
        imagen: "donas_07",
        categoria_id: 4,
        id: 21
      },
      {
        nombre: "Paquete de 3 donas de Chocolate ",
        precio: 39.9,
        imagen: "donas_08",
        categoria_id: 4,
        id: 22
      },
      {
        nombre: "Paquete de 3 donas con Vainilla y Chocolate ",
        precio: 39.9,
        imagen: "donas_09",
        categoria_id: 4,
        id: 23
      },
      {
        nombre: "Paquete de 6 Donas",
        precio: 69.9,
        imagen: "donas_10",
        categoria_id: 4,
        id: 24
      },
      {
        nombre: "Paquete de 3 Variadas",
        precio: 39.9,
        imagen: "donas_11",
        categoria_id: 4,
        id: 25
      },
      {
        nombre: "Dona Natural con Chocolate",
        precio: 19.9,
        imagen: "donas_12",
        categoria_id: 4,
        id: 26
      },
      {
        nombre: "Paquete de 3 Donas de Chocolate con Chispas",
        precio: 39.9,
        imagen: "donas_13",
        categoria_id: 4,
        id: 27
      },
      {
        nombre: "Dona Chocolate y Coco",
        precio: 19.9,
        imagen: "donas_14",
        categoria_id: 4,
        id: 28
      },
      {
        nombre: "Paquete Galletas de Chocolate",
        precio: 29.9,
        imagen: "galletas_01",
        categoria_id: 6,
        id: 29
      },
      {
        nombre: "Paquete Galletas de Chocolate y Avena",
        precio: 39.9,
        imagen: "galletas_02",
        categoria_id: 6,
        id: 30
      },
      {
        nombre: "Paquete de Muffins de Vainilla",
        precio: 39.9,
        imagen: "galletas_03",
        categoria_id: 6,
        id: 31
      },
      {
        nombre: "Paquete de 4 Galletas de Avena",
        precio: 24.9,
        imagen: "galletas_04",
        categoria_id: 6,
        id: 32
      },
      {
        nombre: "Galletas de Mantequilla Variadas",
        precio: 39.9,
        imagen: "galletas_05",
        categoria_id: 6,
        id: 33
      },
      {
        nombre: "Galletas de sabores frutales",
        precio: 39.9,
        imagen: "galletas_06",
        categoria_id: 6,
        id: 34
      },
      {
        nombre: "Hamburguesa Sencilla",
        precio: 59.9,
        imagen: "hamburguesas_01",
        categoria_id: 2,
        id: 35
      },
      {
        nombre: "Hamburguesa de Pollo",
        precio: 59.9,
        imagen: "hamburguesas_02",
        categoria_id: 2,
        id: 36
      },
      {
        nombre: "Hamburguesa de Pollo y Chili",
        precio: 59.9,
        imagen: "hamburguesas_03",
        categoria_id: 2,
        id: 37
      },
      {
        nombre: "Hamburguesa Queso y  Pepinos",
        precio: 59.9,
        imagen: "hamburguesas_04",
        categoria_id: 2,
        id: 38
      },
      {
        nombre: "Hamburguesa Cuarto de Libra",
        precio: 59.9,
        imagen: "hamburguesas_05",
        categoria_id: 2,
        id: 39
      },
      {
        nombre: "Hamburguesa Doble Queso",
        precio: 69.9,
        imagen: "hamburguesas_06",
        categoria_id: 2,
        id: 40
      },
      {
        nombre: "Hot Dog Especial",
        precio: 49.9,
        imagen: "hamburguesas_07",
        categoria_id: 2,
        id: 41
      },
      {
        nombre: "Paquete 2 Hot Dogs",
        precio: 69.9,
        imagen: "hamburguesas_08",
        categoria_id: 2,
        id: 42
      },
      {
        nombre: "4 Rebanadas de Pay de Queso",
        precio: 69.9,
        imagen: "pastel_01",
        categoria_id: 5,
        id: 43
      },
      {
        nombre: "Waffle Especial",
        precio: 49.9,
        imagen: "pastel_02",
        categoria_id: 5,
        id: 44
      },
      {
        nombre: "Croissants De la casa",
        precio: 39.9,
        imagen: "pastel_03",
        categoria_id: 5,
        id: 45
      },
      {
        nombre: "Pay de Queso",
        precio: 19.9,
        imagen: "pastel_04",
        categoria_id: 5,
        id: 46
      },
      {
        nombre: "Pastel de Chocolate",
        precio: 29.9,
        imagen: "pastel_05",
        categoria_id: 5,
        id: 47
      },
      {
        nombre: "Rebanada Pastel de Chocolate",
        precio: 29.9,
        imagen: "pastel_06",
        categoria_id: 5,
        id: 48
      },
      {
        nombre: "Pizza Spicy con Doble Queso",
        precio: 69.9,
        imagen: "pizzas_01",
        categoria_id: 3,
        id: 49
      },
      {
        nombre: "Pizza Jamón y Queso",
        precio: 69.9,
        imagen: "pizzas_02",
        categoria_id: 3,
        id: 50
      },
      {
        nombre: "Pizza Doble Queso",
        precio: 69.9,
        imagen: "pizzas_03",
        categoria_id: 3,
        id: 51
      },
      {
        nombre: "Pizza Especial de la Casa",
        precio: 69.9,
        imagen: "pizzas_04",
        categoria_id: 3,
        id: 52
      },
      {
        nombre: "Pizza Chorizo",
        precio: 69.9,
        imagen: "pizzas_05",
        categoria_id: 3,
        id: 53
      },
      {
        nombre: "Pizza Hawaiana",
        precio: 69.9,
        imagen: "pizzas_06",
        categoria_id: 3,
        id: 54
      },
      {
        nombre: "Pizza Tocino",
        precio: 69.9,
        imagen: "pizzas_07",
        categoria_id: 3,
        id: 55
      },
      {
        nombre: "Pizza Vegetales y Queso",
        precio: 69.9,
        imagen: "pizzas_08",
        categoria_id: 3,
        id: 56
      },
      {
        nombre: "Pizza Pepperoni y Queso",
        precio: 69.9,
        imagen: "pizzas_09",
        categoria_id: 3,
        id: 57
      },
      {
        nombre: "Pizza Aceitunas y Queso",
        precio: 69.9,
        imagen: "pizzas_10",
        categoria_id: 3,
        id: 58
      },
      {
        nombre: "Pizza Queso, Jamón y Champiñones",
        precio: 69.9,
        imagen: "pizzas_11",
        categoria_id: 3,
        id: 59
      }
     ],{})}
    }
  
