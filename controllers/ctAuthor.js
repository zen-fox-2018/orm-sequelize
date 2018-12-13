const View = require('../views/view');
const Model = require('../models');

class Author {

  static add(fn, ln, religion, gender, age) {
    Model.Authors.create({
      first_name: fn,
      last_name: ln,
      religion: religion,
      gender: gender,
      age: age
    })

      .then((data) => {
        View.print(data.dataValues);
      })
      
      .catch((err) => {
        View.showErr(err);
      });
  }

  static readOne(id) {
    Model.Authors.findByPk(id)
      .then((result) => {
        View.print(result.dataValues);
      }).catch((err) => {
        View.showErr(err);
      });
  }

  static readAll() {
    Model.Authors.findAll()

      .then((result) => {
        result.forEach(data => {
          View.print(data.dataValues);
        });
      })

      .catch((err) => {
        View.showErr(err);
      });
  }

  static update(id, fn, ln, religion, gender, age) {
    Model.Authors.update({
      first_name: fn,
      last_name: ln,
      religion: religion,
      gender: gender,
      age: age
    }, {
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
    Model.Authors.destroy({
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

module.exports = Author;