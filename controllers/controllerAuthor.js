const Model = require('./models')

class ControllerAuthor {

  static add (input) {
    Model.author.create({
      first_name: input[0],
      last_name:input[1],
      religion:input[2],
      gender:input[3],
      age:input[4],
      createdAt:new Date(),
      updatedAt :new Date()
    })
      .then(function(data){
        console.log(data.dataValues)
      })
      .catch(function(err) {
        console.log(err)
      })
  }

  static readOne (authorId) {
    Model.author.findById(Number(authorId))
    .then(author => {
      console.log(author.dataValues)
    })
    
    .catch(err => {
      console.log(err)
    })
  }

  static readAll () {
    Model.author.findAll()
    .then(data => {
      let result = []
      for(let i = 0; i < data.length; i++) {
        result.push(data[i].dataValues)
      }
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
  }

  static update (input) {
    let change = {[input[0]]:input[1]}
    let ids = input[2]
    Model.author.update(
      change,{ where: {id: ids}}
      )
    .then(function() {
      console.log('done')
    })
    .catch(err => {
      console.log(err)
    })
  }

  static delete (dataId) {
    Model.author.destroy({where: {id:dataId}})
    .then(function(data) {
      console.log(data)
    })
    .catch(err =>{
      console.log(err)
    }) 
  }



}

module.exports = ControllerAuthor