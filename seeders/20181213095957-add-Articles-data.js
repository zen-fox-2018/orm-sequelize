'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        title: "Using Middleware On Express JS",
        body:"This is How to Use Middleware, you need to .... ya that`s it",
        AuthorId: 1,
        TagId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Using Session On Express JS",
        body:"Before we use Session the one thing that you should know is about session it self, you need to .... ya that`s it",
        AuthorId: 2,
        TagId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
