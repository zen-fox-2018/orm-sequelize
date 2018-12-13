
const Model = require("../models");
const Article = Model.Article;
const Views = require("../Views/views");

class ArticleController {

    static addArticle(title, body, authorId, tagId) {

        let articleObj = {
            title: title,
            body: body,
            AuthorId: authorId,
            TagId: tagId
        }

        Article.create(articleObj).then(data => {
            Views.showAddedArticle(data.dataValues);
            process.exit()
        }).catch(err => {
            throw err
        })
    }

    static readOne(id) {
        Article.findOne({where:{id:id}}).then(found => {
            Views.showFindByOne(found.dataValues);
            process.exit()
        }).catch(err => {
            throw "Sorry it seems that person does not exists!"
        })
    }

    static readAll() {
        Article.findAll().then(all => {
            all.forEach(element => {
                Views.showFindAll(element.dataValues)
            });
            process.exit()
        }).catch(err => {
            throw err
        })
    }

    static update(name) {
        Article.update({where:{
            title: name
        }}).then(updated => {
            Views.showUpdated(updated)
        }).catch(err => {
            throw err
        })
    }

    static delete(input) {
        let id = Number(input)
        Article.destroy({where:{id: id}})
            .then((deleted) => {
                Views.showDeleted(`You have successfully deleted ${deleted} this article!`);
                process.exit()
            }).catch(err => {
                throw err
        })
    }
}

module.exports = ArticleController