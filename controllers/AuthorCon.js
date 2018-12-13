const View = require('../views/View')
const Author = require('../models').Author
const Sequelize = require('sequelize');
var Table = require('cli-table');
const chalk = require('chalk');

class AuthorController {
  static execute(input) {
    let command = input[0] 
    let option = input.slice(1)

    switch (command) {
      case 'add': AuthorController.add(option)
        break;
      case 'read_one': AuthorController.readOne(option)
        break;
      case 'read_all': AuthorController.readAll(option)
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
          process.exit()
        } else {
          var table = new Table({
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
                   , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
                   , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
                   , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
          });
           let header = Object.keys(data.dataValues).map(x => chalk.blue(x))
          table.push(
            header, Object.values(data.dataValues)
          );
          View.display(table.toString())
          process.exit()
        }
      })
      .catch(err => {
        View.disErr(err)
        process.exit()
      })
  }

  static readAll(input) {
    var where;
    
    const Op = Sequelize.Op
    if(input !== undefined) {
      var field = input[0]
      var comand = input[1]
      var value = input[2]
      if(!isNaN(value)) {
        Number(value)
      }
      switch (comand) {
        case 'between':
        value = [Number(input[2]), Number(input[3])]
          where = {
            where: {
              [field] : {
                [Op.between]: value
              }
            }
          }
          break;
        case 'like':
        where = {
          where: {
            [field] : {
              [Op.like]: `%${value}%`
            }
          }
        }
          break;
        case 'notlike':
        where = {
          where: {
            [field] : {
              [Op.notLike]: `%${value}%`
            }
          }
        }
          break;
        case 'equal':
        where = {
          where: {
            [field] : {
              [Op.eq]: value
            }
          }
        }
          break;
        case 'greater':
        where = {
          where: {
            [field] : {
              [Op.gt]: value
            }
          }
        }
          break;
        default:
          break;
      }

    } else {
      where = {}
    }
    Author.findAll(where)
      .then(data => {
        var table = new Table({
          chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
                 , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
                 , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
                 , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
        });
         let header = Object.keys(data[0].dataValues).map(x => chalk.cyanBright(x))
        table.push(
          header
        );
        for (let i in data) {
          table.push(Object.values(data[i].dataValues))
        }
        View.display(table.toString())
        process.exit()
      })
      .catch(err => {
        View.disErr(err)
        process.exit()
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