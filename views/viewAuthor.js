class View {
  static generalError(err){
    console.log('Error!');
    console.log(err);
  }

  static createSuccess(data){
    console.log(data.dataValues.name, 'author created!');
  }

  static showAll(data){
    data.forEach(item =>{
      console.log(item.dataValues);
    })
  }

  static showOne(data){
    console.log(data.dataValues);
  }

  static showUpdate(data){
    console.log('author data updated!');
    console.log(data.dataValues);
  }

  static showDelete(){
    console.log('author entry deleted!');
  }
}

module.exports = View;
