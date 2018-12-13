const Model = require('../models')
const View = require('../views/view')

class authorControl {
  static add(data) {
    let author = {
      first_name : data[0],
      last_name : data[1],
      religion : data[2],
      gender : data[3],
      age : data[4],
      createdAt : new Date(),
      updatedAt : new Date()
    };

    Model.Author.create(author)
      .then( data => {
        if (data) {
          View.displaySuccess(data.dataValues)
        } else {
          throw 'Create Gagal'
        }
      })
      .catch( err => {
        View.displayError(err)
      })
  }

  static readOne(id) {
    Model.Author.findByPk(id)
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
    Model.Author.findAll()
      .then( data => {
        if (data) {
          let output = data.map( a => a.dataValues)
          View.displaySuccess(output)
        } else {
          throw 'Data error'
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
          throw 'Author is not found'
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
    Model.Author.destroy( { where : { "id" : id } } )
      .then( success => {
        if (success){
          View.displaySuccess('Erase data berhasil')
        } else {
          throw 'Erase gagal'
        }
      })
      .catch( err => {
        View.displayError(err)
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
        console.log(err)
      })
  }

  static help() {
    View.helpText()
  }
}

module.exports = authorControl

// authorControl.add(["maman", "hasri", "theist", "male", 24])
// authorControl.readOne(1)
// authorControl.read_all()
// authorControl.update(2, "last_name", "muhammad")
// authorControl.delete(3)

// authorControl.where(["religion", "last_name"], ["theist", "muhammad"]) // test case untuk WHERE


// Post.findAll({
//   where: {
//     authorId: 12,
//     status: 'active'
//   }
// });
// SELECT * FROM post WHERE authorId = 12 AND status = 'active';