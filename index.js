const argv = process.argv.slice(2)

const AuthorController = require('./controllers/AuthorController')
const TagController = require('./controllers/TagController')
const ArticleController = require('./controllers/ArticleController')

switch (argv[0]) {
    case 'author':
        switch (argv[1]) {
            case 'add':
                AuthorController.add(argv.slice(2))
                break;

            case 'read_one':
                AuthorController.read_one(argv[2])
                break;

            case 'read_all':
                AuthorController.read_all()
                break;

            case 'update':
                AuthorController.update(argv.slice(2))
                break;

            case 'erase':
                AuthorController.erase(argv[2])
                break;

            case 'findWhere':
                AuthorController.findWhere(argv.slice(2))
                break;
        
            default:
                AuthorController.help()
                break;
        }
        break;

    case 'tag':
        switch (argv[1]) {
            case 'add':
                TagController.add(argv.slice(2))
                break;

            case 'read_one':
                TagController.read_one(argv[2])
                break;

            case 'read_all':
                TagController.read_all()
                break;

            case 'update':
                TagController.update(argv.slice(2))
                break;

            case 'erase':
                TagController.erase(argv[2])
                break;

            case 'findWhere':
                TagController.findWhere(argv.slice(2))
                break;
        
            default:
                AuthorController.help()
                break;
        }
        break;

    case 'article':
        switch (argv[1]) {
            case 'add':
                ArticleController.add(argv.slice(2))
                break;

            case 'read_one':
                ArticleController.read_one(argv[2])
                break;

            case 'read_all':
                ArticleController.read_all()
                break;

            case 'update':
                ArticleController.update(argv.slice(2))
                break;

            case 'erase':
                ArticleController.erase(argv[2])
                break;

            case 'findWhere':
                ArticleController.findWhere(argv.slice(2))
                break;
        
            default:
                AuthorController.help()
                break;
        }
        break;

    default:
        AuthorController.help()
        break;
}