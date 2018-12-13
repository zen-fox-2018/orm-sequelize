const Model = require('../models')
const View = require('../views/authorView.js')

class Controller {
    static help() {
        View.helpText()
    }

    static readAuthor() {
        Model.Author.findAll()
        .then((data) => {
            data.forEach(authorData => {
                View.readData(authorData.dataValues)
            });
        })
        .catch((err) => {
            View.readError(err)
        })
    }

    static addAuthor(firstName, lastName, religion, gender, age) {
        let authorObj = {
            first_name: firstName,
            last_name: lastName,
            religion: religion,
            gender: gender,
            age: Number(age),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        Model.Author.create(authorObj)
        .then((data) => {
            // let newData = data.get({plain:true})
            View.addAuthorSucceed(data.dataValues)
        })
        .catch((err) => {
            View.addAuthorErr(err)
        })
    }

    static readOne(idAuthor) {
        Model.Author.findOne({where: {id: idAuthor}})
        .then((authorData) => {
            View.readOneData(authorData.dataValues)
        })
        .catch((err) => {
            View.readError(err)
        })
    }

    static update(idAuthor, column, value) {
        let paramsHasToBeChanged = {}
        paramsHasToBeChanged[column] = value
        Model.Author.update(paramsHasToBeChanged, {where: {id: idAuthor}})
        .then((dataUpdate) => {
            View.updateSucceed(dataUpdate.dataValues)
        })
        .catch((err) => {
            View.error(err)
        })
    }

    static delete(idAuthor) {
        Model.Author.destroy({where: {id: idAuthor}})
        .then(() => {
            View.dataDeleted()
        })
        .catch((err) => {
            View.error(err)
        })
    }
}

module.exports = Controller