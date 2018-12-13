let argv = process.argv.slice(2)
const Controller = require('./controllers/Controller')
const AuthorController = require('./controllers/AuthorController')
const TagController = require('./controllers/TagController')

const Data = argv.slice(2)
const DataTags = Data.join(' ')
const input = argv[2]


class Index {
    constructor(command1, command2) {
        this.command1 = command1
        this.command2 = command2
    }
    executeApps() {
        switch(this.command1, this.command2) {
            case "help", undefined:
                Controller.showMenu()
                break;
            case "author", "add":
                AuthorController.addAuthor(Data)
                break;
            case "author", "read_all":
                AuthorController.readAllAuthor()
                break;
            case "author", "read_one":
                AuthorController.findAuthorById(input)
                break;
            case "author","update":
                AuthorController.updateAuthor(Data)
                break;
            case "author","delete":
                AuthorController.deleteAuthor(input)
                break;
            case "tag", "add":
                TagController.addTag(DataTags)
                break;
            case "tag","read_all":
                TagController.readAllTag()
                break;
            default:
                Controller.showMenu()
                break;
        }
    }
}

const IndexOps = new Index(argv[0], argv[1])



IndexOps.executeApps()