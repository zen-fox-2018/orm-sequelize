'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Articles', ['tagId'], {
      type: 'foreign key',
      name: 'fk_tagId',
      references: { //Required field
        table: 'Tags',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.deleteConstraint('Articles', 'fk_tagId');
  }
};
