const View = require('./view.js');
const Model = require('./models');

class Controller {

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

    Model.author.create(obj)
    .then((data) => {
      View.addSucceed(data.dataValues.id)
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static readData() {
    Model.Author.findAll()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  static readAllData() {

  }

  static updateData () {

  }

  static deleteData() {

  }
}

module.exports = Controller;