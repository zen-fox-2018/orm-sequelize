const argv = process.argv.slice(2);
const command = argv[0];
const AuthorController = require('./controller/controller.js');
const ArticleController = require('./controller/articleController.js');
const tagController = require('./controller/tagController.js');

if (command === 'help' || !command) {
  AuthorController.showAllCommand();
}

if (command === 'author') {
  switch(argv[1]) {
    //firstName, lastName, religion, gender, age
    case "add":
      AuthorController.addAuthor(argv[2], argv[3], argv[4], argv[5], argv[6]);
      break;
    //id
    case "read_one":
      AuthorController.readData(argv[2]);
      break;
    case "read_all":
      AuthorController.readAllData();
      break;
    //id, colName, value
    case "update":
      AuthorController.updateData(argv[2], argv[3], argv[4]);
      break;
    //id
    case "delete":
      AuthorController.deleteData(argv[2]);
      break;
  }

} else if (command === "article") {
  switch (argv[1]) {
    //title, body, authorId, tagId
    case "add":
      ArticleController.addArticle(argv[2], argv[3], argv[4], argv[5]);
      break;
    //id 
    case "read_one":
      ArticleController.readData(argv[2]);
      break;
    case "read_all":
      ArticleController.readAllData();
      break;
    //id, colName, value
    case "update":
      ArticleController.updateData(argv[2], argv[3], argv[4]);
      break;
    case "delete":
      ArticleController.deleteData(argv[2]);
      break;
  }

} else if (command === "tag") {
  switch (argv[1]) {
    //name
    case "add":
      tagController.addArticle(argv[2]);
      break;
    //id 
    case "read_one":
      tagController.readData(argv[2]);
      break;
    case "read_all":
      tagController.readAllData();
      break;
    //id, value
    case "update":
      tagController.updateData(argv[2], argv[3]);
      break;
    case "delete":
      tagController.deleteData(argv[2]);
      break;
  }
}
