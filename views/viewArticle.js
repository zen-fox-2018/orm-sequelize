class View {
  static generalError(err){
    console.log('Error!');
    console.log(err);
  }

  static createSuccess(data){
    console.log(data.dataValues.name, ' article created!');
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
    console.log('article data updated!');
    console.log(data.dataValues);
  }

  static showDelete(){
    console.log('article entry deleted!');
  }
}

module.exports = View;
