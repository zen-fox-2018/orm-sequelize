const View = require('../view/View.js')
const Model = require('../models')

class AuthorController {
    static showHelp(){
        View.showHelpMessage()
    }

    static addAuthor(first_name, last_name, religion, gender, age){
        let objAuthor = {
            first_name : first_name,
            last_name : last_name,
            religion : religion,
            gender : gender,
            age : age,
            createdAt : new Date(),
            updatedAt : new Date()
        }
        Model.Author.create(objAuthor)
        .then((data)=>{
            let dataAuthor = data.get({plain:true})
            View.showMessage(dataAuthor)
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static readAll(){
        Model.Author.findAll()
        .then((allAuthorData)=>{
            allAuthorData.forEach(data=>{
                View.showMessage(data.dataValues)
            })
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static readOne(id){
        Model.Author.findById(id)
        .then((data)=>{
            View.showMessage(data.dataValues)
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static updateAuthor(params, paramsvalue, id){
        // let objAuthor = {
        //     first_name : first_name,
        //     last_name : last_name,
        //     religion : religion,
        //     gender : gender,
        //     age : age,
        //     createdAt : new Date(),
        //     updatedAt : new Date()
        // }
        let objAuthor = {}
        objAuthor[params] = paramsvalue
        objAuthor['updatedAt'] = new Date()
        Model.Author.update(objAuthor, {
            where : { id : id}
        } )
        .then(()=>{
            View.showMessage(`data with id ${id} is updated`)
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static deleteAuthor(id){
        Model.Author.destroy({            
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
module.exports = AuthorController