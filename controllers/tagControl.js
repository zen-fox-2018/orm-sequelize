const Model = require('../models/')
const View = require('../views/view')

class tagControl {
  static add(data) {
    let tag = {
      name : data[0],
      createdAt : new Date(),
      updatedAt : new Date()
    };

    Model.Tag.create(name)
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
    Model.Tag.findByPk(id)
      .then( found => {
        if (found) {
          View.displaySuccess(found.dataValues)
        } else {
          throw 'Data tidak ditemukan'
        }
      })
      .catch( err => {
        View.displayError(err)
      })
  }

  static read_all() {
    Model.Tag.findAll()
      .then( data => {
        if (data) {
          let output = data.map( a => a.dataValues)
          View.displaySuccess(output)
        } else {
          throw 'Find Gagal'
        }
      })
      .catch( err => {
        View.displayError(err)
      })
  }

  static update(id, field, value) {
    Model.Author.findByPk(id)
      .then ( found => {
        if (found) {
          return Model.Author.update({[field] : value}, {where: {"id" : id}})
        } else {
          throw 'Tag is not found'
        }
      })
      .then( updated => {
        if (updated){
          View.displaySuccess('Update berhasil')
        } else { 
          throw 'Update Gagal'
        }
      })
      .catch( err => {
        View.displayError(err)
      })
  }

  static erase(id) {
    Model.Author.destroy({where : { "id" : id }})
      .then( success => {
        if (success){
          View.displaySuccess('Erase Berhasil')
        } else {
          throw 'Erase gagal'
        }
      })
      .catch( err => {
        View.displayError(err)
      })
  }

  
}

module.exports = tagControl