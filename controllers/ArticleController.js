const Model = require('../models')
const View = require('../views/View.js')

class ArticleController {
  static add(options) {
    let obj = {
      title: options[0],
      body: options[1],
      authorId: options[2],
      tagId: options[3],
      createdAt: new Date(),
      updatedAt: new Date()
    }
    console.log(obj);

    Model.Article.create(obj)

      .then(function(data) {
        if (data) {
          View.message(`Success create Article ${data.dataValues.id}`)
          process.exit()
        }
      })
      .catch(function(err) {
        View.error(err)
        process.exit()
      })

  }

  static readOne(options) {

    Model.Article.findOne({where: {id: options[0]}})

      .then(function(data) {
        View.success(data.dataValues)
        process.exit()
      })

      .catch(function(err) {
        View.error(err)
        process.exit()
      })


  }

  static readAll() {

    Model.Article.findAll()

      .then(function(datas) {
        datas.forEach(function(data) {
          View.success(data.dataValues)
        })
        process.exit()
      })

      .catch(function(err) {
        View.error(err)
        process.exit()
      })

  }

  static update(options) {

    let obj = {}
    for (let i = 1; i < options.length; i = i + 2) {
      obj[options[i]] = options[i+1]
    }
    console.log(obj);

    Model.Article.update(obj,{
      where: {
        id: options[0]
      }
    })

    .then(function(data) {
      if (data) {
        View.message(`Success update data with id:${options[0]}`)
        process.exit()
      }
    })

    .catch(function(err) {
      View.error(err)
      process.exit()
    })


  }

  static delete(options) {

    Model.Article.destroy({
      where: {
        id: options[0]
      }
    })

    .then(function(data) {
      if (data) {
        View.message(`Success delete data with id: ${options[0]}`)
        process.exit()
      }
    })

    .catch(function(err) {
      View.error(err)
      process.exit()
    })


  }
}

module.exports = ArticleController