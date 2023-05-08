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
   await queryInterface.bulkInsert("categorias", [
    {
      icono: "cafe",
      nombre: "Café",
      id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      icono: "hamburguesa",
      nombre: "Hamburguesas",
      id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      icono: "pizza",
      nombre: "Pizzas",
      id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      icono: "dona",
      nombre: "Donas",
      id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      icono: "pastel",
      nombre: "Pasteles",
      id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      icono: "galletas",
      nombre: "Galletas",
      id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categorias', [ {
        icono: "cafe",
        nombre: "Café",
        id:1
      },
      {
        icono: "hamburguesa",
        nombre: "Hamburguesas",
        id: 2
      },
      {
        icono: "pizza",
        nombre: "Pizzas",
        id: 3
      },
      {
        icono: "dona",
        nombre: "Donas",
        id: 4
      },
      {
        icono: "pastel",
        nombre: "Pasteles",
        id: 5
      },
      {
        icono: "galletas",
        nombre: "Galletas",
        id: 6
      }], {})
  }
};
