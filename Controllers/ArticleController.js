const View = require('../view/View')
const Model = require('../models')
const Article = Model.Article

class ArticleController {

    static add(input) {
        if (input.length !== 4) {
            View.displayErr("the requirement for input are 4")
        } else {
            let article = {
                title: input[0],
                body : input[1],
                AuthorId: Number(input[2]),
                TagId : Number(input[3]),
                createdAt : new Date(),
                updatedAt : new Date()
            }
            console.log(article)
            Article.create(article)
                .then((data) => {
                    View.displaySuccess(` success add one Article`)
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
        Article.findByPk(id)
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
        Article.findAll()
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
        Article.update({
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
        Article.destroy({where:{id}})
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

module.exports = ArticleController