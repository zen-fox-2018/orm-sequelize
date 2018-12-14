const View = require('../view.js');
const Model = require('../models/index.js');

class ArticleController {

  static showAllCommand() {
    View.showAllCommand();
  }

  static addArticle(title, body, authorId, tagId) {
    let obj = {
      title: title,
      body: body,
      authorId: authorId,
      tagId: tagId,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    Model.Article.create(obj)
    .then((data) => {
      View.addSucceed(data.dataValues);
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static readData(id) {
    Model.Article.findById(id)
    .then((data) => {
      View.readDatabyId(data.dataValues);
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static readAllData() {
    Model.Article.findAll()
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
    Model.Article.update(obj, {where: {id: id}})
    .then((data) => {
      View.updateData(data.dataValues);
    })
    .catch((err) => {
      View.displayErr(err);
    })
  }

  static deleteData(id) {
    Model.Article.destroy({
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

module.exports = ArticleController;