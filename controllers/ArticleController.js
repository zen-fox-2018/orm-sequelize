const View = require('../views/View')
const Model = require('../models')
const Article = Model.Article

class ArticleController {

    static add(arr) {
        let obj = {
            title: arr[0],
            body: arr[1],
            authorId: arr[2],
            tagId: arr[3]
        }
        if (!arr[3]) {
            View.disErr('please insert all data')
        } else {
            Article.create(obj)
                .then(data => {
                    View.add(data.dataValues)
                })
                .catch(err => {
                    View.disErr(err)
                })
        }
    }

    static read_one(id) {
        let obj = {id: id}
        Article.findOne({where: obj})
            .then(data => {
                !data? View.disErr('wrong id'): View.display(data.dataValues)
            })
            .catch(err => {
                View.disErr(err)
            })
    }

    static read_all() {
        Article.findAll()
            .then(data => {
                View.displayAll(data)
            })
            .catch(err => {
                View.disErr(err)
            })
    }

    static update(arr) {
        let obj = {}
        let id = arr[0]
        for (let i = 1; i < arr.length; i+=2) {
            obj[arr[i]] = arr[i+1]
        }
        Article.update(obj, {where: {id}})
            .then(data => { //data mengembalikan nilai [1]||[0] (1==success||0==fail)
                !data[0]? View.disErr('wrong id'): View.display('success update data')
            })
            .catch(err => {
                View.disErr(err)
            })
    }

    static erase(id) {
        Article.destroy({where: {id: id}})
            .then(data => { //data mengembalikan nilai 1||0 (1==success||0==fail)
                !data? View.disErr('wrong id'): View.display('success earse data')
            })
            .catch(err => {
                View.disErr(err)
            })
    }
}

module.exports = ArticleController