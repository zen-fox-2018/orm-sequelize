const argv = process.argv.slice(2)
const command = argv[0]
const authorCon = require('./controllers/authorCon.js')
const articleCon = require('./controllers/articleCon.js')
const tagCon = require('./controllers/tagCon.js')

switch (command) {
    case 'help':
        authorCon.help()
        break;
    case 'author':
        if (argv[1] === 'add') {
            authorCon.addAuthor(argv[2], argv[3], argv[4], argv[5], argv[6])
        } else if (argv[1] === 'read_one') {
            authorCon.readOne(argv[2])
        } else if (argv[1] === 'read_all') {
            authorCon.readAuthor()
        } else if (argv[1] === 'update') {
            authorCon.update(argv[2], argv[3], argv[4])
        } else if (argv[1] === 'delete') {
            authorCon.delete(argv[2])
        }
        break;
    case 'tag':
        if (argv[1] === 'add') {
            tagCon.add(argv[2])
        } else if (argv[1] === 'read_one') {
            tagCon.readOne(argv[2])
        } else if (argv[1] === 'read_all') {
            tagCon.readAll()
        } else if (argv[1] === 'update') {
            tagCon.update(argv[2], argv[3], argv[4])
        } else if (argv[1] === 'delete') {
            tagCon.delete(argv[2])
        }
        break;
    case 'article':
        if (argv[1] === 'add') {
            articleCon.add(argv[2], argv[3], argv[4], argv[5])
        } else if (argv[1] === 'read_one') {
            articleCon.readOne(argv[2])
        } else if (argv[1] === 'read_all') {
            articleCon.readAllArticle()
        } else if (argv[1] === 'update') {
            articleCon.update(argv[2], argv[3], argv[4])
        } else if (argv[1] === 'delete') {
            articleCon.delete(argv[2])
        }
        break;
    default:
        authorCon.help()
        break;
}
