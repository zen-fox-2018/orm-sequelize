const View = require('../views/View')
const Model = require('../models')
const Tag = Model.Tag

class TagController {

    static add(arr) {
        let obj = {
            name: arr[0]
        }
        if (!arr[0]) {
            View.disErr('please insert all data')
        } else {
            Tag.create(obj)
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
        Tag.findOne({where: obj})
            .then(data => {
                !data? View.disErr('wrong id'): View.display(data.dataValues)
            })
            .catch(err => {
                View.disErr(err)
            })
    }

    static read_all() {
        Tag.findAll()
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
        Tag.update(obj, {where: {id}})
            .then(data => { //data mengembalikan nilai [1]||[0] (1==success||0==fail)
                !data[0]? View.disErr('wrong id'): View.display('success update data')
            })
            .catch(err => {
                View.disErr(err)
            })
    }

    static erase(id) {
        Tag.destroy({where: {id: id}})
            .then(data => { //data mengembalikan nilai 1||0 (1==success||0==fail)
                !data? View.disErr('wrong id'): View.display('success earse data')
            })
            .catch(err => {
                View.disErr(err)
            })
    }
}

module.exports = TagController