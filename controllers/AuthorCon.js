const View = require('../views/View')
const Author = require('../models').Author

class AuthorController {
  static execute(input) {
    let command = input[0] 
    let option = input.slice(1)

    switch (command) {
      case 'add': AuthorController.add(option)
        break;
      case 'read_one': AuthorController.readOne(option)
        break;
      case 'read_all': AuthorController.readAll()
        break;
      case 'update': AuthorController.update(option)
        break;
      case 'delete': AuthorController.delete(option)
        break;
      default: View.help()
        break;
    }
  }

  static add(input) {
    if (input.length !== 5){
      View.disErr(`Invalid input!`)
    } else {
      let obj = {   
        FirstName: input[0],
        LastName: input[1],
        religion: input[2],
        gender: input[3] ,
        age: input[4],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      Author.create(obj)
        .then(data => {
          View.display(data.dataValues)
          process.exit()
        })
        .catch(err => {
          View.disErr(err)
          process.exit()
        })
    }
  }

  static readOne(id) {
    Author.findOne({where:{
      id
    }})
      .then(data => {
        if(!data) {
          View.display(`Data not found!`)
        } else {
          View.display(data.dataValues)
        }
        process.exit()
      })
      .catch(err => {
        View.disErr(err)
      })
  }

  static readAll() {
    Author.findAll()
      .then(data => {
        data.forEach(element => {
          View.display(element.dataValues)
        });
        process.exit()
      })
      .catch(err => {
        View.disErr(err)
      })
  }

  static update(input) {
    let field = input[0]
    let value = input[1]
    let id = input[2]
    Author.update({
      [field] : value
    }, {
      where: {id}
    })
      .then(data => {
        View.display(`Success update ${data} data`)
        process.exit()
      })
      .catch(err => {
        View.disErr(err)
        process.exit()
      })
  }

  static delete(id) {
    Author.destroy({where: {
      id
    }})
      .then(data => {
        View.display(data)
        process.exit()
      })
      .catch(err => {
        View.disErr(err)
        process.exit()
      })
  }
}
module.exports = AuthorController