const Model = require('../models')
const View = require('../views/View.js')

class AuthorController {
  static add(options) {
    let obj = {
      first_name: options[0],
      last_name: options[1],
      religion: options[2],
      gender: options[3],
      createdAt: new Date(),
      updatedAt: new Date()
    }
    console.log(obj);

    Model.Author.create(obj)

      .then(function(data) {
        if (data) {
          View.message(`Success create Author ${data.dataValues.id}`)
          process.exit()
        }
      })
      .catch(function(err) {
        View.error(err)
        process.exit()
      })

  }

  static readOne(options) {

    Model.Author.findOne({where: {id: options[0]}})

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

    Model.Author.findAll()

      .then(function(authors) {
        authors.forEach(function(author) {
          View.success(author.dataValues)
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

    Model.Author.update(obj,{
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

    Model.Author.destroy({
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

module.exports = AuthorController