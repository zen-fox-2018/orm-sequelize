const Model = require('../models')
const View = require('../views/articleView.js')

class Controller {
    static readAllArticle() {
        Model.Article.findAll()
        .then((data) => {
            data.forEach(articleData => {
                View.readData(articleData.dataValues)
            });
        })
        .catch((err) => {
            View.readError(err)
        })
    }

    static add(title, body, AuthorId, tagId) {
        let articleObj = {
            title: title,
            body: body,
            AuthorId: AuthorId,
            TagId: tagId,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        Model.Article.create(articleObj)
        .then((data) => {
            View.addSucceed(data.dataValues)
        })
        .catch((err) => {
            View.addErr(err)
        })
    }

    static readOne(id) {
        Model.Article.findOne({where: {id: id}})
        .then((articleData) => {
            View.readOneData(articleData.dataValues)
        })
        .catch((err) => {
            View.readError(err)
        })
    }

    static update(id, column, value) {
        let paramsHasToBeChanged = {}
        paramsHasToBeChanged[column] = value
        Model.Article.update(paramsHasToBeChanged, {where: {id: id}})
        .then((dataUpdate) => {
            View.updateSucceed(dataUpdate.dataValues)
        })
        .catch((err) => {
            View.error(err)
        })
    }

    static delete(id) {
        Model.Article.destroy({where: {id: id}})
        .then(() => {
            View.dataDeleted()
        })
        .catch((err) => {
            View.error(err)
        })
    }
}

module.exports = Controller