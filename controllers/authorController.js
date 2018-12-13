const Model = require('../models')
const View = require('../views/View')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class Controller {
    static create(input) {
        let data = {
            first_name: input.first_name,
            last_name: input.last_name,
            religion: input.religion,
            gender: input.gender,
            age: input.age,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        Model.Author.create(data)
            .then(data => {
                View.displaySuccess('Success create Author')
                View.displaySuccess(data.dataValuescl)
                process.exit()
            })
            .catch(err => {
                View.displayError(err)
                process.exit()
            })
    }

    static findOne(input) {
        let data = {
            id : input.id
        }
        Model.Author.findOne(data)
            .then(data => {
                View.displaySuccess('======================================')
                View.displaySuccess(data.dataValues)
                View.displaySuccess('======================================')
                process.exit()
            })
            .catch(err => {
                View.displayError('Error find one author' ,err)
                process.exit()
            })
    }

    static readAll() {
        Model.Author.findAll()
            .then(data => {
                let dataAuthor = []
                data.forEach(data => {
                    dataAuthor.push(data.dataValues)
                })
                View.displaySuccess(dataAuthor)
                process.exit()
            })
            .catch(err => {
                View.displayError(err)
                process.exit()
            })
    }

    static update(input) {
        let field = input.field
        let value = input.value
        Model.Author.update({
            [field]: value
        }, {
            where: {
                id: input.id,
            }
        })
        .then(() => {
            View.displaySuccess('Success update data')
            process.exit()
        })
        .catch(err => {
            View.displayError('Error update author', err)
            process.exit()
        })
    }

    static delete(input) {
        Model.Author.destroy({
            where: {
                id: input
            }
        })
        .then(() => {
            View.displaySuccess('Success Delete Author')
            process.exit()
        })
        .catch(err => {
            View.displayError('Error delete author', err)
            process.exit()
        })
    }

    static findWhere(input) {
        switch (input) {
            case 'ageGT':
                Model.Author.findAll({
                    where: {
                        age : {
                            [Op.gt] : 20
                        }
                    }
                })
                .then((data) => {
                    let dataAuthor = []
                    data.forEach(data => {
                        dataAuthor.push(data.dataValues)
                    })
                    View.displaySuccess(dataAuthor)
                    process.exit()
                })
                .catch((err) => {
                    View.displayError('Err', err)
                })
            break;

            case 'ageBW' :
                Model.Author.findAll({
                    where: {
                        age: {
                            [Op.between] : [20, 25]
                        }
                    }
                })
                .then((data) => {
                    let dataAuthor = []
                    data.forEach(data => {
                        dataAuthor.push(data.dataValues)
                    })
                    View.displaySuccess(dataAuthor)
                    process.exit()
                })
                .catch((err) => {
                    View.displayError('Err', err)
                })
            break;

            case 'religion' :
                Model.Author.findAll({
                    where: {
                        religion : {
                            [Op.iLike] : `%${input}`
                        }
                    }
                })
                .then((data) => {
                    let dataAuthor = []
                    data.forEach(data => {
                        dataAuthor.push(data.dataValues)
                    })
                    View.displaySuccess(dataAuthor)
                    process.exit()
                })
                .catch((err) => {
                    View.displayError('Err', err)
                })
            break;

            case 'femaleORage' :
                Model.Author.findAll({
                    [Op.or] :[
                        {
                            gender: {
                                [Op.like] : 'female%'
                            }
                        },{
                            age: {
                                [Op.lt] : 25
                            }
                        }
                    ]
                })
                .then((data) => {
                    let dataAuthor = []
                    data.forEach(data => {
                        dataAuthor.push(data.dataValues)
                    })
                    View.displaySuccess(dataAuthor)
                    process.exit()
                })
                .catch((err) => {
                    View.displayError('Err', err)
                })
            break;

            case 'ageLTE' :
                Model.Author.findAll({
                    where: {
                        age: {
                            [Op.lt] : 25
                        }
                    }
                })
                .then((data) => {
                    let dataAuthor = []
                    data.forEach(data => {
                        dataAuthor.push(data.dataValues)
                    })
                    View.displaySuccess(dataAuthor)
                    process.exit()
                })
                .catch((err) => {
                    View.displayError('Err', err)
                })
            break;
        }
    }
}

module.exports = Controller