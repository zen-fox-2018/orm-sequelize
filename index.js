const args = process.argv.slice(2);
const Author = require("./Controller/author");
const Article = require("./Controller/article");
const Tags = require("./Controller/tag")
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
    case "article":
        switch (args[1]) {
            case "add":
                Article.addArticle(args[2], args[3], args[4], args[5])
                break;
            case "read_one":
                Article.readOne(args[2])
                break;
            case "read_all":
                Article.readAll();
                break;
            case "update":
                Article.update(args[2]);
                break;
            case "delete":
                Article.delete(args[2]);
                break;
            default:
                break;
        }
    case "tag":
        switch (args[1]) {
            case "add":
                Tags.addTags(args[2])
                break;
            case "read_one":
                Tags.readOne(args[2]);
                break;
            case "read_all":
                Tags.readAll();
                break;
            case "update":
                Tags.update(args[2]);
                break;
            case "delete":
                Tags.delete(args[1]);
                break;
            default:
                break;
        }
        break
    default:
        break;
}