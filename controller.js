const Models = require('./models')
const Views = require('./views.js')

class Controller {
    static help(){
        Views.viewHelp()
    }
    static add (input){
        Models.Author.create(input)
        .then(data => {
            Views.messageSuccess(data);
          })
          .catch(err => {
            Views.messageError(err)
          })
    }
    static read (id) {
        Models.Author.findById(id)
        .then(data => {
            Views.messageSuccess(data.dataValues)
        })
        .catch(err => {
            Views.messageError(err)
        })
    }
    static readAll () {
        Models.Author.findAll()
        .then(dataAllAuthor => {
          dataAllAuthor.forEach(data => {
            Views.messageSuccess(data.dataValues);
          });
        })
        .catch(err => {
          Views.messageError(err);
        });
    }
    static update(values,id) {
        Models.Author.update({
          first_name: values.first_name,
          last_name: values.last_name,
          religion: values.religion,
          age: values.age,
          createAt: values.createAt,
          updateAt: values.updateAt

        }, {
          where: {
            id: id
          }
        })
          .then(() => {
            Views.messageSuccess(`Data with id ${id} success to updated`);
          })
          .catch(err => {
            Views.messageError(err.message);
        });
    }

    static delete(id) {
        Models.Author.destroy({
          where: {
            id: id
          }
        })
          .then(() => {
            Views.messageSuccess(`Data with id ${id} success deleted`);
          })
          .catch(err => {
            Views.messageError(err);
          });
    }
}

module.exports = Controller

