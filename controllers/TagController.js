const Model = require('../models')
const View = require('../views/View')

class TagController{

    static addTag(arrData) {
        Model.Tags.create({
            name: arrData[0]
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
        .then(data => {
            View.showData(data.dataValues)
        })
        .catch(err => {
            View.showErr(err)
        })
    }
}

module.exports = TagController