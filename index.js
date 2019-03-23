let argv = process.argv.slice(2)
const Controller = require('./controllers/Controller')
const AuthorController = require('./controllers/AuthorController')
const TagController = require('./controllers/TagController')
const ArticleController = require('./controllers/ArticleController')

let Data = argv.slice(2)

let input = argv[2]
console.log(input);


class Index {
    constructor(command1, command2) {
        this.command1 = command1
        this.command2 = command2
    }
    executeApps() {
        switch(this.command1) {
            case "help":
                Controller.showMenu()
                break;
            case "author": 
                switch(this.command2) {
                    case "add":
                        AuthorController.addAuthor(Data)
                        break;
                    case "read_all":
                        AuthorController.readAllAuthor()
                        break;
                    case "read_one":
                        AuthorController.findAuthorById(input)
                        break;
                    case "update":
                        AuthorController.updateAuthor(Data)
                        break;
                    case "delete":
                        AuthorController.deleteAuthor(input)
                        break;
                }
                break;
            case "tag":
                switch(this.command2) {
                    case "add":
                        TagController.addTag(input)
                        break;
                    case "read_all":
                        TagController.readAllTag()
                        break;
                    case "read_one":
                        TagController.findTagById(input)
                        break;
                    case "update":
                        TagController.updateTag(Data)
                        break;
                    case "delete":
                        TagController.deleteTag(input)
                        break;
                }
                break;
            case "article":
                switch(this.command2) {
                    case "add":
                        ArticleController.addArticle(Data)
                        break;
                    case "read_all":
                        ArticleController.readAllArticle()
                        break;
                    case "read_one":
                        ArticleController.findArticleById(input)
                        break;
                    case "update":
                        ArticleController.updateArticle(Data)
                        break;
                    case "delete":
                        ArticleController.deleteArticle(input)
                        break;
                }
                break;
            default:
                Controller.showMenu()
                break;
        }
    }
}

const IndexOps = new Index(argv[0], argv[1])



IndexOps.executeApps()