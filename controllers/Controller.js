const View = require('../views/View')
const ArticleController = require('./ArticleCon')
const AuthorController = require('./AuthorCon')
const TagController = require('./TagCon')

class Controller {
  static execute(input) {
    let command = input[0]
    switch (command) {
      case 'author':
        AuthorController.execute(input.slice(1))
        break;
      case 'article':
        ArticleController.execute(input.slice(1))
        break;
      case 'tag':
        TagController.execute(input.slice(1))
        break;
      default: View.help()
        break;
    }
  }
}
module.exports = Controller