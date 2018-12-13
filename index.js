const command = process.argv.slice(2)
const AuthorController = require('./controller/AuthorController.js')
const TagController = require('./controller/TagController')


switch (command[0]) {
    case `help`:
        AuthorController.showHelp()
        break;
    case `author`:
        switch (command[1]) {
            case `add`:
                AuthorController.addAuthor(command[2], command[3], command[4], command[5], command[6])
                break;
            case `read_all`:
                AuthorController.readAll()
                break;
            case `read_one`:
                //input id
                AuthorController.readOne(command[2])
                break;
            case `update`:
                let params = command[2]
                let paramsnewvalue = command[3]
                let id = command[4]
                AuthorController.updateAuthor(params, paramsnewvalue, id)
                break;
            case `delete`:
                let delId = command[2]
                AuthorController.deleteAuthor(delId)
        }
        break;
    case `tag`:
        switch (command[1]) {
            case `add`:
                TagController.addTag(command[2])
                break;
            case `read_all`:
                TagController.readAll()
                break;
            case `read_one`:
                //input id
                TagController.readOne(command[2])
                break;
            case `update`:
                let params = command[2]
                let paramsnewvalue = command[3]
                let id = command[4]
                TagController.updateTag(params, paramsnewvalue, id)
                break;
            case `delete`:
                let delId = command[2]
                TagController.deleteTag(delId)
        }
        break;
    default:
        AuthorController.showHelp()
        break;
}