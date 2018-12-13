
const Model = require("../models");
const Views = require("../Views/views");
const Author = Model.Author;

class AuthorController {
    static addAuthor(first_name, last_name, religion, gender, age) {
        let newData = {
            first_name: first_name,
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: age
        }

        Author.create(newData).then(data => {
            Views.showAddedAuthor(data.dataValues);
            process.exit()
        }).catch(err => {
            throw "Sorry something went wrong :("
        })
    }

    static read_one(id) {
        Author.findOne({where:{id:id}}).then(found => {
            Views.showFindByOne(found.dataValues)
        }).catch(err => {
            throw "Sorry it seems that person does not exists!"
        })
    }

    static read_all() {
        Author.findAll()
        .then(all => {
            all.forEach(element => {
                Views.showFindAll(element.dataValues)
            });
        }).catch(err => {
            throw err
        })
    }

    static update(name) {
        Author.update({where:{
            last_name: name
        }}).then(updated => {
            Views.showUpdated(updated)
        }).catch(err => {
            throw err
        })
    }

    static delete(input) {
        let id = Number(input)
        Author.destroy({where:{id: id}})
            .then((deleted) => {
                Views.showDeleted(`You have successfully deleted ${deleted} person`);
                process.exit()
            }).catch(err => {
                throw err
        })
    }
}

module.exports = AuthorController;
// process.exit()