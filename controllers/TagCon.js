const View = require('../views/View')
const Tag = require('../models').Tag

class TagController {
  static execute(input) {
    let command = input[0] 
    let option = input.slice(1)

    switch (command) {
      case 'add': TagController.add(option)
        break;
      case 'read_one': TagController.readOne(option)
        break;
      case 'read_all': TagController.readAll()
        break;
      case 'update': TagController.update(option)
        break;
      case 'delete': TagController.delete(option)
        break;
      default: View.help()
        break;
    }
  }

  static add(input) {
    if (input.length !== 1){
      View.disErr(`Invalid input!`)
    } else {
      let obj = {   
        name: input[0],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      Tag.create(obj)
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
    Tag.findOne({where:{
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
    Tag.findAll()
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
    Tag.update({
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
    Tag.destroy({where: {
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
module.exports = TagController