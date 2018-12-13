const View = require('../views/View')
const Article = require('../models').Article

class ArticleController {
  static execute(input) {
    let command = input[0] 
    let option = input.slice(1)

    switch (command) {
      case 'add': ArticleController.add(option)
        break;
      case 'read_one': ArticleController.readOne(option)
        break;
      case 'read_all': ArticleController.readAll()
        break;
      case 'update': ArticleController.update(option)
        break;
      case 'delete': ArticleController.delete(option)
        break;
      default: View.help()
        break;
    }
  }

  static add(input) {
    if (input.length !== 4){
      View.disErr(`Invalid input!`)
    } else {
      let obj = {   
        title: input[0],
        body: input[1],
        AuthorId: input[2],
        TagId: input[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      Article.create(obj)
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
    Article.findOne({where:{
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
           let header = Object.keys(data.dataValues).map(x => chalk.red(x))
          table.push(
            header, Object.values(data.dataValues)
          );
          View.display(table.toString())
          process.exit()        }
      })
      .catch(err => {
        View.disErr(err)
      })
  }

  static readAll() {
    Article.findAll()
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
    Article.update({
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
    Article.destroy({where: {
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
module.exports = ArticleController