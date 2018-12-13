const argv = process.argv.slice(2)
const command = argv[0]
const options = argv[1]
const data = argv.slice(2)
//CONTROLLER
const ControllerArticle = require(`./Controllers/ControllerArticle`)
const ControllerAuthor = require(`./Controllers/ControllerAuthor`)
const ControllerTag = require(`./Controllers/ControllerTag`)
console.clear()
switch (command) {
    case `author`:
        switch (options) {
            case `add`:
                ControllerAuthor.add(data[0], data[1], data[2], data[3], data[4])
                break;

            case `read_one`:
                ControllerAuthor.read_one(data[0])
                break;

            case `read_all`:
                ControllerAuthor.readAll()
                break;

            case `update`:
                ControllerAuthor.update(data[0], data.slice(1))
                break;

            case `erase`:
                ControllerAuthor.erase(data)

                break;
        }
        break;

    case `tag`:
        switch (options) {
            case `add`:
                ControllerTag.add(data[0])
                break;

            case `read_one`:
                ControllerTag.read_one(data[0])
                break;

            case `read_all`:
                ControllerTag.readAll()
                break;

            case `update`:
                ControllerTag.update(data[0], data.slice(1))
                break;

            case `erase`:
                ControllerTag.erase(data)
                break;
        }
        break;

    default:
        switch (options) {
            case `add`:
                console.log(data);
                ControllerArticle.add(data[0], data[1], data[2], data[3])
                break;

            case `read_one`:
                ControllerArticle.read_one(data[0])
                break;

            case `read_all`:
                ControllerArticle.readAll()
                break;

            case `update`:
                ControllerArticle.update(data[0], data.slice(1))
                break;

            case `erase`:
                ControllerArticle.erase(data)
                break;
        }
        break;
}
