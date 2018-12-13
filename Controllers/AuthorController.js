const View = require('../view/View')
const Model = require('../models')
const Sequelize = require('sequelize')
const Table = require('cli-table')
const chalk = require('chalk')
const Author = Model.Author

class AuthorController {


    static add(input) {
        if (input.length !== 5) {
            View.displayErr("the requirement for input are 5")
        } else {
            let autor = {
                first_name : input[0],
                last_name : input[1],
                religion : input[2],
                gender: input[3],
                age : Number(input[4]),
                createdAt : new Date(),
                updatedAt : new Date()
            }
            Author.create(autor)
                .then((data) => {
                    View.displaySuccess(`${data.dataValues}success add one Author`)
                    process.exit()
                })
                .catch((err)=> {
                    View.displayErr(err)
                    process.exit()
                })
                
            }
    }

    static readOne(input) {
        let id = Number(input[0])
        Author.findByPk(id)
            .then((data) => {
                if (data == null) {
                    View.displayErr('data not found')
                } else {
                    var table = new Table({
                        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
                               , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
                               , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
                               , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
                      });
                       
                      table.push(
                          Object.keys(data.dataValues).map(x => chalk.blue(x))
                        , Object.values(data.dataValues)
                      );
                       
                    View.displaySuccess(table.toString())
                }
                process.exit()
            })
            .catch((err) => { 
                View.displayErr(err)
                process.exit()
            })
    }

    static readAll(input) {
    const op = Sequelize.Op
    let where = {}
        let command = input[1]
        let field = input[0]
        let value =  input[2]
        if (!isNaN(value)) {
            value = Number(input[2])
        }
        console.log(command, field, value)
        switch (command) {
            case "equal":
                where = {where:{
                    [field]: {
                        [op.eq]: value
                    }
                }}
                break;
            case "between":
                where = {where:{
                    [field] : {
                        [op.between] :[value, Number(input[3])]
                    }
                }}
                break;
            case "like":
                where = {where: {
                    [field]: {
                        [op.like] : `%${value}%`
                    }
                }}
                break;
            case "greater":
                where = {where: {
                    [field]: {
                        [op.gte]:value
                    }
                }}
                break;
            case "lower":
                where = {
                    where: {
                        [field]: {
                            [op.lt] : value
                        }
                    }
                }
                break;
            default:
                break;
        }
        Author.findAll(where)
            .then((data)=> {
                let result = []
                data.forEach(element => {
                    result.push(element.dataValues)
                });
                View.displaySuccess(result)
                process.exit()
            })
            .catch((err) => {
                View.displayErr(err)
            })
    }

    static update(input) {
        let field = input[0]
        let value = input[1]
        let id = input[2]
        Author.update({
            [field] : value
        }, {where: {id}})
        .then((data)=> {
            if (data[0] === 0) {
                View.displayErr('id not found')
            } else {
                View.displaySuccess(`success update data ${data[0]}`)
            }
            process.exit()
        })
        .catch((err) => {
            View.displayErr(err)
            process.exit()
        })

    }

    static delete(input) {
        let id = Number(input[0])
        Author.destroy({where:{id}})
            .then((data) => {
                if (data == 0) {
                    View.displayErr('id not found')
                } else {
                    View.displaySuccess(`berhasil delete ${data} row `)
                }
                process.exit()
            })
            .catch((err) => {
                View.displayErr(err)
                process.exit()
            })
    }
        

}

module.exports = AuthorController