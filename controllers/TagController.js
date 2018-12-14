const Model = require('../models')
const View = require('../views/View')


class TagController{

    static addTag(arrData) {
        if(arrData.length < 2)  return View.showErr(`Data Harus Lengkap`)

        Model.Tags.create({
            name: arrData
        })
        .then(()=> {
            View.showData(`Success add Tag`)
        })
        .catch((err)=>{
            View.showErr(err)
        })
    }

    static readAllTag() {
        Model.Tags.findAll()
        .then(dataAll => {
            dataAll.forEach(data => {
                View.showData(data.dataValues)
            });
        })
        .catch(err => {
            View.showErr(err)
        })
    }


    static findTagById(id) {
        if(!id && id < 0) return View.showErr(`Id Must number`)

        Model.Tags.findByPk(id)
        .then(dataTag =>  {
            View.showData(dataTag.dataValues)
        })
        .catch(err => {
            View.showErr(err)
        })
    }

    static updateTag(arrData) {
        if(arrData.length < 2)  return View.showErr(`Data Harus Lengkap`)
        if(arrData[0] < 0) return View.showErr(`Id Must number`)
        
        Model.Tags.update({
            name: arrData[1]
       } , {
           where : {
               id : arrData[0]
           }
       })
       .then(()=> {
           View.showData(`Data with id ${arrData[0]} success to updated`)
       })
       .catch(err => {
           View.showErr(err)
       })
    }

    static deleteTag(id) {
        if(!id && id < 0) return View.showErr(`Id Must number`)

        Model.Tags.destroy({
            where: {
                id : id
            }
        })
        .then(()=> {
            View.showData(`Data with id ${id} success to deleted`)
        })
        .catch(err => {
            View.showErr(err)
        })
    }
}

module.exports = TagController