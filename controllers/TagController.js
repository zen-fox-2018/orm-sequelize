const Model = require('../models')
const View = require('../views/View.js')

class TagController {
  static add(options) {
    let obj = {
      name: options[0],
      createdAt: new Date(),
      updatedAt: new Date()
    }
    console.log(obj);

    Model.Tag.create(obj)

      .then(function(data) {
        if (data) {
          View.message(`Success create Tag ${data.dataValues.id}`)
          process.exit()
        }
      })
      .catch(function(err) {
        View.error(err)
        process.exit()
      })

  }

  static readOne(options) {

    Model.Tag.findOne({where: {id: options[0]}})

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

    Model.Tag.findAll()

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

    Model.Tag.update(obj,{
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

    Model.Tag.destroy({
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

module.exports = TagController