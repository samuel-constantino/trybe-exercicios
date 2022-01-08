'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Employees',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        firstName: {
          allowNull: false,
          type: Sequelize.STRING,
          field: 'first_name',
        },
        lastName: {
          allowNull: false,
          type: Sequelize.STRING,
          field: 'last_name',
        },
      }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Employees');
  }
};
