'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Articles', ['authorId'], {
      type: 'foreign key',
      name: 'fk_authorId',
      references: { //Required field
        table: 'Authors',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.deleteConstraint('Articles', 'fk_authorId');
  }
};
