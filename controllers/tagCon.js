const Model = require('../models')
const View = require('../views/tagView.js')

class Controller {
    static readAll() {
        Model.Tag.findAll()
        .then((data) => {
            data.forEach(tagData => {
                View.readData(tagData.dataValues)
            });
        })
        .catch((err) => {
            View.readError(err)
        })
    }

    static add(tag) {
        let tagObj = {
            name: tag,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        Model.Tag.create(tagObj)
        .then((data) => {
            View.addSucceed(data.dataValues)
        })
        .catch((err) => {
            View.addErr(err)
        })
    }

    static readOne(id) {
        Model.Tag.findOne({where: {id: id}})
        .then((tagData) => {
            View.readOneData(tagData.dataValues)
        })
        .catch((err) => {
            View.readError(err)
        })
    }

    static update(id, column, value) {
        let paramsHasToBeChanged = {}
        paramsHasToBeChanged[column] = value
        Model.Tag.update(paramsHasToBeChanged, {where: {id: id}})
        .then((dataUpdate) => {
            View.updateSucceed(dataUpdate.dataValues)
        })
        .catch((err) => {
            View.error(err)
        })
    }

    static delete(id) {
        Model.Tag.destroy({where: {id: id}})
        .then(() => {
            View.dataDeleted()
        })
        .catch((err) => {
            View.error(err)
        })
    }
}

module.exports = Controller