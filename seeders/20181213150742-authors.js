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
   return queryInterface.bulkInsert('Authors', [
    {
      first_name : "erwin" ,
      last_name : "ramadhan",
      religion : "islam",
      gender : "male",
      age : 20,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      first_name : "there",
      last_name : "coa",
      religion : "buddhist",
      gender : "female",
      age : 22,
      createdAt : new Date(),
      updatedAt : new Date()
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
   return queryInterface.bulkDelete('Authors', null, {});
  }
};
