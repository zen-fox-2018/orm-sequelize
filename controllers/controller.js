const View = require('../views/view.js')
const Model = require('../models')

class Controller {
  static help(){
    View.showHelp();
  }

  static default(){
    View.default();
  }
}

module.exports = Controller;
