const ViewAuthor = require('../views/viewAuthor.js')
const Model = require('../models')

class Controller {
  static add(name, age, gender){
    var obj ={
      name : name,
      age : age,
      gender : gender
    }
    Model.Author.create(obj)
    .then((data) =>{
      ViewAuthor.createSuccess(data)
    })
    .catch(err =>{
      ViewAuthor.generalError(err);
    })
  }

  static findAll(){
    Model.Author.findAll()
    .then(data =>{
      ViewAuthor.showAll(data)
    })
    .catch(err =>{
      ViewAuthor.generalError(err);
    })
  }

  static findOne(id){
    Model.Author.findOne({
      where : {
        id : id
      }
    })
    .then(data =>{
      ViewAuthor.showOne(data);
    })
    .catch(err =>{
      ViewAuthor.generalError(err);
    })
  }

  static update(id, param, value){
    var obj = {};
    obj[param] = value;
    obj['updatedAt'] = new Date();
    // console.log(obj);
    Model.Author.update(
      obj,
      { where : {  id : id  } }
    )
    .then(data => {
      ViewAuthor.showUpdate(data);
    })
    .catch(err =>{
      ViewAuthor.generalError(err);
    })
  }

  static delete(id){
    Model.Author.destroy(
      {where : {id : id}}
    )
    .then(() =>{
      ViewAuthor.showDelete();
    })
    .catch(err =>{
      ViewAuthor.generalError(err);
    })
  }
}

module.exports = Controller;
