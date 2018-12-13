const Model = require('../models')
const View = require('../views/View')


class TagController{

    static addTag(arrData) {
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

        Model.Tags.findByPk(id)
        .then(dataTag =>  {
            View.showData(dataTag.dataValues)
        })
        .catch(err => {
            View.showErr(err)
        })
    }

    static updateTag(arrData) {
        
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