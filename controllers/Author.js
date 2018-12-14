const Model = require('../models');
const AuthorView = require('../views/Author');
class Author {
  static addAuthor(data) {
    let newAuthor = {
      first_name : data[0],
      last_name : data[1],
      religion : data[2],
      gender : data[3],
      age : data[4]
    }
    Model.Author.create(newAuthor, {logging : false})
      .then(() => {
        AuthorView.showSucces(`Successfully created ${JSON.stringify(newAuthor)}`);
      })

      .catch((err) => {
        AuthorView.showErr(err);
      })
  }

  static findOne(data) {
    Model.Author.findByPk(data[0])
      .then((author) => {
        if (author) {
          // console.log(author.dataValues);
          AuthorView.showData(author)
        } else {
          AuthorView.showErr(`Author is empty`);
        }
      })

      .catch((err) => {
        AuthorView.showErr(err);
      })
  }

  static findAll() {
    Model.Author.findAll()
      .then((authors) => {
        if (authors.length) {
          AuthorView.showAllData(authors)
        } else {
          AuthorView.showErr(`Author is empty`);
        }
      })

      .catch((err) => {
        AuthorView.showErr(err);
      })
  }

  static updateAuthor(data) {
    let idAuthor = data.splice(-1, 1);
    let obj = {};
    for (let i = 0; i < data.length; i += 2) {
      obj[data[i]] = data[i+1];
    }
    Model.Author.update(obj, {where : {id : idAuthor}})
      .then((data) => {
        data[0] == 1 ? AuthorView.showSucces(`Successfully updated author ${idAuthor}`) : AuthorView.showErr(`Author doesnt exists`);
      })

      .catch((err) => {
        AuthorView.showErr(err);
      })
  }

  static deleteAuthor(data) {
    Model.Author.destroy({where: {id : data[0]}})
      .then((data) => {
        data == 1 ? AuthorView.showSucces(`Successfully deleted author ${idAuthor}`) : AuthorView.showErr(`Author doesnt exists`);
      })

      .catch((err) => {
        AuthorView.showErr(err);
      })
  }

  static help() {
    AuthorView.help();
  }
}

module.exports = Author;
