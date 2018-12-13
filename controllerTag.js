
const Models = require('./models')
const Views = require('./views.js')

class ControllerTag {
    static help(){
        Views.viewHelp()
    }
    static add (input){
        Models.Tag.create(input)
        .then(data => {
            Views.messageSuccess(data);
          })
          .catch(err => {
            Views.messageError(err)
          })
    }
    static read (id) {
        Models.Tag.findById(id)
        .then(data => {
            Views.messageSuccess(data.dataValues)
        })
        .catch(err => {
            Views.messageError(err)
        })
    }
    static readAll () {
        Models.Tag.findAll()
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
        Models.Tag.update({
          name: values
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
        Models.Tag.destroy({
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

module.exports = ControllerTag

