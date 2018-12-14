const models = require("../models");
const view = require("../view/view");
const Author = models.Author

class ControllerAuthor {
    static add(first_name, last_name, religion, gender, age) {
        Author.create({
            first_name: first_name,
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: age,
            createdAt: new Date(),
            updatedAT: new Date()
        })
            .then(data => {
                view.showAdd(data.dataValues)
            })
            .catch(err => {
                view.showError(err)
            })
    }

    static find_one(id) {
        Author.findOne({
            where: { id: id }
        })
            .then(data => {
                view.showData(data.dataValues)
            })
            .catch(err => {
                view.showError(err)
            })
    }

    static read() {
        Author.findAll()
            .then(data => {
                view.showAll(data);
                // dataAllAuthor.forEach(data => {
                // });
            })
            .catch(err => {
                view.showError(err);
            });
    }

    static update(first_name, last_name, religion, gender, age, id) {
        Author.update({
            first_name: first_name,
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: age,
            updatedAT: new Date()
        }, {
                where: {
                    id: id
                }
            })
            .then((data) => {
                return Author.findOne({
                    where: { id: id }
                })
            })
            .then(dataUpdate => {
                view.updateSuccess(dataUpdate.dataValues);
            })
            .catch(err => {
                view.showError(err);
            });
    }
}

module.exports = ControllerAuthor