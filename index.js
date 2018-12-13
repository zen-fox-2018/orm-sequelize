const argv = process.argv.slice(2);

const Help = require('./controllers/cthelp');
const Author = require('./controllers/ctAuthor');
const Tag = require('./controllers/ctTag');
const Article = require('./controllers/ctArticle');

switch (argv[0]) {

  // Help

  case 'help':
    Help.showHelp();
    break;

  // Author

  case 'author':

    switch (argv[1]) {

      case 'add':
        Author.add(argv[2], argv[3], argv[4], argv[5], argv[6]);
        break;

      case 'read_all':
        Author.readAll()
        break;

      case 'read_one':
        Author.readOne(argv[2])
        break;

      case 'update':
        Author.update(argv[2], argv[3], argv[4], argv[5], argv[6], argv[7]);
        break;

      case 'delete':
        Author.delete(argv[2]);
        break;

    }

    break;

  // Tag

  case 'tag':

    switch (argv[1]) {

      case 'add':
        Tag.add(argv[2]);
        break;

      case 'read_all':
        Tag.readAll()
        break;
      case 'read_one':
        Tag.readOne(argv[2])
        break;

      case 'update':
        Tag.update(argv[2], argv[3]);
        break;

      case 'delete':
        Tag.delete(argv[2]);
        break;

    }

    break;

  // Article

  case 'article':

    switch (argv[1]) {

      case 'add':
        Article.add(argv[2], argv[3], argv[4], argv[5]);
        break;

      case 'read_all':
        Article.readAll()
        break;
      case 'read_one':
        Article.readOne(argv[2])
        break;

      case 'update':
        Article.update(argv[2], argv[3], argv[4], argv[5], argv[6]);
        break;

      case 'delete':
        Article.delete(argv[2]);
        break;

    }

    break;

  default:
    Help.showHelp();
    break;
}