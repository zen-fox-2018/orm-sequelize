const View = require('../view.js');
const Model = require('../models/index.js');

class TagController {

  static showAllCommand() {
    View.showAllCommand();
  }

  static addTag(name) {
    let obj = {
      name: name,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    Model.Tag.create(obj)
    .then((data) => {
      View.addSucceed(data.dataValues);
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static readData(id) {
    Model.Tag.findById(id)
    .then((data) => {
      View.readDatabyId(data.dataValues);
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static readAllData() {
    Model.Tag.findAll()
    .then((data) => {
      data.forEach(e => {
        View.allData(e.dataValues);
      });
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static updateData(id, value) {
    Model.Tag.update({name: value}, {where: {id: id}})
    .then((data) => {
      View.updateData(data.dataValues);
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static deleteData(id) {
    Model.Tag.destroy({
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

module.exports = TagController;