const argv = process.argv.slice(2)

const ControllerAuthor = require('./controllers/controllerAuthor')

const table = argv[0]
const command = argv[1]

if (table == 'author') {
    switch (command) {
        case 'add':
            ControllerAuthor.add(argv[2], argv[3], argv[4], argv[5], argv[6])
            break;

        case 'read_one':
            ControllerAuthor.find_one(argv[2])
            break;

        case 'read_all':
            ControllerAuthor.read()
            break;

        case 'update':
            ControllerAuthor.update(argv[2], argv[3], argv[4], argv[5], argv[6], argv[7])
            break;

        case 'delete':
            ControllerAuthor.delete(argv[2])


        default:
            break;
    }
}