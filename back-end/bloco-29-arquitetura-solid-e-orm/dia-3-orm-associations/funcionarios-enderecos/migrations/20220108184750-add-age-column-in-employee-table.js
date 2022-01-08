'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Employees',
      'age',
      {
        type: Sequelize.INTEGER,
      }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.removeColumn(
      'Employees',
      'age'
    );
  }
};
