const View = require('../view/View.js')
const Model = require('../models')

class TagController {
    static showHelp(){
        View.showHelpMessage()
    }

    static addTag(name){
        let objTag = {            
            name : name,
            createdAt : new Date(),
            updatedAt : new Date()
        }
        Model.Tag.create(objTag)
        .then((data)=>{
            let dataTag = data.get({plain:true})
            View.showMessage(dataTag)
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static readAll(){
        Model.Tag.findAll()
        .then((allTagData)=>{
            allTagData.forEach(data=>{
                View.showMessage(data.dataValues)
            })
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static readOne(id){
        Model.Tag.findById(id)
        .then((data)=>{
            View.showMessage(data.dataValues)
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static updateTag(params, paramsvalue, id){
        // let objTag = {
        //     first_name : first_name,
        //     last_name : last_name,
        //     religion : religion,
        //     gender : gender,
        //     age : age,
        //     createdAt : new Date(),
        //     updatedAt : new Date()
        // }
        let objTag = {}
        objTag[params] = paramsvalue
        objTag['updatedAt'] = new Date()
        Model.Tag.update(objTag, {
            where : { id : id}
        } )
        .then(()=>{
            View.showMessage(`data with id ${id} is updated`)
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static deleteTag(id){
        Model.Tag.destroy({            
            where : {id : id}
        }
        )
        .then(()=>{
            View.showMessage(`data with id ${id} is deleted`)
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

}
module.exports = TagController