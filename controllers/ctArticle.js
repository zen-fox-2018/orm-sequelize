const View = require('../views/view');
const Model = require('../models');

class Article {

  static add(title, body, AuthorId, TagId) {
    Model.Articles.create({
      title: title,
      body: body,
      AuthorId: AuthorId,
      TagId: TagId
    })

      .then((data) => {
        View.print(data.dataValues);
      })

      .catch((err) => {
        View.showErr(err);
      });
  }

  static readOne(id) {
    Model.Articles.findByPk(id)
      .then((result) => {
        View.print(result.dataValues);
      })

      .catch((err) => {
        View.showErr(err);
      });
  }

  static readAll() {
    Model.Articles.findAll()
      .then((result) => {
        result.forEach(data => {
          View.print(data.dataValues);
        });
      })

      .catch((err) => {
        View.showErr(err);
      });
  }

  static update(id, title, body, AuthorId, TagId) {
    Model.Articles.update({
      title: title,
      body: body,
      AuthorId: AuthorId,
      TagId: TagId
    },
      {
        where: {
          id: id
        }
      })

      .then(() => {
        View.print(`Data with id ${id} success to updated`);
      })

      .catch((err) => {
        View.showErr(err);
      });
  }

  static delete(id) {
    Model.Articles.destroy({
      where: {
        id: id
      }
    })

      .then(() => {
        View.print(`Data with id ${id} success deleted`);
      })

      .catch((err) => {
        View.showErr(err);
      });

  }
}

module.exports = Article;