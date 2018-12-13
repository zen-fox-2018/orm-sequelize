const args = process.argv.slice(2);
const Author = require("./Controller/author")
const command = args[0];

switch (command) {
    case "author":
        switch (args[1]) {
            case "add":
                Author.addAuthor(args[2], args[3], args[4], args[5], args[6])
                break;
            case "read_one":
                Author.read_one(args[2]);
                break;
            case "read_all":
                Author.read_all();
                break;
            case "update":
                Author.update();
                break;
            case "delete":
                Author.delete(args[2])
                break;
            default:
                break;
        }
        break;

    default:
        break;
}