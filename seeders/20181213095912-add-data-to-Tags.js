'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let tag = [
      {name:"Javascript",createdAt: new Date(), updatedAt: new Date()},
      {name:"Middleware",createdAt: new Date(), updatedAt: new Date()},
      {name:"Session",createdAt: new Date(), updatedAt: new Date()},
      {name:"Multer",createdAt: new Date(), updatedAt: new Date()},
      {name:"Functional Programming",createdAt: new Date(), updatedAt: new Date()},
      {name:"Asynchronous",createdAt: new Date(), updatedAt: new Date()},
      {name:"Synchronous",createdAt: new Date(), updatedAt: new Date()}
    ]

    return queryInterface.bulkInsert("Tags", tag)
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null)
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
