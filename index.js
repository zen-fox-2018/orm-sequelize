const command = process.argv.slice(2)
// const ArticlesController = require('./controllers/ArticleController.js')
const AuthorsController = require('./controllers/authorsController.js')
// const TagsController = require('./controllers/TagController.js')
const View = require('./view.js')


class Index{
    constructor(command){
        this.command= command
    }

    executeCommand(){
        switch(this.command[0]){
            case "author":
                if(this.command[1] == "add"){
                    AuthorsController.add(this.command.slice(2))
                }
                else if (command === "read_one") {
                    AuthorController.readOne(this.command.slice(2))
                  }
                  else if (command === "read_all") {
                    AuthorController.readAll()
                  }
                  else if (command === "update") {
                    AuthorController.update(this.command.slice(2))
                  }
                  else if (command === "delete") {
                    AuthorController.delete(this.command.slice(2))
                  }
                  break;
        }
    }
}

let action = new Index(command)
action.executeCommand()

