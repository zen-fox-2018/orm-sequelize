const ControllerAuthor = require('./controllers/controllerAuthor.js');
const ControllerArticle = require('./controllers/controllerArticle.js');
const ControllerTag = require('./controllers/controllerTag.js');
const Controller = require('./controllers/controller.js');
const argv = process.argv;
const command = argv.slice(2);

switch (command[0]) {
  case 'help':
    Controller.help();
    break;
  case 'author':
    if (command[1] == 'add') {
      ControllerAuthor.add(command[2], command[3], command[4])
    }
    else if (command[1] == 'read_all') {
      ControllerAuthor.findAll();
    }
    else if (command[1] == 'read_one') {
      ControllerAuthor.findOne(command[2]);
    }
    else if (command[1] == 'update') {
      ControllerAuthor.update(command[2], command[3], command[4])
    }
    else if(command[1] == 'delete') {
      ControllerAuthor.delete(command[2])
    }
    break;
  case 'article':
    if (command[1] == 'add') {
      ControllerArticle.add(command[2], command[3])
    }
    else if (command[1] == 'read_all') {
      ControllerArticle.findAll();
    }
    else if (command[1] == 'read_one') {
      ControllerArticle.findOne(command[2]);
    }
    else if (command[1] == 'update') {
      ControllerArticle.update(command[2], command[3], command[4])
    }
    else if(command[1] == 'delete') {
      ControllerArticle.delete(command[2])
    }
    break;
  case 'tag':
    if (command[1] == 'add') {
      ControllerTag.add(command[2], command[3])
    }
    else if (command[1] == 'read_all') {
      ControllerTag.findAll();
    }
    else if (command[1] == 'read_one') {
      ControllerTag.findOne(command[2]);
    }
    else if (command[1] == 'update') {
      ControllerTag.update(command[2], command[3], command[4])
    }
    else if(command[1] == 'delete') {
      ControllerTag.delete(command[2])
    }
    break;
  default:
    Controller.default();
}
