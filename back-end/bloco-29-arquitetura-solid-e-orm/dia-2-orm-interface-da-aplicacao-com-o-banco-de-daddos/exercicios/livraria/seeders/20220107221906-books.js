'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Books', [
      {
        title: 'Livro 1',
        author: 'Autor 1',
        page_quantity: 1,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Livro 2',
        author: 'Autor 2',
        page_quantity: 2,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Books', null, {})
  }
};
