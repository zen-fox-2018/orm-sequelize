const Model = require('../models')
const View = require('../view.js')

class AuthorsController {
    static add(newAuthor) {
        let objAuthor = {
            first_name: newAuthor[0],
            last_name: newAuthor[1],
            religion: newAuthor[2],
            gender: newAuthor[3],
            age: newAuthor[4],
            createdAt: new Date(),
            updatedAt: new Date()
        }
        Model.Authors.create(objAuthor)
            .then(data => {
                View.display(data)
            })
            .catch(err => {
                View.error(err)
            })
    }

    static readOne(readAuthor) {
        Model.Authors.findOne({ where: { id: readAuthor[0] } })
            .then(data => {
                View.display(data.dataValues)
                process.exit()
            })
            .catch(err => {
                View.error(err)
                process.exit()
            })
    }

    static readAll() {
        Model.Authors.findAll()
            .then(datas =>{
                datas.forEach(data => {
                    View.success(data.dataValues)
                })
            })
            .catch(err =>{
                View.error(err)
            })

    }

    static update(value) {
        let obj = {}
        for (let i = 1; i < value.length; i = i + 2) {
            obj[value[i]] = value[i + 1]
        }
        Model.Authors.update(obj, {
            where: {
                id: value[0]
            }
        })
            .then(data => {
                if (data) {
                    View.message(`Success update data with id:${value[0]}`)
                    process.exit()
                }
            })
            .catch(err =>{
                View.error(err)
                process.exit()
            })
    }

    static delete(value) {
        Model.Authors.destroy({
            where: {
                id: value[0]
            }
        })
            .then(data => {
                if (data) {
                    View.message(`Success delete data with id: ${value[0]}`)
                    process.exit()
                }
            })
            .catch(err => {
                View.error(err)
                process.exit()
            })
    }

}

module.exports = AuthorsController