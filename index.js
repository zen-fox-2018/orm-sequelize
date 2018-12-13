const argv = process.argv.slice(2);
const command = argv[0];
const Controller = require('./controller.js');

if (command === 'help' || !command) {
  Controller.showAllCommand();
}

if (command === 'author') {
  switch(argv[1]) {

    case "add":
    //firstName, lastName, religion, gender, age
    Controller.addAuthor(argv[2], argv[3], argv[4], argv[5], argv[6]);
    break;

  case "read_one":
    //id
    Controller.readData(argv[2]);
    break;

  case "read_all":
    Controller.readAllData();
    break;

  case "update":
    Controller.updateData(command.slice(2));
    break;

  case "delete":
    Controller.deleteData(command[command.length - 1]);
    break;
  }

} else if (command === "article") {
  switch (argv[1]) {
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

} else if (command === "tag") {
  switch (command[1]) {
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
