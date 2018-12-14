const argv = process.argv.slice(2)

const ControllerAuthor = require('./controllers/controllerAuthor')

// const command = argv[0]

// const [...args] = argv

const [ table, command,...args] = argv

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
            ControllerAuthor.update(...args)
    
        default:
            break;
    }
}