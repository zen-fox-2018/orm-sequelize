'use strict';
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    tittle: DataTypes.STRING,
    body: DataTypes.STRING,
    AuthorId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {});
  article.associate = function(models) {
    // associations can be defined here
  };
  return article;
};