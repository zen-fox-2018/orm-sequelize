'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    religion: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  author.associate = function(models) {
    // associations can be defined here
  };
  return author;
};