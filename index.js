const authorController = require('./controllers/authorController')

const argv = process.argv.slice(2)
let input = null
switch (argv[0]) {
    case 'author' :
        if(argv[1] === 'add') {
            input = {
                first_name: argv[2],
                last_name: argv[3],
                religion: argv[4],
                gender: argv[5],
                age: argv[6]
            }
            authorController.create(input)
        } else if (argv[1] === 'read_one') {
            authorController.findOne(argv[2])
        } else if (argv[1] === 'read_all') {
            authorController.readAll()
        } else if (argv[1] === 'update') {
            input = {
                id: argv[2],
                field: argv[3],
                value: argv[4]
            }
            authorController.update(input)
        } else if (argv[1] === 'erase') {
            authorController.delete(argv[2])
        } else if (argv[1] === 'findWhere') {
            authorController.findWhere(argv[2])
        }
    break;
}