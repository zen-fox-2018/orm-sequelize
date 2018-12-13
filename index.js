const command = process.argv.slice(2);
const Author = require('./Controllers/AuthorController');
class mainCommand {
    constructor(command) {
        this.command = command
    }

    runTheCommand() {
        if (command[0] === "author") {
            switch(command[1]) {
                case "add":
                Author.addAuthor(command.slice(2));
                break;
                case "read_one":
                Author.read_one(command.slice(2));
                break;
                case "read_all":
                Author.readAllData()
                break;
                case "update":
                Author.updateData(command.slice(2));
                break;
                case "delete":
                Author.deleteData(command[command.length-1])
                break;
            }
        } else if (command[0] === "tag") {
            switch(command[1]) {
                case "add":
                break;
                case "read_one":
                break;
                case "read_all":
                break;
                case "update":
                break;
                case "delete":
                break;
            }
        } else if (command[0] === "article") {
            switch(command[1]) {
                case "add":
                break;
                case "read_one":
                break;
                case "read_all":
                break;
                case "update":
                break;
                case "delete":
                break;
            }
        }
    }
}

let theCommand = new mainCommand(command)
theCommand.runTheCommand()