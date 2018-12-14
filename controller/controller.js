const View = require('../view.js');
const Model = require('../models/index.js');

class AuthorController {

  static showAllCommand() {
    View.showAllCommand();
  }

  static addAuthor(firstName, lastName, religion, gender, age) {
    let obj = {
      first_name: firstName,
      last_name: lastName,
      religion: religion,
      gender: gender,
      age: age,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    Model.Author.create(obj)
    .then((data) => {
      View.addSucceed(data.dataValues);
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static readData(id) {
    Model.Author.findById(id)
    .then((data) => {
      View.readDatabyId(data.dataValues);
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static readAllData() {
    Model.Author.findAll()
    .then((data) => {
      data.forEach(e => {
        View.allData(e.dataValues);
      });
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static updateData(id, colName, value) {
    let obj = {}
    obj[colName] = value;
    Model.Author.update(obj, {where: {id: id}})
    .then((data) => {
      View.updateData(data.dataValues);
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static deleteData(id) {
    Model.Author.destroy({
      where: {id: id}
    })
    .then(() => {
      View.deleteDataSucceed(id);
    })
    .then ((err) => {
      View.displayErr(err);
    })
  }
}

module.exports = AuthorController;