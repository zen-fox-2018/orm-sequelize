const Model = require('../models')
const View = require('../views/View')

class ArticleController {
    static addArticle(arrData) {
       Model.Article.create({
            title: arrData[0],
            body: arrData[1],
            AuthorId: +arrData[2],
            TagId: +arrData[3]
       })
       .then(()=> {
           View.showData(`Success add Data`)
       })
       .catch(err => {
           View.showErr(err)
       })
    }

    static readAllArticle() {
        Model.Article.findAll()
        .then(dataAll => {
            dataAll.forEach(data => {
                View.showData(data.dataValues)
            });
        })
        .catch(err => {
            View.showErr(err)
        })
    }

    static findArticleById(id) {

        Model.Article.findByPk(id)
        .then(dataAuthor =>  {
            View.showData(dataAuthor.dataValues)
        })
        .catch(err => {
            View.showErr(err)
        })
    }

    static updateArticle(arrData) {
        
        Model.Article.update({
            title: arrData[1],
            body: arrData[2],
            AuthorId: arrData[3],
            TagId: arrData[4]
       } , {
           where : {
               id : arrData[0]
           }
       })
       .then(()=> {
           View.showData(`Data with id ${arrData[0]} success to updated`)
       })
       .catch(err => {
           View.showErr(err)
       })
    }

    static deleteArticle(id) {
        Model.Article.destroy({
            where: {
                id : id
            } 
        })
        .then(()=> {
            View.showData(`Data with id ${id} success to deleted`)
        })
        .catch(err => {
            View.showErr(err)
        })
    }
    
}

module.exports = ArticleController