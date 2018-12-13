'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', [
      {
       FirstName: "erwin",
       LastName: "ramadhan",
       religion: "islam",
       gender: "male",
       age: 20,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       FirstName: "cu chu",
       LastName: "lain",
       religion: "islam",
       gender: "male",
       age: 22,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       FirstName: "ryougi",
       LastName: "shiki",
       religion: "budha",
       gender: "female",
       age: 19,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       FirstName: "nara",
       LastName: "sikamaru",
       religion: "islam",
       gender: "male",
       age: 17,
       createdAt: new Date(),
       updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
