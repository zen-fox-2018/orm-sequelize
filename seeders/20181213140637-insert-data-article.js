'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Articles',
      [
        {
          title: 'Using Middleware On Express JS	This is How to Use Middleware',
          body: 'you need to .... ya that`s it',
          AuthorId: 1,
          TagId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Using Session On Express JS	Before we use Session the one thing that you should know is about session it self',
          body: 'you need to .... ya that`s it',
          AuthorId: 2,
          TagId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
