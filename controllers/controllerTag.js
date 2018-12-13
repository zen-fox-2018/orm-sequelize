const ViewTag = require('../views/viewTag.js')
const Model = require('../models')

class Controller {
  static add(name, articleId){
    var obj ={
      name : name,
      articleId : articleId
    }
    Model.Tag.create(obj)
    .then((data) =>{
      ViewTag.createSuccess(data)
    })
    .catch(err =>{
      ViewTag.generalError(err);
    })
  }

  static findAll(){
    Model.Tag.findAll()
    .then(data =>{
      ViewTag.showAll(data)
    })
    .catch(err =>{
      ViewTag.generalError(err);
    })
  }

  static findOne(id){
    Model.Tag.findOne({
      where : {
        id : id
      }
    })
    .then(data =>{
      ViewTag.showOne(data);
    })
    .catch(err =>{
      ViewTag.generalError(err);
    })
  }

  static update(id, param, value){
    var obj = {};
    obj[param] = value;
    obj['updatedAt'] = new Date();
    // console.log(obj);
    Model.Tag.update(
      obj,
      { where : {  id : id  } }
    )
    .then(data => {
      ViewTag.showUpdate(data);
    })
    .catch(err =>{
      ViewTag.generalError(err);
    })
  }

  static delete(id){
    Model.Tag.destroy(
      {where : {id : id}}
    )
    .then(() =>{
      ViewTag.showDelete();
    })
    .catch(err =>{
      ViewTag.generalError(err);
    })
  }
}

module.exports = Controller;
