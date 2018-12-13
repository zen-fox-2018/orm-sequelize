
const Model = require("../models");
const Views = require("../Views/views");
const Tags = Model.Tags;

class TagsController {

    static addTags(name) {
        let TagsObj = {
            name: name
        }
        Tags.create(TagsObj).then(data => {
            Views.showAddedTags(data.dataValues);
            process.exit()
        }).catch(err => {
            throw err
        })
    }

    static readOne(id) {
        Tags.findOne({where:{id:id}}).then(found => {
            Views.showFindByOne(found.dataValues);
            process.exit()
        }).catch(err => {
            throw "Sorry it seems that this tag does not exists!"
        })
    }

    static readAll() {
        Tags.findAll().then(all => {
            all.forEach(element => {
                Views.showFindAll(element.dataValues);
                process.exit()
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
