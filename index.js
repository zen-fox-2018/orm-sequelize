const ControllerAuthor = require('./controllers/controllerAuthor.js')
const ControllerArticle = require('./controllers/controllerArticle.js')
const controllerTags = require('./controllerTag.js')

class Index {
  constructor(command){
    this.command = command
  }

  getready () {
    switch (this.command[0]) {
      case 'author': 
        switch (this.command[1]) {
          case 'add': ControllerAuthor.add(this.command.slice(2))
            break;
          case 'read_one': ControllerAuthor.readOne(this.command.slice(2)[0])
            break;
          case 'read_all': ControllerAuthor.readAll()
            break;
          case 'update': ControllerAuthor.update(this.command.slice(2))
            break;
          case 'delete': ControllerAuthor.delete(this.command.slice(2))
            break;
          default:
            break;
        }
        break;
      case 'tag' : console.log('tag')
      switch (this.command[1]) {
        case 'add': controllerTags.add(this.command)
          break;
        case 'read_one': controllerTags.readOne(this.command)
          break;
        case 'read_all': controllerTags.readAll(this.command)
          break;
        case 'update': controllerTags.update(this.command)
          break;
        case 'delete': controllerTags.delete(this.command)
          break;
        default:
          break;
      }
        break;
      case 'article' : console.log('article')
      switch (this.command[1]) {
        case 'add': ControllerArticle.add(this.command)
          break;
        case 'read_one': ControllerArticle.readOne(this.command)
          break;
        case 'read_all': ControllerArticle.readAll(this.command)
          break;
        case 'update': ControllerArticle.update(this.command)
          break;
        case 'delete': ControllerArticle.delete(this.command)
          break;
        default:
          break;
      }
        break;
      case 'help' : console.log('showhelp')
      default: console.log('showhelp')
        break;
    }
  }
}

let argv = process.argv.slice(2)
let command = new Index(argv)
command.getready()