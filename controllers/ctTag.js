const View = require('../views/view');
const Model = require('../models');

class Tag {

  static add(name) {
    Model.Tags.create({
      name: name
    })

      .then((data) => {
        View.print(data.dataValues);
      })

      .catch((err) => {
        View.showErr(err);
      });
  }

  static readOne(id) {
    Model.Tags.findByPk(id)
      .then((result) => {
        View.print(result.dataValues);
      })

      .catch((err) => {
        View.showErr(err);
      });
  }

  static readAll() {
    Model.Tags.findAll()

      .then((result) => {
        result.forEach(data => {
          View.print(data.dataValues);
        });
      })

      .catch((err) => {
        View.showErr(err);
      });
  }

  static update(id, name) {
    Model.Tags.update({
      name: name
    },
      {
        where: {
          id: id
        }
      })

      .then((result) => {
        View.print(`Data with id ${id} success to updated`);
      })

      .catch((err) => {
        View.showErr(err);
      });
  }

  static delete(id) {
    Model.Tags.destroy({
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

module.exports = Tag;