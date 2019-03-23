const Model = require('../models')
const View = require('../views/View')

class AuthorController {
    static addAuthor(arrData) {
        if(arrData.length < 6) return View.showErr(`Data Harus Lengkap`)

       Model.Authors.create({
            first_name: arrData[0],
            last_name: arrData[1],
            religion: arrData[2],
            gender: arrData[3],
            age: arrData[4]
       })
       .then(()=> {
           View.showData(`Success add Data`)
       })
       .catch(err => {
           View.showErr(err)
       })
    }

    static readAllAuthor() {
        Model.Authors.findAll()
        .then(dataAll => {
            View.showMuchData(dataAll)
        })
        .catch(err => {
            View.showErr(err)
        })
    }

    static findAuthorById(id) {
        if(!id && id < 0) return View.showErr(`Id Must number`)

        Model.Authors.findByPk(id)
        .then(dataAuthor =>  {
            View.showData(dataAuthor.dataValues)
        })
        .catch(err => {
            View.showErr(err)
        })
    }

    static updateAuthor(arrData) {
        if(arrData.length < 6) return View.showErr(`Data Harus Lengkap`)
        if(arrData[0] < 0) return View.showErr(`Id Must number`)
        
        Model.Authors.update({
            first_name: arrData[1],
            last_name: arrData[2],
            religion: arrData[3],
            gender: arrData[4],
            age: arrData[5]
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

    static deleteAuthor(id) {
        if(!id && id < 0) return View.showErr(`Id Must number`)

        Model.Authors.destroy({
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

module.exports = AuthorController