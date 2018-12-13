const View = require('../view/View')
const Model = require('../models')
const Tag = Model.Tag

class TagController {
    
    
    static add(input) {
        if (input.length !== 1) {
            View.displayErr("the requirement for input are 1")
        } else {
            let tag = {
                name : input[0],
                createdAt : new Date(),
                updatedAt : new Date()
            }
            Tag.create(tag)
                .then((data) => {
                    View.displaySuccess(`success add one Tag`)
                    process.exit()
                })
                .catch((err)=> {
                    View.displayErr(err)
                    process.exit()
                })
                
            }
    }

    static readOne(input) {
        let id = Number(input[0])
        Tag.findByPk(id)
            .then((data) => {
                if (data == null) {
                    View.displayErr('data not found')
                } else {
                    View.displaySuccess(data.dataValues)
                }
                process.exit()
            })
            .catch((err) => { 
                View.displayErr(err)
                process.exit()
            })
    }

    static readAll() {
        Tag.findAll()
            .then((data)=> {
                let result = []
                data.forEach(element => {
                    result.push(element.dataValues)
                });
                View.displaySuccess(result)
                process.exit()
            })
            .catch((err) => {
                View.displayErr(err)
            })
    }

    static update(input) {
        let field = input[0]
        let value = input[1]
        let id = input[2]
        Tag.update({
            [field] : value
        }, {where: {id}})
        .then((data)=> {
            if (data[0] === 0) {
                View.displayErr('id not found')
            } else {
                View.displaySuccess(`success update data ${data[0]}`)
            }
            process.exit()
        })
        .catch((err) => {
            View.displayErr(err)
            process.exit()
        })

    }
    static delete(input) {
        let id = Number(input[0])
        Tag.destroy({where:{id}})
            .then((data) => {
                if (data == 0) {
                    View.displayErr('id not found')
                } else {
                    View.displaySuccess(`berhasil delete ${data} row `)
                }
                process.exit()
            })
            .catch((err) => {
                View.displayErr(err)
                process.exit()
            })
    }

}

module.exports = TagController