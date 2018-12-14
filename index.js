const argv = process.argv.slice(2);
const Author = require('./controllers/Author');
const Article = require('./controllers/Article');
const Tag = require('./controllers/Tag');
class Orm {
  constructor(command) {
    this.command = command;
  }

  playIt() {
    switch (this.command[0]) {
      case 'author':
        switch (this.command[1]) {
          case 'add':
            Author.addAuthor(this.command.slice(2));
          break;

          case 'read_one':
            Author.findOne(this.command.slice(2));
          break;

          case 'read_all':
            Author.findAll();
          break;

          case 'update':
            Author.updateAuthor(this.command.slice(2));
          break;

          case 'delete':
            Author.deleteAuthor(this.command.slice(2));
          break;

          default:
          Author.help();
        }
      break;

      case 'article':
        switch (this.command[1]) {
          case 'add':
            Article.addArticle(this.command.slice(2));
          break;

          case 'read_one':
            Article.findOne(this.command.slice(2));
          break;

          case 'read_all':
            Article.findAll();
          break;

          case 'update':
            Article.updateArticle(this.command.slice(2));
          break;

          case 'delete':
            Article.deleteArticle(this.command.slice(2));
          break;

          default:
          Article.help();
        }
      break;

      case 'tag':
        switch (this.command[1]) {
          case 'add':
            Tag.addTag(this.command.slice(2));
          break;

          case 'read_one':
            Tag.findOne(this.command.slice(2));
          break;

          case 'read_all':
            Tag.findAll();
          break;

          case 'update':
            Tag.updateTag(this.command.slice(2));
          break;

          case 'delete':
            Tag.deleteTag(this.command.slice(2));
          break;

          default:
          Tag.help();
        }
      break;

      case 'help':
        Author.help();
        Article.help();
        Tag.help();
        break;

      default:
        Author.help();
        Article.help();
        Tag.help();
    }
  }
}

let newOrm = new Orm(argv);

newOrm.playIt();
