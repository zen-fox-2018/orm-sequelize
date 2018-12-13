const argv = process.argv.slice(2)
const authorControl = require('./controllers/authorControl')

class Index {
  static start(command) {
    if (command[0] === 'help') {
      authorControl.help()
    } else if (command[0] === 'add') {
      let data = command.slice(1)
      authorControl.add(data)
    } else if (command[0] === 'read_one') {
      let id = command.slice(1)
      authorControl.readOne(id)
    }

  }

}

Index.start(argv)