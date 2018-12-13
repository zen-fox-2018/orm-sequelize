const View = require('../views/view')
const Model = require('../models')

class articleControl {
  static add(data) {
    let article = {
      title : data[0],
      body : data[1],
      authorId : data[2],
      tagId : data[3],
      createdAt : new Date(),
      updatedAt : new Date()
    };

    Model.Article.create(article)
      .then( data => {
        if (data) {
          View.displaySuccess(data.dataValues)
        } else {
          throw 'Create gagal'
        }
      })
      .catch( err => {
        View.displayError(err)
      })
  }

  static readOne(id) {
    Model.Article.findByPk(id)
      .then( data => {
        if (data) {
          View.displaySuccess(data.dataValues)
        } else {
          throw 'Data tidak ditemukan'
        }
      })
      .catch( err => {
        View.displayError(err)
      })
  }

  static read_all() {
    Model.Article.findAll()
      .then( data => {
        if (data) {
          let output = data.map( a => a.dataValues)
          View.displaySuccess(output)
        }
      })
      .catch( err => {
        throw err
      })
  }

  static update(id, field, value) {
    Model.Article.findByPk(id)
      .then ( found => {
        if (found) {
          return Model.Article.update( { [field] : value }, { where: { "id" : id } } )
        } else {
          throw 'Article is not found'
        }
      })
      .then( updated => {
        if (updated){
          View.displaySuccess('Update berhasil')
        } else { 
          throw 'Update gagal'
        }
      })
      .catch( err => {
        View.displayError(err)
      })
  }

  static erase(id) {
    Model.Article.destroy( { where : { "id" : id } } )
      .then( success => {
        if (success){
          View.displaySuccess('Erase Berhasil')
        }
      })
      .catch( err => {
        throw err
      })
  }

  static where(field, value) {
    let condition = {}
    field.forEach( (a , i) => {
      condition[a] = value[i]
    })
    Model.Author.findAll( { where: condition } )
      .then( found => {
        if (found) {
          View.displaySuccess(found.map( a => a.dataValues))
        } else {
          throw 'gagal'
        }
      })
      .catch( err => {
        View.displayError(err)
      })
  }
}

module.exports = articleControl