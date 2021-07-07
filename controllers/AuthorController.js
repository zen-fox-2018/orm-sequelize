const View = require('../views/View')
const Model = require('../models')
const Author = Model.Author

class AuthorController {

    static help() {
        View.help()
    }

    static add(arr) {
        let obj = {
            first_name: arr[0],
            last_name: arr[1],
            religion: arr[2],
            gender: arr[3],
            age: arr[4]
        }
        if (!arr[4]) {
            View.disErr('please insert all data')
        } else {
            Author.create(obj)
                .then(data => {
                    View.add(data.dataValues)
                })
                .catch(err => {
                    View.disErr(err)
                })
        }
    }

    static read_one(id) {
        let obj = {id: id}
        Author.findOne({where: obj})
            .then(data => {
                !data? View.disErr('wrong id'): View.display(data.dataValues)
            })
            .catch(err => {
                View.disErr(err)
            })
    }

    static read_all() {
        Author.findAll()
            .then(data => {
                View.displayAll(data)
            })
            .catch(err => {
                View.disErr(err)
            })
    }

    static update(arr) {
        let obj = {}
        let id = arr[0]
        for (let i = 1; i < arr.length; i+=2) {
            obj[arr[i]] = arr[i+1]
        }
        Author.update(obj, {where: {id}})
            .then(data => { //data mengembalikan nilai [1]||[0] (1==success||0==fail)
                !data[0]? View.disErr('wrong id'): View.display('success update data')
            })
            .catch(err => {
                View.disErr(err)
            })
    }

    static erase(id) {
        Author.destroy({where: {id: id}})
            .then(data => { //data mengembalikan nilai 1||0 (1==success||0==fail)
                !data? View.disErr('wrong id'): View.display('success earse data')
            })
            .catch(err => {
                View.disErr(err)
            })
    }
}

module.exports = AuthorController