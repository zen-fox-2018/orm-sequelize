const Controller = require('./Controllers/Controller')
const AuthorController = require('./Controllers/AuthorController')
const ArticleController = require('./Controllers/ArticleController')
const TagController = require('./Controllers/TagController')
const argv = process.argv.slice(2)
const command = argv[0]
const todo = argv[1]
const input = argv.slice(2)


switch (command) {
    case "author":
        switch (todo) {
            case "add":
                AuthorController.add(input)
                break;
            case "read_one":
                AuthorController.readOne(input)
                break;
            case "read_all":
                AuthorController.readAll(input)
                break;
            case "update":
                AuthorController.update(input)
                break;
            case "delete":
                AuthorController.delete(input)
                break;
            default: Controller.help()
                break;
        }
        break;
    case "article":
    switch (todo) {
        case "add":
            ArticleController.add(input)
            break;
        case "read_one":
            ArticleController.readOne(input)
            break;
        case "read_all":
            ArticleController.readAll(input)
            break;
        case "update":
            ArticleController.update(input)
            break;
        case "delete":
            ArticleController.delete(input)
            break;
        default: Controller.help()
            break;
    }
        break;
    case "tag":
    switch (todo) {
        case "add":
            TagController.add(input)
            break;
        case "read_one":
            TagController.readOne(input)
            break;
        case "read_all":
            TagController.readAll(input)
            break;
        case "update":
            TagController.update(input)
            break;
        case "delete":
            TagController.delete(input)
            break;
        default: Controller.help()
            break;
    }
        break;
    default: Controller.help()
        break;
}