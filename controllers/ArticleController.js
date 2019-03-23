const Model = require('../models')
const View = require('../views/View')

class ArticleController {
    static addArticle(arrData) {
        if(arrData.length < 4)  return View.showErr(`Data Harus Lengkap`)

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
           View.showMuchData(dataAll)
        })
        .catch(err => {
            View.showErr(err)
        })
    }

    static findArticleById(id) {
        if(!id && id < 0) return View.showErr(`Id Must number`)

        Model.Article.findByPk(id)
        .then(dataAuthor =>  {
            View.showData(dataAuthor.dataValues)
        })
        .catch(err => {
            View.showErr(err)
        })
    }

    static updateArticle(arrData) {
        if(arrData.length < 4)  return View.showErr(`Data Harus Lengkap`)
        if(arrData[0] < 0) return View.showErr(`Id Must number`)
        
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
        if(!id && id < 0) return View.showErr(`Id Must number`)

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