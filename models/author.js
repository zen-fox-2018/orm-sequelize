'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    religion: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
  };
  return Author;
};