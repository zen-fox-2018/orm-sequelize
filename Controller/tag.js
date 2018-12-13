
const Model = require("../models");
const Views = require("../Views/views");
const Tags = Model.Tags;

class TagsController {

    static addTags(name) {
        let TagsObj = {
            name: name
        }

        Tags.create(TagsObj).then(data => {
            // console.log(data)
            Views.showAddedTags(data.dataValues)
        }).catch(err => {
            throw err
        })
    }

    static readOne(id) {
        Tags.findOne({where:{id:id}}).then(found => {
            Views.showFindByOne(found.dataValues)
        }).catch(err => {
            throw "Sorry it seems that this tag does not exists!"
        })
    }

    static readAll() {
        Tags.findAll()
        Tags.then(all => {
            all.forEach(element => {
                Views.showFindAll(element.dataValues)
            });
        }).catch(err => {
            throw err
        })
    }

    static update(name) {
        Tags.update({where:{
            name: name
        }}).then(updated => {
            Views.showUpdated(updated)
        }).catch(err => {
            throw err
        })
    }

    static delete(input) {
        let id = Number(input)
        Tags.destroy({where:{id: id}})
            .then((deleted) => {
                Views.showDeleted(`You have successfully deleted ${deleted} Tag`);
                process.exit()
            }).catch(err => {
                throw err
        })
    }
}

module.exports = TagsController
