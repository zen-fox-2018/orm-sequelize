const ViewArticle = require('../views/viewArticle.js')
const Model = require('../models')

class Controller {
  static add(name, authorId){
    var obj ={
      name : name,
      authorId : authorId,
    }
    Model.Article.create(obj)
    .then((data) =>{
      ViewArticle.createSuccess(data)
    })
    .catch(err =>{
      ViewArticle.generalError(err);
    })
  }

  static findAll(){
    Model.Article.findAll()
    .then(data =>{
      ViewArticle.showAll(data)
    })
    .catch(err =>{
      ViewArticle.generalError(err);
    })
  }

  static findOne(id){
    Model.Article.findOne({
      where : {
        id : id
      }
    })
    .then(data =>{
      ViewArticle.showOne(data);
    })
    .catch(err =>{
      ViewArticle.generalError(err);
    })
  }

  static update(id, param, value){
    var obj = {};
    obj[param] = value;
    obj['updatedAt'] = new Date();
    // console.log(obj);
    Model.Article.update(
      obj,
      { where : {  id : id  } }
    )
    .then(data => {
      ViewArticle.showUpdate(data);
    })
    .catch(err =>{
      ViewArticle.generalError(err);
    })
  }

  static delete(id){
    Model.Article.destroy(
      {where : {id : id}}
    )
    .then(() =>{
      ViewArticle.showDelete();
    })
    .catch(err =>{
      ViewArticle.generalError(err);
    })
  }
}

module.exports = Controller;
