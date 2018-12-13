const AuthorController = require('./controllers/AuthorController.js')
const TagController = require('./controllers/TagController.js')
const ArticleController = require('./controllers/ArticleController.js')
const View = require('./views/View.js')

const argv = process.argv.slice(2)
let table = argv[0]
let command = argv[1]
let options = argv.slice(2)

switch (table) {
  case "author":
    if (command === "add") {
      AuthorController.add(options)
    }
    else if (command === "read_one") {
      AuthorController.readOne(options)
    }
    else if (command === "read_all") {
      AuthorController.readAll()
    }
    else if (command === "update") {
      AuthorController.update(options)
    }
    else if (command === "delete") {
      AuthorController.delete(options)
    }
    break;

  case "tag":
    if (command === "add") {
      TagController.add(options)
    }
    else if (command === "read_one") {
      TagController.readOne(options)
    }
    else if (command === "read_all") {
      TagController.readAll()
    }
    else if (command === "update") {
      TagController.update(options)
    }
    else if (command === "erase") {
      TagController.delete(options)
    }
    break;

  case "article":
    if (command === "add") {
      ArticleController.add(options)
    }
    else if (command === "read_one") {
      ArticleController.readOne(options)
    }
    else if (command === "read_all") {
      ArticleController.readAll()
    }
    else if (command === "update") {
      ArticleController.update(options)
    }
    else if (command === "erase") {
      ArticleController.delete(options)
    }
    break;

  default: View.help()

}
