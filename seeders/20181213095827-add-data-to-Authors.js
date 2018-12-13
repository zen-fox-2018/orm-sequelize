'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let autor = [
      {
       first_name: "erwin",
       last_name: "ramadhan",
       religion: "islam",
       gender: "male",
       age: 20,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       first_name: "cu chu",
       last_name: "lain",
       religion: "islam",
       gender: "male",
       age: 22,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       first_name: "ryougi",
       last_name: "shiki",
       religion: "budha",
       gender: "female",
       age: 19,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       first_name: "nara",
       last_name: "sikamaru",
       religion: "islam",
       gender: "male",
       age: 17,
       createdAt: new Date(),
       updatedAt: new Date()
      }
    ]

      return queryInterface.bulkInsert("Authors", autor)
  },

  down: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkDelete('Authors', null, {});
    
  }
};
