module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('usuarios', "phone", {
        type: Sequelize.STRING,
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('usuarios');
    }
  };